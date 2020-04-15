<template>
  <div class="about-parent">
    <el-container>
      <el-aside class="aside" style="width:400px;">
        <div class="left-title">
          <el-menu
            :default-active="path"
            @select="handleSelect"
            background-color="transparent"
            class="el-menu-vertical-demo"
            text-color="#ffffff"
            active-text-color="#1f86ed"
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
</template>

<script>
export default {
  data() {
    return {
      reverse: false,
      isRouter: true,
      path : '',
      nav_menu_data: [
        {
          title: "成立过程",
          path: "/mAbout/mAboutSelf"
        },
        {
          title: "愿景",
          path: "/mAbout/mProductDetails"
        },
        {
          title: "目标",
          path: "/mAbout/mProductDetails2"
        },
        {
          title: "公众号",
          path: ""
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
    }
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
.about-parent {
  background: #545c64;
  display: flex;
}

.aside {
  color: white;
  margin-top: 20px;
}

.left-title {
  margin-top: 25px;
  display: flex;
  justify-content: center;
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
  background-color: #1f86ed;
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
  background-color: white;
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
  text-align: center;
}
</style>
