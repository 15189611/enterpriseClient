<template>
  <div class="home-parent">

    <div class="text">首页</div>
  
  
  </div>

</template>

<script>
import router from '../router/index.js'
import axios from 'axios'

export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      currentData : ''
    };
  },
  methods: {
    testGet() {
      axios
        .get("/enterprise/hello/test.do")
        .then(res => {
          console.log(res.data);
          this.currentData = res.data;
        })
        .catch(err => {
          this.currentData = "首页";
          console.log(err);
        });
    }
  },
  mounted(){
    //this.testGet();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-parent {
   display: flex;
  justify-content: center;
}
.text{
   color: white;
   /* height:1200px; */
   text-align: center;
}
</style>
