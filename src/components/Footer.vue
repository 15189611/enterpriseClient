
<template>
  <div class="Footer">
    <div class="tab_bom">
      <div class="company-des">
        <img class="des-img" src="../../static/images/wechat_icon.png" />
        <div class="des-auth">Copyright ©Final Frontier 2017</div>
        <div class="des-backup">京ICP备19042938号</div>
        <div class="des-name">版权所有 ©2020北京前沿探索深空科技有限公司 保留所有权利</div>
      </div>

      <div class="company-icon">
        <img class="icon-img" src="../../static/images/company_logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.Footer {
  background-color: white;
}

.tab_bom {
  max-width: 1200px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
}

.company-des {
  flex: 1;
  flex-direction: column;
}
.des-img {
  width: 45px;
  height: 45px;
}
.des-auth {
  font-weight: 600;
  margin-top: 15px;
  font-size: 14px;
}
.des-backup {
  margin-top: 5px;
  font-size: 12px;
}
.des-name {
  margin-top: 5px;
  font-size: 12px;
}

.company-icon {
  margin-right: 50px;
  position: absolute;
  bottom: 20px;
  right: 0;
}
.icon-img {
  width: 60px;
  height: 60px;
}
</style>
