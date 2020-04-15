<template>
  <div id="app">
    <!-- :class="[isHome ? 'wrapper' : 'wrapper2' ]" -->
    <div class="wrapper">
      <Header class="header" />
      <router-view class="middle" />
      <Footer class="footer" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  data() {
      return {
        screenWidth: document.body.clientWidth, // 屏幕尺寸
        isHome : false,
      }
    },
  components: {
    Header,
    Footer
  },
  methods: {
    onRouteChanged() {
      if(this.$route.path == '/' || this.$route.path == '/mHome'){
        this.isHome = true;
      }else{
        this.isHome = false;
      }
    }
  },
  created() {
    //this.onRouteChanged();
  },
  mounted(){
     const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
          console.log('宽=='+ window.screenWidth)
        })()
      }
  },
  watch: {
    $route: {
      immediate: true,
      handler: "onRouteChanged"
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  /* background: #545c64;  */
}

.wrapper2 {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url("/static/images/intro-bg.jpg"); 
}

.header {
  flex: 0 0 auto;
  background: #545c64; 
}
.middle {
  flex: 1 1 auto;
}
.footer {
  flex: 0 0 auto;
}
</style>
