
<template>
  <div class="Header">
   
    <div class="logo">
      <img src="../../static/images/logo.jpg"/>
    </div>
    <div class="nav-box">
      <div class="nav">
        <li v-for="(item, index) in narArr" :key="index" :class="{check:index === currentIndex}" @click="routerLink(index, item.path)">{{item.title}}</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      currentIndex: 0,
      narArr: [
        {
          path: './mHome',
          title: '网站首页'
        },
        {
          path: './mProduct',
          title: '产品中心'
        },
        {
          path: './mAbout',
          title: '关于我们'
        },
        {
          path: './mNewsaction',
          title: '最新动向'
        },
        {
          path: './mContact',
          title: '联系我们'
        },
        {
          path: './mJoin',
          title: '加入我们'
        }
      ]
    }
  },
  methods: {
    routerLink (index, path) {
      this.$router.push(this.narArr[index])
      console.log(this.$route.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .Header{
    .logo{
      margin: 0px auto;
      width: 980px;
      height: 95px;
    }
    .nav-box{
      width: 100%;
      background-color:#333333;
      .nav{
        margin: 0px auto;
        width: 980px;
        font-size: 0;
        li {
          display: inline-block;
          width: 120px;
          text-align: center;
          font-size: 14px;
          list-style-type: none;
          vertical-align: middle;
          color: #FFFFFF;
          cursor: pointer;
          &:hover{
            color: blueviolet;
          }
        }
        &::after{
          content: '';
          display: inline-block;
          vertical-align: middle;
          height: 35px;
        }
      }
    }
  }
</style>
