<template>
  <div :class="[this.showFirstBg ? 'about-parent' :'about-parent-other']">
    <div class="about-content-parent">
    <el-container>
      <el-aside class="aside" style="width:300px;">
        <div class="left-title">
          <el-menu
            :default-active="path"
            @select="handleSelect"
            background-color="transparent"
            class="el-menu-vertical-demo"
            text-color="#ffffff"
            active-text-color="#fdbc21"
            :router="isRouter"
          >
            <template v-for="(item, index) in nav_menu_data">
              <el-menu-item :index="item.path" :key="index">
                <span slot="title" :class="[path == item.path ? 'title-active' : 'title']">{{item.title}}</span>
              </el-menu-item>
            </template>

          </el-menu>
        </div>
      </el-aside>

      <el-main class="el-main">
        <router-view />
      </el-main>
    </el-container>

    </div>
  </div>
</template>

<script>
export default {
  props:['searchVal'],
  data() {
    return {
      showFirstBg: true,
      isRouter: true,
      path : '',
      nav_menu_data: [
        {
          title: "成立过程",
          path: "/mAbout/mAboutSelf"
        },
        {
          title: "愿景",
          path: "/mAbout/mAboutVision"
        },
        {
          title: "目标",
          path: "/mAbout/mAboutGoals"
        },
        {
          title: "公众号",
          path: "/mAbout/mAboutNumber"
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log("charles=" + key, keyPath);
    },
    onRouteChanged() {
      let that = this;
      that.path = that.$route.path;
      if("/mAbout/mAboutSelf" == that.$route.path){
        that.showFirstBg = true
      }else{
        that.showFirstBg = false;
      }

    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: "onRouteChanged"
    },
    searchVal: function (val) {       
       console.log('charles收到'+val);   // 接收父组件的值
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.about-parent {
  background-repeat:no-repeat;
  background-size: cover;
  -moz-background-size:100% 100%;
  background-image: url("../../static/images/about_1.jpg");
  background-color: #292929;
  min-height: 750px;
}

.about-parent-other {
  background-repeat:no-repeat;
  background-size: cover;
  -moz-background-size:100% 100%;
  background-image: url("../../static/images/about_2.jpg");
  background-color: #292929;
  min-height: 750px;
}

.about-content-parent{
  margin-top: 20px;
  position: relative;
  left:50%;
  transform:translate(-50%,0);
  max-width: 1200px;
}

.el-aside {
  color: white;
}

.left-title {
}

.title-active {
}

.title-active::before {
  content: "";
  position: absolute;
  bottom: 0px;
  top: auto;
  left: auto;
  height: 1px;
  width: 22px;
  background-color: #fdbc21;
}
.title {
}
.title::before {
  content: "";
  position: absolute;
  bottom: 0px;
  top: auto;
  left: auto;
  height: 1px;
  width: 22px;
  background-color: #545454;
}

.el-menu-vertical-demo {
  border-right-color: transparent !important;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: transparent !important;
}
.el-menu-vertical-demo /deep/ .el-submenu__title {
  background-color: transparent !important;
}
.el-menu-item,
.el-submenu__title {
  height: 75px;
}

.el-main {
  padding: 0px;
}
</style>
