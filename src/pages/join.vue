<template>
  <div class="join-parent">
    <div class="join-content">
    <el-container>
      <el-aside class="aside" style="width:400px;">
        <el-menu
          :default-active="path"
          background-color="transparent"
          class="el-menu-vertical-demo"
          text-color="#ffffff"
          active-text-color="#1f86ed"
          :default-openeds="openeds"
          :router="false"
        >
          <el-submenu index="1">
            <template slot="title">
              <span class="title">关于我们</span>
            </template>
            <el-menu-item-group>
              <template v-for="(item,index) in arrayData">
                <el-menu-item
                  :index="item.index"
                  :key="index"
                  @click="handleClick(index)"
                >{{item.title}}</el-menu-item>
              </template>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main class="el-main">
        <div>{{des}}</div>
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
    </div>-->

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      //http://47.101.52.36:8080/enterprise/upload/test.do
      fileList: [],
      url: "/enterprise/upload/test.do",
      path: "",
      openeds: ["1"],
      des: "",
      arrayData: [
        {
          index: "1",
          title: "· 软件工程师高级别",
          des: "对应工程描述1"
        },
        {
          index: "2",
          title: "· ios工程师高级别",
          des: "对应工程描述2"
        },
        {
          index: "3",
          title: "· android工程师高级别",
          des: "对应工程描述3"
        },
        {
          index: "4",
          title: "· 算法工程师高级别",
          des: "对应工程描述4"
        },
        {
          index: "5",
          title: "· AI工程师高级别",
          des: "对应工程描述5"
        },
        {
          index: "6",
          title: "· 视频工程师高级别",
          des: "对应工程描述6"
        }
      ]
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
    },
    testGet() {
      axios
        .get("/enterprise/hello/test.do")
        .then(res => {
          console.log(res.data);
          this.arrayData = [
            {
              index: "1",
              title: "· 软件工程师高级别",
              des: "对应工程描述1"
            },
            {
              index: "2",
              title: "· ios工程师高级别",
              des: "对应工程描述2"
            },
            {
              index: "3",
              title: "· android工程师高级别",
              des: "对应工程描述3"
            },
            {
              index: "4",
              title: "· 算法工程师高级别",
              des: "对应工程描述4"
            },
            {
              index: "5",
              title: "· AI工程师高级别",
              des: "对应工程描述5"
            },
            {
              index: "6",
              title: "· 视频工程师高级别",
              des: "对应工程描述6"
            }
          ];
          this.path = this.arrayData[0].index; 
          this.des =  this.arrayData[0].des;
        })
        .catch(err => {
          console.log(err);
        });
    },
    onRouteChanged() {
      let that = this;
      // that.path = that.$route.path;
      console.log("charles2" + that.path);
      if(that.arrayData != null && that.arrayData.length > 0){
        that.path = that.arrayData[0].index;
        that.des = that.arrayData[0].des;
      }
    },
    handleClick(index) {
      let that = this;
      console.log("select==" + index);
      that.des = that.arrayData[index].des;
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: "onRouteChanged"
    }
  },
  mounted() {
    //this.testGet();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.join-parent {
  background: #545c64;
  display: flex;
  justify-content: center;
}
.join-content{
  display: flex;
  max-width: 1200px;
  width: 1200px;
}

.aside {
  margin-top: 20px;
  overflow-x: hidden;
}

.el-menu-vertical-demo {
  border-right-color: transparent !important;
  // position: relative;
  // left: 0%;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: transparent !important;
}
.el-menu-vertical-demo /deep/ .el-submenu__title {
  background-color: transparent !important;
  //submenu 标题
}
.el-menu-vertical-demo /deep/ .el-menu-item {
  //控制group item
}

.el-menu-vertical-demo /deep/ .el-submenu__icon-arrow {
  display: none;
}

.title {
  color: #1f86ed;
}
.title::before {
  content: "";
  position: absolute;
  bottom: 0px;
  top: auto;
  left: auto;
  height: 1px;
  width: 22px;
  background-color: #1f86ed;
}
.el-main{

}
.upload-parent {
  display: flex;
  justify-content: center;
}
.upload-demo {
  align-items: center;
}
</style>
