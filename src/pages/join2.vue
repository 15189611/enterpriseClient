<template>
  <div class="join-parent">
    <div class="join-content">
    <el-container>

      <router-link v-for="item in arrayData" :key="item.id" :to="item.path">{{item.name}}</router-link>
      <router-link to="/mJoin/mProductDetails">2</router-link>

      <el-main class="el-main">
        <!-- <div>{{des}}</div> -->
        ddddddd
        <router-view /> 
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
import Vue from "vue";
import Router from 'vue-router'
import router from '../router/index'
import mProductDetails from '@/pages/product_details'

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
          
          path: '/mJoin/mProductDetails',
          index: "1",
          name: '首页',
          params: {},
          component: mProductDetails,
          title: "· 软件工程师高级别",
          des: "对应工程描述1"
        },
        {
          index: "2",
          title: "· ios工程师高级别",
          des: "对应工程描述2",
          path: '/mJoin/mProductDetails2',
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
      that.path = that.$route.path;
       // mJoin
      console.log("charles2" + that.$route.path);
      // that.arrayData.forEach(element => {
      //     element.path =  "/mJoin/mProductDetails";
      // });

      // if(that.arrayData != null && that.arrayData.length > 0){
      //   //that.path = that.arrayData[0].index;
      //   console.log("000000"+ that.arrayData[0].path)
      //   that.path = that.arrayData[0].path;
      //   that.des = that.arrayData[0].des;
      // }
    },
    handleClick(index) {
      let that = this;
      console.log("select==" + index);
      // that.path = that.arrayData[index].index;
      // that.des = that.arrayData[index].des;
    console.log("------>"+ that.arrayData[index].path)
    //  that.path = that.arrayData[index].path;

      // that.$router.push({
      //    path: `/mJoin/mProductDetails/${index}`,
      //   }
      // );

    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: "onRouteChanged"
    }
  },
  mounted() {
    this.testGet();
    console.log(this.$router.options.routes, 'before')
    // var demo = []
    this.$router.options.routes.map(item => {
      if(item.path === '/mJoin'){
        console.log(item, 'add')
        item['children'] = this.arrayData
      }
    })
    // console.log(router.options.routes, 'after')
    // Vue.use(new Router(router.options.routes))

    this.$router.addRoutes(this.$router.options.routes)

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
