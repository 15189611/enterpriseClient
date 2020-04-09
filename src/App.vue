<template>
  <div id="app">
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
  components: {
    Header,
    Footer
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
  /* background-image: url("/static/images/intro-bg.jpg"); */
  background: #464444;
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
</style>
