<template>
  <div class="creage-team-parent">
    <template v-for="(item,index) in personArray">
      <div  :class="[item.active ? 'person-info-parent-active'  : 'person-info-parent']">
        <img
          class="person-icon"
          src="http://b.hiphotos.baidu.com/image/pic/item/b999a9014c086e069cd7964b00087bf40ad1cbb7.jpg"
        />
        <div class="persion-title">{{item.title}}</div>
        <div class="persion-name">{{item.name}}</div>
        <div v-html="item.des" class="persion-des">{{item.des}}</div>
        <div class="persion-eduction">{{item.eduction}}</div>
        </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personArray: [
        {
          title: "管理团队",
          name: "焦石CMO",
          des:"华为12年,</br>3年中欧电信运营商市场管理经验，</br>9年电信级路由开器研发,团队管理及项目管理经验",
          eduction: "航天航空大学双硕士",
          active: false,
        },
        {
          title: "首席执行官",
          name: "陈津林CEO",
          des:"6年跨国科技公司初创企业创立和管理经验。</br> 10年海外大型公司系统架构设计及开发高性能,高可靠性工程研究",
          eduction: "",
          active: true,
        },
        {
          title: "管理团队",
          name: "贾利敏CTO",
          des:
            "网络通信设备及终端产品领域14年工作经验</br>产品架构，设计，制造及品质全程经历</br>大型跨国研发团队管理经验",
          eduction: "北京航天航空大学双硕士"
        },
        {
          title: "管理团队",
          name: "礁石CMO",
          des:
            "华为12年,</br>3年中欧电信运营商市场管理经验，</br>9年电信级路由开器研发,团队管理及项目管理经验",
          eduction: "航天航空大学双硕士"
        },
        {
          title: "管理团队",
          name: "礁石CMO",
          des:
            "华为12年,</br>3年中欧电信运营商市场管理经验，</br>9年电信级路由开器研发,团队管理及项目管理经验",
          eduction: "航天航空大学双硕士"
        },
        {
          title: "管理团队",
          name: "礁石CMO",
          des:
            "华为12年,</br>3年中欧电信运营商市场管理经验，</br>9年电信级路由开器研发,团队管理及项目管理经验",
          eduction: "航天航空大学双硕士"
        }
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.creage-team-parent {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.person-info-parent {
  margin-top: 50px;
  width: 33%;
  max-width: 33%;
  padding-top: 80px;
  padding-bottom: 80px;
}

.person-info-parent-active {
  margin-top: 50px;
  width: 33%;
  max-width: 33%;
  padding-top: 80px;
  padding-bottom: 80px;
  background-image: linear-gradient(90deg, #2A30CD 0%, #1977F8 98%);
  box-shadow: 0 4px 18px 0 rgba(3,41,179,0.16);
  border-radius: 8px;
}


.person-icon {
  height: 180px;
  width: 180px;
  border-radius: 50%;
  align-items: center;
  overflow: hidden;
}
.persion-title {
  margin-top: 10px;
  color: white;
}
.persion-name {
  margin-top: 10px;
  color: white;
}
.persion-des {
  font-size: 14px;
  color: white;
  margin-top: 10px;
  line-height: 25px;
}
.persion-eduction {
  font-size: 14px;
  color: white;
  margin-top: 10px;
}
</style>
