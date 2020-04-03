
<template>
  <div class="parent">

    <div class="header">
      <div class="logo" v-if="!showLogoText">
        <img src="../../static/images/logo.jpg"  />
      </div>

      <div class="logo-text" v-if="showLogoText">最终前沿</div>
      <!-- background-color="#545c64" -->
      <div class="tab">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#00000000"
          text-color="#ffffff"
          active-text-color="#ffffff"
          :router="isRouter"
        >
          <el-menu-item index="./mHome" class="el-menu-child">首页</el-menu-item>
          <el-submenu index="./mProduct" class="el-menu-child">
            <template slot="title">产品中心</template>
            <el-menu-item index="./mProduct">芯片中心</el-menu-item>
            <el-menu-item index="./mProductDetails">高通芯片</el-menu-item>
            <el-menu-item index="2-3">MTK芯片</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">华为芯片</template>
              <el-menu-item index="2-4-1">骁龙850</el-menu-item>
              <el-menu-item index="2-4-2">麒麟980</el-menu-item>
              <el-menu-item index="2-4-3">麒麟990</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="./mAbout" class="el-menu-child">关于我们</el-menu-item>
          <el-menu-item index="./mNewsaction" class="el-menu-child">最新动向</el-menu-item>
          <el-menu-item index="./mContact" class="el-menu-child">联系我们</el-menu-item>
          <el-menu-item index="./mJoin" class="el-menu-child">加入我们</el-menu-item>
        </el-menu>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogoText : true,
      activeIndex2: "./mHome",
      isRouter: true,
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
.parent {
  width: 100%;
  margin: 0px auto;
  .header {
    display: flex;
    width: 100%;
    align-items: center;
  }
  .logo {
   margin-left: 20px;
  }
  .logo-text{
    margin-left: 20px;
    color: #ffffff;
    font-size: 24px;
    font-weight: 800;
    width: 300px;
  }
  .tab {
    width: 100%;
    display: flex;
  }
  .el-menu-demo {
    border-bottom-color: #00000000 !important;
    margin-left:auto;
    margin-right: 20px;
  }
  .el-menu-child {
    align-items: center;
  }
}
</style>
