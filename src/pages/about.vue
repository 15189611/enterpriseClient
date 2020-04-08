<template>
  <div class="hello">

    <el-container>
      <el-aside>
        <div>成立完成过程</div>
        <div>愿景</div>
        <div>目标</div>
        <div>创始团队</div>
        <div>公众号</div>

      </el-aside>
      <el-main>
        <div>
          <el-timeline :reverse="reverse">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :hide-timestamp="true"
              :key="index"
              :timestamp="activity.timestamp"
              type="warning"
            >{{activity.content}}</el-timeline-item>
          </el-timeline>
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      reverse: true,
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11"
        }
      ],
      items: [
        {
          date: "2019-02-12",
          msg: "测试内容"
        },
        {
          date: "2019-02-13",
          msg: "练习内容"
        }
      ]
    };
  },
  methods: {},
  mounted: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  background: white;
  justify-content: center;
}

.timeline {
  display: flex;
}

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

</style>
