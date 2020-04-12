<template>
  <div class="join-parent">

     <el-container>
      <el-aside class="aside" style="width:400px;">
        <div class="left-title">加入我们</div>
      </el-aside>

      <el-main class="el-main">
        
      </el-main>
      
    </el-container>
    
 
    <!-- <div class="upload-parent">
      <el-upload
        class="upload-demo"
        ref="upload"
        accept=".jpg, .jpeg, .png, .gif, .bmp, .pdf, .JPG, .JPEG, .PBG, .GIF, .BMP, .PDF"
        :action="url"
        :file-list="fileList"
        :auto-upload="false"
        :limit="1"
        multiple
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :on-error="handleError"
        :on-change="handerChange"
        :before-upload="handerBeforUpload"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload"
        >上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">上传你的简历，且不超过500kb</div>
      </el-upload>
    </div> -->

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      //http://47.101.52.36:8080/enterprise/upload/test.do
      fileList: [],
      url: "/enterprise/upload/test.do"
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    testUpload(params) {
      const file = params.file;
      const fileType = file.type;

      console.log("type==" + fileType);
      let fd = new FormData();
      fd.append("file", file);
      axios
        .post(this.url, fd, {
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
    handerBeforUpload(file) {
      console.log("handerBeforUpload===" + file);
    },
    handleRemove(file, fileList) {
      console.log("remove===" + file, fileList);
    },
    handlePreview(file) {
      console.log("preview===" + file);
    },
    handleSuccess(response, file, fileList) {
      console.log("success==" + response);
    },
    handleError(err, file, fileList) {
      console.log("error==" + err);
    },
    handerChange(file, fileList) {
      console.log("change==" + file);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.join-parent {
  background: #545c64; 
  display: flex;
}
.aside {
  color: #1f86ed;
  margin-top: 20px;
  text-align: center;
 }
 .left-title{
    border-bottom-color: #1f86ed;
   border-bottom-style: solid;
   border-bottom-width: 2px;
   padding-bottom: 10px;
   display: inline-block;
 }


.upload-parent {
  display: flex;
  justify-content: center;
}
.upload-demo {
  align-items: center;
}
</style>
