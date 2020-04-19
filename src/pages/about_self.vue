<template>
  <div class="about-self-parent">
    <div class="el-content-parent">
      <div class="el-content">
        <el-timeline :reverse="reverse" class="time-line">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :hide-timestamp="true"
            :key="index"
            :timestamp="activity.timestamp"
            type="warning"
            :color="activity.color"
            :icon="activity.icon"
          >{{activity.time}}</el-timeline-item>
        </el-timeline>
      </div>

      <div class="el-content2">
        <el-timeline :reverse="reverse" class="time-line2">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :hide-timestamp="true"
            :key="index"
            :timestamp="activity.timestamp"
            type="warning"
            :color="activity.color"
            :icon="activity.icon"
          >{{activity.content}}</el-timeline-item>
        </el-timeline>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      reverse: false,
      activities: [
        {
          time: "2015-2017年",
          content: "活动按期开始大后方收到回复大师封杀分的撒风 ",
          color: "#fdbc21"
        },
        {
          time: "2017年底",
          content: "通过审核",
          color: "#fdbc21"
        },
        {
          time: "2018-2019年",
          content: "创建成功",
          color: "#fdbc21"
        },
        {
          time: "2020年",
          content: "创建成功",
          color: "#fdbc21"
        },
        {
          time: "2021年",
          content: "创建成功",
          color: "#fdbc21"
        },
        {
          time: "2022年",
          content: "创建成功",
          color: "#fdbc21"
        },
        {
          time: "2021 - 2023年",
          content: "创建成功",
          color: "#fdbc21"
        },
        {
          time: "",
          content: "",
          color: "#fdbc21"
        }
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.about-self-parent {
  display: flex;
}

.el-content-parent {
  display: flex;
}

.el-content {

}

.time-line {
  margin-left: 200px;
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

.time-line2 /deep/ .el-timeline-item__tail  {
  border-left: 2px solid #fdbc21;
}

.time-line /deep/ .el-timeline-item {
  padding-bottom: 50px;
}

.time-line2 /deep/ .el-timeline-item {
  padding-bottom: 50px;
}

.time-line /deep/ .el-timeline-item__content {
  color: #fdbc21;
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
