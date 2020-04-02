<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer class="footer"/>
  </div>
</template>

<script>
 import Header from '@/components/Header'
 import Footer from '@/components/Footer'


export default {
  name: 'App',
    components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
