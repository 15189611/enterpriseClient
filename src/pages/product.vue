<template>
  <div class="product-parent">
    <el-container>
      <el-aside class="aside" style="width:400px;">
        <div class="left-title">
          <el-menu
            :default-active="path"
            background-color="transparent"
            class="el-menu-vertical-demo"
            text-color="#ffffff"
            active-text-color="#1f86ed"
            :collapse="false"
            :default-openeds="openeds"
            @open="openMenu"
            @close="closeMenu"
          >
            <template v-for="(item, index) in nav_menu_data">
   
            <div v-if="item.arrayData && item.arrayData.length > 0">
              <el-submenu :index="item.path" :key="index">
                <span slot="title" :class="[path == item.path ? 'title-active' : 'title']">{{item.title}}</span>
                <el-menu-item-group :v-show="item.arrayData && item.arrayData.length > 0">
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
                <span slot="title" :class="[path == item.path ? 'title-active' : 'title']">{{item.title}}</span>
              </el-menu-item>
          </div>

            </template>
          </el-menu>
        </div>

      </el-aside>

      <el-main class="el-main">
        <!-- <router-view /> -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRouter: true,
      path: "",
      subMenuPath : "",
      openeds:[],
      nav_menu_data: [
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
            },
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
          ],
        },
        {
          title: "天线",
          path: "2",
        },
        {
          title: "高通量通信卫星载荷",
          path: "3"
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
    openMenu(index,indexPath){
      //this.path = index;
       console.log("openMenu=="+ index  + ",,,indexPath=="+ indexPath)
    },
    closeMenu(index,indexPath){
     // this.path = index;
      console.log("closeMenu=="+ index  + ",,,indexPath=="+ indexPath)
    },
    handleTab(index){
      console.log("父下标=="+index)
      this.path = this.nav_menu_data[index].path;
    },
    handleGroupClick(parentIndex,ChildIndex){
      this.path = this.nav_menu_data[parentIndex].arrayData[ChildIndex].index;
      console.log("父下标=="+parentIndex + "子下标=="+  ChildIndex)
    },
    onRouteChanged() {
      let that = this;
      if(that.nav_menu_data != null && that.nav_menu_data.length > 0){
        that.path = that.nav_menu_data[0].path;
        if(that.nav_menu_data[0].arrayData && that.nav_menu_data[0].arrayData.length > 0){
            that.openeds[0] = element.path;
        }

      }
    },
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
}

.title-active {
  color: #1f86ed;
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
  //submenu高度
  height: 65px;
}
.el-submenu .el-menu-item{
  //子group-item-高度
  height: 35px;
}
.el-menu-item,.el-submenu__title {
  //menu-item高度
  height: 65px;
}
.el-menu-vertical-demo /deep/ .el-submenu__icon-arrow {
  display: none;
}



.el-main {
  text-align: center;
}
</style>
