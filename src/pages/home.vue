<template>
  <div class="hello">{{currentData}}</div>
</template>

<script>
import router from '../router/index.js'
import axios from 'axios'

export default {
  name: "首页",
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
    this.testGet();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  color: #42b983;
}
</style>
