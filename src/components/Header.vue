
<template>
  <div class="parent">
    <div class="header">
      <!-- <div class="logo" v-if="!showLogoText">
        <img src="../../static/images/logo.jpg" />
      </div>-->

      <div class="logo-text" v-if="showLogoText">最终前沿</div>

      <div class="tab">
        <el-menu
          :default-active="path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="transparent"
          text-color="#ffffff"
          active-text-color="#1f86ed"
          :router="isRouter"
        >
          <el-menu-item index="/mHome" class="el-menu-child">首页</el-menu-item>
          <el-menu-item index="/mProduct" class="el-menu-child">产品</el-menu-item>
          <el-menu-item index="/mAbout/mAboutSelf" class="el-menu-child">关于我们</el-menu-item>
          <el-menu-item index="/mNewsaction" class="el-menu-child">最新动向</el-menu-item>
          <el-menu-item index="/mContact" class="el-menu-child">联系我们</el-menu-item>
          <el-menu-item index="/mJoin" class="el-menu-child">加入我们</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: "",
      showLogoText: true,
      isRouter: true
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onRouteChanged() {
      let that = this;
      if (that.$route.path == "/") {
        that.path = "/mHome";
      } else {
        that.path = that.$route.path;
      }
    }
  },
  created() {
    this.onRouteChanged();
  },
  watch: {
    $route: "onRouteChanged"
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
  .logo-text {
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
  .el-menu--horizontal > .el-menu-item.is-active {
    background-color: transparent !important;
  }
  .el-menu--horizontal > .el-menu-item:hover {
    background-color: transparent !important;
  }
  .el-menu-demo {
    border-bottom-color: transparent !important;
    margin-left: auto;
    margin-right: 20px;
  }
  .el-menu-child {
    align-items: center;
  }
}
</style>
