<template>
  <div class="product-parent">
    <div class="product-content-parent">
      <el-container>
        <el-aside style="width:300px;">
          <div class="left-title">
            <!-- @open="openMenu"
              @close="closeMenu"
            @select="handleSelect"-->
            <el-menu
              :default-active="path"
              background-color="transparent"
              class="el-menu-vertical-demo"
              text-color="#ffffff"
              active-text-color="#fdbc21"
              :collapse="false"
              :default-openeds="openeds"
              :isRouter="false"
            >
              <template v-for="(item, index) in titleArray">
                <div v-if="item.arrayData && item.arrayData.length > 0">
                  <el-submenu :index="item.path" :key="index">
                    <span
                      slot="title"
                      :class="[path == item.path ? 'title-active' : 'title']"
                    >{{item.title}}</span>
                    <el-menu-item-group>
                      <template v-for="(childItem,childIndex) in item.arrayData">
                        <el-menu-item
                          :index="childItem.index"
                          :key="childIndex"
                          @click="handleGroupClick(index,childIndex)"
                        >{{childItem.title}}</el-menu-item>
                      </template>
                    </el-menu-item-group>
                  </el-submenu>
                </div>

                <div v-else>
                  <el-menu-item :index="item.path" :key="index" @click="handleTab(index)">
                    <span
                      slot="title"
                      :class="[path == item.path ? 'title-active' : 'title']"
                    >{{item.title}}</span>
                  </el-menu-item>
                </div>
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
import axios from "axios";

export default {
  data() {
    return {
      path: "",
      openeds: [],
      titleArray: [
        {
          title: "无法理解",
          path: "9",
        },
        {
          title: "导火线",
          path: "8",
        },
        {
          title: "芯片",
          path: "1",
          arrayData: [
            {
              index: "1-1",
              title: "· 软件工程师高级别",
              des: "对应工程描述1"
            },
            {
              index: "1-2",
              title: "· ios工程师高级别",
              des: "对应工程描述2"
            },
            {
              index: "1-3",
              title: "· android工程师高级别",
              des: "对应工程描述3"
            }
          ]
        },
        {
          title: "天线",
          path: "2"
        },
        {
          title: "高通量通信卫星载荷",
          path: "3",
          arrayData: [
            {
              index: "1-4",
              title: "· 算法工程师高级别",
              des: "对应工程描述4"
            },
            {
              index: "1-5",
              title: "· AI工程师高级别",
              des: "对应工程描述5"
            },
            {
              index: "1-6",
              title: "· 视频工程师高级别",
              des: "对应工程描述6"
            }
          ]
        },
        {
          title: "终端(地面+机载+船载)",
          path: "4"
        },
        {
          title: "高通量通信小卫星",
          path: "5"
        },
        {
          title: "小卫星控制执行系统",
          path: "6"
        },
        {
          title: "星座方案",
          path: "7"
        }
      ]
    };
  },
  methods: {
    handleTab(index) {
      //父点击事件
      this.path = this.titleArray[index].path;
      this.$router
        .push({
          path: `/mProduct/mProductInfo`,
          query: {
            id: this.titleArray[index].path,
            type: "info"
          }
        })
        .catch(err => {});
    },
    handleGroupClick(parentIndex, ChildIndex) {
      //子点击事件
      this.path = this.titleArray[parentIndex].arrayData[ChildIndex].index;
      this.$router
        .push({
          path: `/mProduct/mProductInfo`,
          query: {
            id: this.titleArray[parentIndex].arrayData[ChildIndex].index,
            type: "info"
          }
        })
        .catch(err => {});
    },
    onRouteChanged() {
      let that = this;
      console.log("内部组件->product--routechanged" + that.$route.path);
      var herf = window.location.href
      var dd = herf.split("/mProduct/mProductInfo?")[1];
      console.log("dd="+dd);
      if(dd == null || "" == dd){
        console.log("第一次进入")
        //this.testGet(); //正式的使用
        if(this.titleArray != null && this.titleArray.length > 0  ){
            var id;
            //再判断是不是有二级菜单
            if (this.titleArray[0].arrayData && this.titleArray[0].arrayData.length > 0) {
              id = this.titleArray[0].arrayData[0].index;
              this.openeds[0] = this.titleArray[0].path;
              this.path = id;
            } else {
              id = this.titleArray[0].path;
              this.path = id;
            }
          }

          this.$router.push({
            path: `/mProduct/mProductInfo`,
            query: {
              id: id,
              type: "info"
            }
          }).catch(err => {});
      }

    },
    testGet() {
      axios
        .get("/enterprise/hello/test.do")
        .then(res => {
          console.log(res.data);
          this.titleArray = [
            // {
            //   title: "无法理解",
            //   path: "9",
            // },
            // {
            //   title: "导火线",
            //   path: "8",
            // },
            {
              title: "芯片",
              path: "1",
              arrayData: [
                {
                  index: "1-1",
                  title: "· 软件工程师高级别",
                  des: "对应工程描述1"
                },
                {
                  index: "1-2",
                  title: "· ios工程师高级别",
                  des: "对应工程描述2"
                },
                {
                  index: "1-3",
                  title: "· android工程师高级别",
                  des: "对应工程描述3"
                }
              ]
            },
            {
              title: "天线",
              path: "2"
            },
            {
              title: "高通量通信卫星载荷",
              path: "3",
              arrayData: [
                {
                  index: "1-4",
                  title: "· 算法工程师高级别",
                  des: "对应工程描述4"
                },
                {
                  index: "1-5",
                  title: "· AI工程师高级别",
                  des: "对应工程描述5"
                },
                {
                  index: "1-6",
                  title: "· 视频工程师高级别",
                  des: "对应工程描述6"
                }
              ]
            },
            {
              title: "终端(地面+机载+船载)",
              path: "4"
            },
            {
              title: "高通量通信小卫星",
              path: "5"
            },
            {
              title: "小卫星控制执行系统",
              path: "6"
            },
            {
              title: "星座方案",
              path: "7"
            }
          ];

          var id;
          if (this.titleArray != null && this.titleArray.length > 0) {
            if (
              this.titleArray[0].arrayData &&
              this.titleArray[0].arrayData.length > 0
            ) {
              id = this.titleArray[0].arrayData[0].index;
              this.openeds[0] = this.titleArray[0].path;
              this.path = id;
            } else {
              id = this.titleArray[0].path;
              this.path = id;
            }
          }
          this.$router.push({
            path: `/mProduct/mProductInfo`,
            query: {
              id: id,
              type: "info"
            }
          }).catch(err =>{});
          
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    console.log("create")
  },
  mounted() {
    // this.testGet();   //正式的使用
     console.log("mounted")

      let that = this;
      var href = window.location.href;
      href = href.split("/mProduct/mProductInfo?id=")[1];
      console.log("mounted--->" + href);
      if (href != null) {
        href = href.split("&")[0];
        console.log("mounted第二次--->" + href);
      }
      if (href == "undefined" || href == null) {
        var id;
        if (that.titleArray != null && that.titleArray.length > 0) {
          if (that.titleArray[0].arrayData && that.titleArray[0].arrayData.length > 0) {
            id = that.titleArray[0].arrayData[0].index;
            that.openeds[0] = that.titleArray[0].path;
            that.path = id;
          }else {
            id = that.titleArray[0].path;
            that.path = id;
          }
        }
        that.$router.push({
          path: `/mProduct/mProductInfo`,
          query: {
            id: id,
            type: "info"
          }
        }).catch(err =>{

        });
      } else {
        that.path = href;
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
<style  lang="scss" scoped>
.product-parent {
  background: #292929;
}
.product-content-parent {
  margin-top: 20px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1200px;
  margin-bottom: 20px;
  min-height: 750px;
}
.el-aside {
  color: white;
}
.left-title {
}

.title-active {
  color: #fdbc21;
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
  color: white;
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
  //submenu高度
  height: 65px;
}
.el-submenu .el-menu-item {
  //子group-item-高度
  height: 35px;
}
.el-menu-item,
.el-submenu__title {
  //menu-item高度
  height: 65px;
}
.el-menu-vertical-demo /deep/ .el-submenu__icon-arrow {
  display: none;
}

.el-main {
  padding: 0;
}
</style>
