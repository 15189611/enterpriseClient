
<template>
  <div class="parent">
    <div class="header">
      <!-- <div class="logo" v-if="!showLogoText">
        <img src="../../static/images/logo.jpg" />
      </div>-->

      <div class="logo-text" v-if="showLogoText">最终前沿</div>
      <!-- background-color="#545c64" -->

      <router-link to="/mHome">Go to mHome</router-link>
      <router-link to="/mJoin">Go to mJoin</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogoText: true,
      path: "",
      isRouter: true
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.name, event);
      this.$router.push(tab.name);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onRouteChanged() {
      let that = this;
      var indexPath = that.$route.path.split("/")[1];
      if (indexPath == "mAbout") {
        that.path = "/mAbout/mAboutSelf";
      } else {
        that.path = that.$route.path;
      }
    }
  },
  created() {
    // this.onRouteChanged();
    // console.log(this.$route, '----')
  },
  watch: {
    $route: {
      immediate: true,
      handler: "onRouteChanged"
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
  .el-menu--horizontal > .el-menu-item:hover {
    background-color: transparent !important;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
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
