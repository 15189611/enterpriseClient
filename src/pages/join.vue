<template>
  <div class="join-parent">
    <div class="join-content-parent">
      <el-container>
        <el-aside class="aside" style="width:300px;">
          <el-menu
            :default-active="path"
            background-color="transparent"
            class="el-menu-vertical-demo"
            text-color="#ffffff"
            active-text-color="#fdbc21"
            :default-openeds="openeds"
            :router="false"
          >
            <el-submenu index="1">
              <template slot="title">
                <span class="title">关于我们</span>
              </template>
              <el-menu-item-group>
                <template v-for="(item,index) in arrayData">
                  <el-menu-item
                    :index="item.index"
                    :key="index"
                    @click="handleClick(item.index)"
                  >{{item.title}}</el-menu-item>
                </template>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main class="el-main">
          <!-- <div>{{des}}</div> -->
          <router-view />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import Router from "vue-router";
import router from "../router/index";

export default {
  data() {
    return {
      path: "",
      openeds: ["1"],
      des: "",
      arrayData: [
        {
          index: "1",
          title: "· 软件工程师高级别",
          des: "对应工程描述1"
        },
        {
          index: "2",
          title: "· ios工程师高级别",
          des: "对应工程描述2"
        },
        {
          index: "3",
          title: "· android工程师高级别",
          des: "对应工程描述3"
        },
        {
          index: "4",
          title: "· 算法工程师高级别",
          des: "对应工程描述4"
        },
        {
          index: "5",
          title: "· AI工程师高级别",
          des: "对应工程描述5"
        },
        {
          index: "6",
          title: "· 视频工程师高级别",
          des: "对应工程描述6"
        }
      ]
    };
  },
  methods: {
    testGet() {
      axios
        .get("/enterprise/hello/test.do")
        .then(res => {
          console.log(res.data);
          this.arrayData = [
            {
              index: "1",
              title: "· 软件工程师高级别",
              des: "对应工程描述1"
            },
            {
              index: "2",
              title: "· ios工程师高级别",
              des: "对应工程描述2"
            },
            {
              index: "3",
              title: "· android工程师高级别",
              des: "对应工程描述3"
            },
            {
              index: "4",
              title: "· 算法工程师高级别",
              des: "对应工程描述4"
            },
            {
              index: "5",
              title: "· AI工程师高级别",
              des: "对应工程描述5"
            },
            {
              index: "6",
              title: "· 视频工程师高级别",
              des: "对应工程描述6"
            }
          ];

          this.path = this.arrayData[0].index;
          this.$router
            .push({
              path: `/mJoin/mInterview`,
              query: {
                id: this.arrayData[0].index
              }
            })
            .catch(err => {});
        })
        .catch(err => {
          console.log(err);
        });
    },
    onRouteChanged() {
      let that = this;
      console.log("onRouteChanged" + that.$route.path);
      //不用路由
      // if(that.arrayData != null && that.arrayData.length > 0){
      //   //that.path = that.arrayData[0].index;
      //   that.des = that.arrayData[0].des;
      // }
    },
    handleClick(index) {
      let that = this;
      console.log("select==" + index);
      that.$router
        .push({
          path: `/mJoin/mInterview`,
          query: {
            id: index
          }
        })
        .catch(err => {});
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: "onRouteChanged"
    }
  },
  created() {
    console.log("Created");
  },
  mounted() {
    //this.testGet();
    var that = this;
    var href = window.location.href;
    href = href.split("/mJoin/mInterview?id=")[1];
    console.log("mounted===" + href);
    if (href == "undefined" || href == null) {
      that.path = that.arrayData[0].index;
      that.$router.push({
        path: `/mJoin/mInterview`,
        query: {
          id: that.arrayData[0].index
        }
      });
    } else {
      that.path = href;
    }

    // router.options.routes.map(item => {
    //   if(item.path === '/mJoin'){
    //     console.log(item)
    //    // item['children'] = this.arrayData
    //    console.log(item.path + "/"+item.children[0].path)
    //   }
    // })
    // console.log(router.options.routes, 'after')
    // Vue.use(new Router(router.options.routes))
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.join-parent {
  background-color: #292929;
    min-height: 750px;
}
.join-content-parent {
  margin-top: 20px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1200px;
}

.aside {
  overflow-x: hidden;
  background-color: #292929;
}

.el-menu-vertical-demo {
  border-right-color: transparent !important;
  // position: relative;
  // left: 0%;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: transparent !important;
}
.el-menu-vertical-demo /deep/ .el-submenu__title {
  background-color: transparent !important;
  //submenu 标题
}
.el-menu-vertical-demo /deep/ .el-menu-item {
  //控制group item
}

.el-menu-vertical-demo /deep/ .el-submenu__icon-arrow {
  display: none;
}

.title {
  color: #fdbc21;
}
.title::before {
  content: "";
  position: absolute;
  bottom: 0px;
  top: auto;
  left: auto;
  height: 1px;
  width: 22px;
  background-color: #fdbc21;
}
.el-main {
}
</style>
