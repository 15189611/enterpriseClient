<template>
  <div id="app">
    <!-- :class="[isHome ? 'wrapper' : 'wrapper2' ]" -->
    <div class="wrapper">
      <Header  :class="[isFixed ? 'isFixed' : 'header']" />
      <router-view class="middle" />
      <router-view name="xiaobai" class="middle" />
      <Footer class="footer" />
      <el-backtop :right="50" :bottom="50">
        <div class="el-backtop">
          <i class="top"></i>
        </div>
      </el-backtop>
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
      isHome: false,
      isFixed: false,
      offsetTop: 0
    };
  },
  components: {
    Header,
    Footer
  },
  methods: {
    onRouteChanged() {
      if (this.$route.path == "/" || this.$route.path == "/mHome") {
        this.isHome = true;
      } else {
        this.isHome = false;
      }
    },
    initHeight() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // this.isFixed = (scrollTop > this.offsetTop && scrollTop > 50) ? true : false;
      this.isFixed = false;
    }
  },
  created() {
    //this.onRouteChanged();
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
        console.log("宽==" + window.screenWidth);
      })();
    };

    window.addEventListener("scroll", this.initHeight);
    this.$nextTick(() => {
      this.offsetTop = document.querySelector("#boxFixed").offsetTop;
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
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
}

.isFixed {
  /* position : sticky; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}

.header {
  flex: 0 0 auto;
}

.middle {
  flex: 1 1 auto;
}
.footer {
  flex: 0 0 auto;
}

.el-backtop {
  position: fixed;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #409eff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  z-index: 5;
}
.top {
  font-family: element-icons !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
}
.top::before {
  content: "\e78f";
}
</style>
