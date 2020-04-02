
<template>
  <div class="Header">
    <div class="logo">
      <img src="../../static/images/logo.jpg" />
    </div>

    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="isRouter"
    >
      <el-menu-item index="./mHome" class="el-menu-child">首页</el-menu-item>
      <el-submenu index="./mProduct" class="el-menu-child">
        <template slot="title">产品中心</template>
        <el-menu-item index="./mProduct">芯片中心</el-menu-item>
        <el-menu-item index="./mProductDetails">高通芯片</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="./mAbout" class="el-menu-child">关于我们</el-menu-item>
      <el-menu-item index="./mNewsaction" class="el-menu-child">最新动向</el-menu-item>
      <el-menu-item index="./mContact" class="el-menu-child">联系我们</el-menu-item>
      <el-menu-item index="./mJoin" class="el-menu-child">加入我们</el-menu-item>
    </el-menu>


  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex2: './mHome',
      isRouter : true,
      narArr: [
        {
          path: "./mHome",
          title: "首页"
        },
        {
          path: "./mProduct",
          title: "产品中心"
        },
        {
          path: "./mAbout",
          title: "关于我们"
        },
        {
          path: "./mNewsaction",
          title: "最新动向"
        },
        {
          path: "./mContact",
          title: "联系我们"
        },
        {
          path: "./mJoin",
          title: "加入我们"
        }
      ]
    };
  },
  methods: {
    routerLink(index, path) {
      this.$router.push(this.narArr[index]);
      console.log(this.$route.name);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.Header {
  width: 100%;
  margin: 0px auto;
  .logo {
    margin: 0px auto;
    width: 980px;
    height: 85px;
  }
  .el-menu-demo{
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .el-menu-child{
    align-items: center;
  }

}
</style>
