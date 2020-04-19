<template>

  <div class="newsaction-parent">

    <div class="newsaction-content-parent"  v-show="this.showDetails == false ">
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
                <span class="title">新闻集锦</span>
              </template>
              <el-menu-item-group>
                <template v-for="(item,index) in arrayData">
                  <el-menu-item
                    :index="item.index"
                    :key="index"
                    @click="handleClick(index)"
                  >{{item.title}}</el-menu-item>
                </template>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main class="el-main">
          <div @click="test">测试跳转{{des}}</div>
          <!-- <router-view /> -->
        </el-main>
      </el-container>
    </div>



    <div v-show="this.showDetails == true ">展示详情内容</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      path: "",
      openeds: ["1"],
      des: "",
      showDetails : false,
      arrayData: [
        {
          index: "1",
          title: "· 2020年1月",
          des: "对应工程描述1"
        },
        {
          index: "2",
          title: "· 2020年2月",
          des: "对应工程描述2"
        },
        {
          index: "3",
          title: "· 2020年3月",
          des: "对应工程描述3"
        },
        {
          index: "4",
          title: "· 2020年4月",
          des: "对应工程描述4"
        },
        {
          index: "5",
          title: "· 2020年5月",
          des: "对应工程描述5"
        },
        {
          index: "6",
          title: "· 2020年6月",
          des: "对应工程描述6"
        },
        {
          index: "7",
          title: "· 2020年7月",
          des: "对应工程描述6"
        },
        {
          index: "8",
          title: "· 2020年8月",
          des: "对应工程描述6"
        },
        {
          index: "9",
          title: "· 2020年9月",
          des: "对应工程描述6"
        },
        {
          index: "10",
          title: "· 2020年10月",
          des: "对应工程描述6"
        },
        {
          index: "11",
          title: "· 2020年11月",
          des: "对应工程描述6"
        },
        {
          index: "12",
          title: "· 2020年12月",
          des: "对应工程描述6"
        }
      ]
    };
  },
  methods: {
    handleClick(index){
      console.log("点击事件=="+index);
      //调取接口展示右边数据
      this.des = this.arrayData[index].des;
    },
    test(){
      this. showDetails = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.newsaction-parent {
  background-color: #292929;
  min-height: 750px;
}
.newsaction-content-parent {
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
