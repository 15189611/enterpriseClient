<template>
  <div class="product-del-parent">
    产品详情
    {{
      this.$route.query.id
    }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      testGet() {
      axios
        .get("/enterprise/hello/test.do")
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted(){
    //this.testGet();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-del-parent {
   color: red;
   text-align: center;
}
</style>
