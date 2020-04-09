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
        <div class="text_box" >
          <p class="tabsa">联系我们</p>
          <p class="pas">公司：最终前沿</p>
          <p class="pas">地址 ：上海市浦东新区罗山路</p>
          <p class="pas">电话：021-3030323</p>
          <p class="pas">邮箱：qianyanzhi@163.com</p>
        </div>
        <div class="text_box_to" >
          <p class="tabsa">品牌故事</p>
          <p class="pas">U宝介绍</p>
          <p class="pas">U宝名人堂</p>
          <p class="pas">U团队</p>
          <p class="pas">资质荣誉</p>
        </div>
        <div class="text_box_to">
          <p class="tabsa">发声课程</p>
          <p class="pas">课程体系</p>
          <p class="pas">特色介绍</p>
          <p class="pas">大家说</p>
        </div>
        <div class="text_box_to" >
          <p class="tabsa">发声合作</p>
          <p class="pas">市场分析</p>
          <p class="pas">加盟优势</p>
          <p class="pas">加盟流程</p>
          <p class="pas">全国分布</p>
        </div>
        <div class="text_box_to">
          <p class="tabsa">发声动态</p>
          <p class="pas">U发布</p>
          <p class="pas">新闻中心</p>
          <p class="pas">合作共赢</p>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
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
  justify-content: center;
	// background: #464444;
  background: white;
}
.tabsa {
  font-size: 22px;
  color: 464444;
  font-weight: 600;
  margin-bottom: 14px;
}
.pas {
  font-size: 14px;
  color: #adadad;
}
.text_box {
  width: 208px;
  height: 200px;
  margin-right: 30px;
}
.text_box_to {
  width:  124px;
  height: 200px;
}
</style>
