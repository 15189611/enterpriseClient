<template>
  <div class="interview-parent">
    挺甜账户
     {{ this.$route.params.id }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.interview-parent {
   color: red;
   text-align: center;
}
</style>
