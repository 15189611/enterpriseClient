<template>
  <div class="interview-parent">
    <div class="interview-content">
      <div class="job-title">
       <div class="job-postiion">芯片验证工程师</div>
       <div class="job-place">上海</div>
      </div>
      <div class="job-count">招聘人数: 2人</div>
      <div class="job-duty-title">岗位职责:</div>
      <div class="job-duty">
           1.模块级和芯片级自动化验证环境搭建(UVM)</br>
           2.验证计划制定;</br>
           3.开发设计验证模型BFM</br>
           4.编写测试用列,跟踪测试需求</br>
           5.分析覆盖率数据
      </div>
      <div class="job-requirement-title">任职要求:</div>
      <div class="job-requirement">
           1.精通System Verilog和Verilog语言</br>
           2.精通UVM方法学</br>
           3.4-6年芯片设计经验;</br>
           4.2个以上ASIC项目验证经验</br>
           5.精通AMBA协议</br>
           6.良好的沟通能力和团队合作能力
      </div>
      <div class="job-extra-title">有下列经验优先考虑:</div>
      <div class="job-extra">
           1.熟悉FC-AE-1553协议</br>
           2.DDR/Serdes验证经验.
      </div>

      <div class="job-apply">申请职位</div>

    </div>
  </div>
</template>

<script>
export default {
  props:['id'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    
  },
  mounted(){
   
  },
  watch:{
    id : {
      immediate: true,
      handler:function(newValue){
         console.log('charles---->'+ this.id)
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.interview-parent {
   color: red;
   display: flex
}
.interview-content{
  display: flex;
  flex-direction: column;
  margin-left: 100px;
}

.job-title{
  display: flex;
  flex-direction: row;
}
.job-postiion{

}
.job-place{
  margin-left: 20px;  
}

.job-count{
  margin-top: 15px;
  font-size: 14px;
}
.job-duty-title{
  margin-top: 8px;
    font-size: 14px;
}
.job-duty{
    font-size: 14px;
}
.job-requirement-title{
  margin-top: 8px;
    font-size: 14px;
}
.job-requirement{
    font-size: 14px;
}
.job-extra-title{
    margin-top: 8px;
      font-size: 14px;
}
.job-extra{
    font-size: 14px;
}

.job-apply{
    margin-top: 50px;
    border: 1px solid #498EFC;
    border-radius: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
}

</style>
