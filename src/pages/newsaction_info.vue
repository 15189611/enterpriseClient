<template>

  <div class="newsaction-info-parent">

      <div class="newsaction-info-content" @click="test">
        <el-image class="news-img" fit="cover" src="../../static/images/new-icon_1.jpg" />
      </div>

  </div>

</template>

<script>
export default {
  props : ['id','type'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    test(){
        this.$router.push({
          path: `/mProductDetails2`,
          query: {
            id:  "1",
          }
        }).catch(err => {});
    }
  },
    watch: {
    id: {
      immediate: true,
      handler: function(newValue) {
        console.log("news-info-id==>>" + this.id);
      }
    },
    type: {
      immediate: true,
      handler: function(newValue) {
        console.log("news-info,type==>>" + this.type);
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newsaction-info-parent {
  display: flex;
  background-color: #292929;
  color: white;
}


</style>
