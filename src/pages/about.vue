<template>
  <div class="about-parent">
    <el-container>
      <el-aside class="aside" style="width:400px;">

        <div class="left-title">
          <el-menu
            :default-active="$route.path"
            @select="handleSelect"
            background-color="transparent"
            class="el-menu-vertical-demo"
            text-color="#ffffff"
            active-text-color="#1f86ed"
            :router="isRouter"
          >

            <el-menu-item index="/mAbout/mAboutSelf">
              <i class="el-icon-star-on"></i>
              <span slot="title">成立过程</span>
            </el-menu-item>
            <!-- <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-star-on"></i>
                <span>成立完成过程</span>
              </template>
              
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu> -->

            <el-menu-item index="/mAbout/mProductDetails">
              <i class="el-icon-star-on"></i>
              <span slot="title">愿景</span>
            </el-menu-item>
            <el-menu-item index="/mAbout/mProductDetails2">
              <i class="el-icon-star-on"></i>
              <span slot="title">目标</span>
            </el-menu-item>
            <el-menu-item index="/mAbout/mCreateTeam">
              <i class="el-icon-star-on"></i>
              <span slot="title">创始团队</span>
            </el-menu-item>
            <el-menu-item index="">
              <i class="el-icon-star-on"></i>
              <span slot="title">公众号</span>
            </el-menu-item>
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
      activities: [
        {
          time: "2015-2017年",
          content: "活动按期开始大后方收到回复大师封杀分的撒风 ",
          color: "#ffffff"
        },
        {
          time: "2017年底",
          content: "通过审核",
          color: "#ffffff"
        },
        {
          time: "2018-2019年",
          content: "创建成功",
          color: "#ffffff"
        },
        {
          time: "2020年",
          content: "创建成功",
          color: "#ffffff"
        },
        {
          time: "2021年",
          content: "创建成功",
          color: "#ffffff"
        },
        {
          time: "2022年",
          content: "创建成功",
          color: "#ffffff"
        },
        {
          time: "2021 - 2023年",
          content: "创建成功",
          color: "#ffffff"
        },
        {
          time: "",
          content: "",
          color: "#ffffff"
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log("charles="+ key, keyPath);
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

 .left-title{
  margin-left: 25%;
}

.el-menu-vertical-demo {
  border-right-color: transparent !important;
}
.el-menu-item:focus, .el-menu-item:hover{
   background-color: transparent !important;
}
.el-menu-vertical-demo /deep/ .el-submenu__title{
   background-color: transparent !important;
}
.el-menu-vertical-demo /deep/ .el-submenu__icon-arrow{
  // right: 25%;
}

.about-title {
  font-size: 14px;
  margin-top: 20px;
  text-align: left;
}
.el-main {
  text-align: center;
}
.el-content-parent {
  display: flex;
}
.el-content {
  border-left-style: solid;
  border-left-width: 2px;
  border-left-color: #999999;
}
.time-line {
  margin-left: 100px;
}
/*
* 去掉线和节点
*/
.time-line /deep/ .el-timeline-item__node--normal {
  left: -1px;
  width: 0px;
  height: 0px;
}
.time-line /deep/ .el-timeline-item__tail {
  border-left: 0px solid #e4e7ed;
}

.time-line /deep/ .el-timeline-item {
  padding-bottom: 40px;
}

.time-line2 /deep/ .el-timeline-item {
  padding-bottom: 40px;
}

.time-line /deep/ .el-timeline-item__content {
  color: #ffffff;
  text-align: right;
}

.time-line2 /deep/ .el-timeline-item__content {
  color: #ffffff;
  text-align: left;
  margin-left: 20px;
}
.time-line /deep/ .el-timeline-item__timestamp.is-bottom {
  color: #ffffff;
  text-align: right;
}
.time-line2 /deep/ .el-timeline-item__timestamp.is-bottom {
  color: #ffffff;
  text-align: left;
  margin-left: 20px;
}
</style>
