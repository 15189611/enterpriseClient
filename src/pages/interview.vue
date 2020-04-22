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

      <el-upload
        class="upload-demo"
        ref="upload"
        :action="url"
        :before-upload="beforeUpload"
        :on-success="handleSuccess"
        :on-error="handleError"
        :file-list="fileList"
        :show-file-list = "false"
        :auto-upload="true">
        <div class="job-apply" slot="trigger">申请职位</div>
      </el-upload>


    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props:['id'],
  data () {
    return {
      fileList : [],
      url : "/enterprise/upload/test.do",
    }
  },
  methods: {
    //添加http-request	这个字段，自己写方法上传
    testUpload(params) {
      const file = params.file;
      const fileType = file.type;

      console.log("type==" + fileType);
      let fd = new FormData();
      fd.append("file", file);
      axios.post(this.url, fd, {
          headers: { "content-type": "multipart/form-data" }
        })
        .then(res => {
          console.log(res);
          if (res.status == "200") {
            console.log("成功");
            this.$refs.upload.clearFiles();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    beforeUpload(file){
        console.log("beforeUpload===",file);
        const isJPG = file.type == 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 > 1;

        if(isJPG){
          this.$message.error('不能上传图片格式!');
          return !isJPG
        }

        if (isLt2M) {
          this.$message.error('上传文件不能大于 1MB!');
          return !isLt2M
        }
       
    },
    handleSuccess(response, file, fileList) {
       this.$message.success('上传成功');
      console.log("success==" + response);
    },
    handleError(err, file, fileList) {
      this.$message.error(err);
      console.log("error==" + err);
    },
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
<style lang="scss" scoped>
.interview-parent {
   color: white;
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

.upload-demo /deep/ .el-upload:focus{
  color: white;
  border-color: white;
}
.job-apply{
    margin-top: 50px;
    width: 200px;
    border: 1px solid #fdbc21;
    border-radius: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
}

</style>
