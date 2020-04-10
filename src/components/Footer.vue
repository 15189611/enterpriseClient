<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 15:48:35
 * @LastEditTime: 2019-08-21 15:59:08
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="Footer">
    <div class="tab_bom">
      <div class="company-des">
        <div class="des-auth">CopyRight@2020</div>
        <div class="des-backup">沪ICP备********号</div>
        <div class="des-name">版权所有 C 2020北京前沿探索深空科技有限公司 保留所有权利</div>
      </div>

      <div class="company-icon">
        <div class="icon-des">关注我们</div>
        <div class="icon-parent">
          <img class="icon-img" src="../../static/images/collect_money_success.png" />
          <img class="icon-img" src="../../static/images/collect_money_code_introduction_statistic.png" />
          <img class="icon-img" src="../../static/images/collect_money_code_introduction_receive.png" />
          <img class="icon-img" src="../../static/images/collect_money_code_introduction_notice.png" />
        </div>
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
  width: 100%;
  margin: 0px auto;
}

.tab_bom {
  width: 100%;
  margin: 0 auto;
  display: flex;
  background: white;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;
}

.company-des {
  flex-direction: column;
}
.des-auth {
  font-size: 14px;
}
.des-backup {
  font-size: 12px;
  margin-top: 15px;
}
.des-name {
  margin-top: 5px;
  font-size: 12px;
}

.company-icon{
  flex-direction: column;
}

.icon-des {
  font-size: 14px;
  text-align: right;
}
.icon-parent {
  margin-top: 15px;
}
.icon-img{
  width: 25px;
  height: 25px;
  margin-left: 30px;
}
</style>
