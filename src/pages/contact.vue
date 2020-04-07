<template>
  <div class="parent">
    <el-button slot="trigger" size="small" type="primary" @click="downFile(imgurl)">下载模板</el-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      url : "/enterprise/attached/test.pdf",
      imgurl : "/enterprise/attached/w69rLnAqY3.jpg",
    };
  },
  methods: {
    downFile(url) {
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.parent {
  width: 100%;
  text-align: center;
  background: white;
}
</style>
