
<template>
  <div class="Header-parent">
    <div class="Header">
      <div class="logo-text" v-if="showLogoText">最终前沿</div>
      <div class="tab">
        <el-menu
          :default-active="path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="transparent"
          text-color="#ffffff"
          active-text-color="#fdbc21"
          :router="isRouter"
        >
          <el-menu-item index="/mHome" class="el-menu-child">首页</el-menu-item>
          <el-menu-item index="/mProduct/mProductInfo" class="el-menu-child">产品</el-menu-item>
          <el-menu-item index="/mAbout/mAboutSelf" class="el-menu-child">关于我们</el-menu-item>
          <el-menu-item index="/mNewsaction/mNewsActionInfo" class="el-menu-child">最新动向</el-menu-item>
          <el-menu-item index="/mContact" class="el-menu-child">联系我们</el-menu-item>
          <el-menu-item index="/mJoin/mInterview" class="el-menu-child">加入我们</el-menu-item>

          <!-- <template v-for="(item,index) in tabArray">
             <el-menu-item :index="item.path" class="el-menu-child" :key="index"  @click="handleTab(index)">
               {{item.title}}
               </el-menu-item>
          </template> -->
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router/index.js";

export default {
  data() {
    return {
      showLogoText: true,
      path: "",
      isRouter: true,
      newsIndex: "/mNewsaction/mNewsActionInfo",
      tabArray: [
        {
          title: "首页",
          path: "1",
          to: "/mHome"
        },
        {
          title: "产品",
          path: "2",
           to: "/mProduct/mProductInfo"
        },
        {
           title: "关于我们",
          path: "3",
          to : "/mAbout/mAboutSelf"
        },
        {
          title: "最新动向",
          path: "4",
          to : "/mNewsaction/mNewsActionInfo"
        },
        {
           title: "联系我们",
          path: "5",
          to : "/mContact"
        },
        {
           title: "加入我们",
           path: "6",
           to : "/mJoin/mInterview"
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
       console.log("导航条="+ key)
       if("/mProduct/mProductInfo" == key){
         console.log("进入")
          this.$router
          .push({
            path: '/mProduct/mProductInfo',
            query: {
              id: "0101",
              type: "start"
            }
          });
          // .catch(err => {});
       }
    },
    handleTab(index){
      var toPage = this.tabArray[index].to;
      this.$router
        .push({
          path: toPage,
        })
        .catch(err => {});
    },
    onRouteChanged() {
       console.log("导航条-->onRouteChanged==="+ this.$route.path)
      let that = this;
      var indexPath = that.$route.path.split("/")[1];
      if (indexPath == "mAbout") {
          that.path = "/mAbout/mAboutSelf";
      }else if("/mProductDetails2" == that.$route.path){
          that.path = "/mNewsaction/mNewsActionInfo"
      } else {
          that.path = that.$route.path;
      }
    }
  },
  created() {
    // this.onRouteChanged();
    // console.log(this.$route, '----')
  },
  mounted(){
      // let that = this;
      // var href = window.location.href;
      // href = href.split("/mProductDetails?id=")[1];
      // console.log("Charles 导航条--mounted--->" + href);
      // if (href != null) {
      //   href = href.split("&")[0];
      //   console.log("Charles 导航条 mounted第二次--->" + href);
      // }
      // if("0" == href){
      //   that.path = "4";
      // }
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
.Header-parent {
  width: 100%;
  background: #292929;
}

.Header-parent::before {
  content: "";
  position: absolute;
  bottom: 0px;
  top: 60px;
  left: auto;
  height: 1px;
  width: 100%;
  background-color: #545454;
}

.Header {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1200px;
  display: flex;
  align-items: center;
  height: 60px;
}

.logo-text {
  color: #ffffff;
  font-size: 24px;
  font-weight: 800;
}
.tab {
  position: absolute;
  right: 0;
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
  // margin-right: 20px;
}
.el-menu-child {
  align-items: center;
}
</style>
