<template>
  <div class="parent">
   
  <div class="upload-parent">
    <el-upload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
      :limit="1"
      :on-success="handleSuccess"
      :on-error="handleError"
      >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">上传你的简历，且不超过500kb</div>
    </el-upload>
  </div>



  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList : [],
    }
  },
  methods:{
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSuccess(response,file,fileList){
      console.log("成功=="+ response);
    },
    handleError(err,file,fileList){
      console.log("失败=="+ err);
    }
  },
  mounted:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.parent{
  width: 100%;
  height: 100%;
}
.upload-parent{
  display: flex;
  margin-top: 50px;
  justify-content: center;
  
}
.upload-demo{
  align-items: center;
}

</style>
