<template>
  <div class="product-info-parent">
    <div class="product-info-content-parent">

      <div v-show="this.type == 'info'">
        <template v-for="(item,index) in itemArray">
          <div class="product-item-parent">
            <div class="item-img-parent">
              <el-image class="item-img"  fit="cover" :src="require('../../static/images/tianxian.jpg')" />
              <!-- <img class="item-img"  src="../../static/images/tianxian.jpg" alt /> -->
            </div>

            <div class="item-des-parent">
              <div class="item-title">地面平板天线</div>
              <div class="item-info">
                地面平板天线,可楼宇或汽车使用,地面平板天线,可楼宇或汽车使用,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
              </div>
              <div class="item-more" @click="readMore">了解更多</div>
            </div>
          </div>
        </template>
      </div>

      <div v-show="this.type == 'more'">

           <div class="product-detal-parent">
            <div class="product-detal-img-parent">
              <el-image class="detal-img" fit="cover" :src="require('../../static/images/product-detal.jpg')" />
            </div>
              <div class="detal-title">地面平板天线</div>
              <div class="detal-info">
                地面平板天线,可楼宇或汽车使用,地面平板天线,可楼宇或汽车使用,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
                ,地面平板天线,可楼宇或汽车使用
              </div>
              <div class="detal-info-extra">补充描述</div>
              <div class="detal-info-extra-content">补充描述参数补充描述参数补充描述参数
                补充描述参数补充描述参数补充描述参数补充描述参数
                补充描述参数补充描述参数补充描述参数补充描述参数
                补充描述参数补充描述参数补充描述参数补充描述参数
                补充描述参数补充描述参数补充描述参数补充描述参数
              </div>
              <div class="detal-download" @click="downLoad(typeUrl)">下载参数文件</div>
          </div>

      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id", "type"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      itemArray: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      url : "/enterprise/attached/test.pdf",
      imgurl : "/enterprise/attached/w69rLnAqY3.jpg",
      typeUrl : "/enterprise/attached/个人总结.rtf"
    };
  },
  methods: {
    readMore() {
      this.$router
        .push({
          path: `/mProduct/mProductInfo`,
          query: {
            id: this.id,
            type: "more"
          }
        })
        .catch(err => {});
    },
    downLoad(url){
      let fullName = url.split("/").pop().split("?")[0]  //test.pdf
      let fileName  = fullName.split(".")[0]
      let fileType = String(url.substring(url.indexOf(".")).trim())  //.pdf  文件类型

      axios
        .get(url, {
          responseType: "blob"
        })
        .then(res => {
          console.log(res.data);
          if (!!window.ActiveXObject || "ActiveXObject" in window) {
            var currentFileName = fileName + "_" + new Date().toLocaleDateString() + fileType;
            var type = "text/plain; charset=UTF-8";
            var obj = res.data;
            var blob =
              typeof File === "function"
                ? new File([obj], currentFileName, { type: type })
                : new Blob([obj], { type: type });

            if (typeof window.navigator.msSaveBlob !== "undefined") {
              window.navigator.msSaveBlob(blob, currentFileName);
            } else {
              var URL = window.URL || window.webkitURL;
              var downloadUrl = URL.createObjectURL(blob);
              if (currentFileName) {
                var a = document.createElement("a");
                if (typeof a.download === "undefined") {
                  window.location = downloadUrl;
                } else {
                  a.href = downloadUrl;
                  a.download = currentFileName;
                  document.body.appendChild(a);
                  a.click();
                }
              } else {
                window.location = downloadUrl;
              }
              window.URL.revokeObjectURL(a.href)
            }
          } else {
            let url = window.URL.createObjectURL(res.data);
            let link = document.createElement("a");
            link.style.display = "none";
            link.href = url;
            var currentFileName = fileName + "_" + new Date().toLocaleDateString() + fileType;
            link.setAttribute("download", currentFileName);
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(link.href)
          }
          self.fullscreenLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    
  },
  watch: {
    id: {
      immediate: true,
      handler: function(newValue) {
        console.log("charles,id==>>" + this.id);
      }
    },
    type: {
      immediate: true,
      handler: function(newValue) {
        console.log("charles,type==>>" + this.type);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-info-parent {
  background-color: #292929;
}
.product-info-content-parent {
  margin-top: 20px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1200px;
}

.product-item-parent {
  overflow-y: hidden;
  overflow-x: hidden;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
}
.item-img-parent{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item-img {
  max-width: 225px;
  max-height: 225px;
  width: 225px;
  height: 225px;
}

.item-des-parent {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
}
.item-title {
  font-size: 14px;
  font-weight: 700;
}
.item-info {
  margin-top: 20px;
  font-size: 14px;
}
.item-more {
  font-size: 14px;
  position: absolute;
  width: 200px;
  bottom: 0px;
  top: auto;
  border: 1px solid #fdbc21;
  border-radius: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}


/* 详情的css */
.product-detal-parent{
  display: flex;
  flex-direction: column;
  color: white;
}
.detal-img{
  max-width: 625px;
  max-height: 225px;
  width: 625px;
  height: 225px;
}
.detal-title{
  
  margin-top: 30px;
  font-size: 14px;
  font-weight: 700;
}
.detal-info{
  max-width: 625px;
  margin-top: 20px;
  font-size: 14px;
}
.detal-info-extra{
  margin-top: 30px;
  font-size: 14px;
}
.detal-info-extra-content{
  max-width: 625px;
  margin-top: 20px;
  font-size: 14px;
}
.detal-download{
  margin-top: 40px;
  font-size: 14px;
  width: 200px;
  border: 1px solid #fdbc21;
  border-radius: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

</style>
