<template>
  <div class="home-parent">

    <div class="head-bg">
      <div class="head-bg-des">
        <div class="des-one">最终前沿</div>
        <div class="des-two">致力于推动前沿太空科技的一家公司</div>
        <div class="des-three">太空，人类的最终前沿</div>
      </div>
      <img class="des-logo" src="../../static/images/fixed_logo.png"/>
    </div>

    <!--中间部分-->
    <div class="head-middle">

      <div class="banner-parent">
          <el-carousel
            ref="carousel"
            :interval="2500"
            arrow="always"
            indicator-position="none"
            :autoplay="true"
            @click.native="banner"
          >

          <el-carousel-item v-for="(item,index) in bannerImgs" :key="index">
              <img :src="item.url" class="banner-img" />
              <div class="banner-des-parent">
                <div class="banner-title">新闻标题</div>
                <div class="banner-des">xxxxxxxx</div>
              </div>

            </el-carousel-item>
          </el-carousel>
      </div>

      <div class="banner-bottom-parent">
        <div class="banner-bottom-content">
          <div v-for="(item,index) in imgs" :key="index">
            <div class="banner-bottom">
              <img class="banner-bottom-img" :src="item.url" />
              <div class="banner-bottom-des">新闻标题</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>

    <!--下面部分-->
    <div class="head-bottom">
      <div class="head-controt-content">

        <div class="head-bottom-des">
          <div class="head-bottom-des-part1">
            <img class="des-part-icon" src="../../static/images/index-bottom-1.png" />
            <div class="des-part-title">关于最终前沿</div>
            <div class="des-part-info">
              最终前沿是一家中国致力于推动太空科技的一家私有企业。目前总部在北京</br>
              公司第一步以商业应用为起点，解决用户实实在在存在的问题为目标
            </div>
          </div>

          <div class="head-bottom-des-part2">
            <img class="des-part-icon" src="../../static/images/index-bottom-2.png" />
            <div class="des-part-title">联系最终前沿</div>
            <div class="des-part-info">如果想要联系我们</div>
            <div class="des-part-email">请发邮件至info@finailfrontier.cn</div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import router from "../router/index.js";
import axios from "axios";

export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      currentData: "",
      bannerImgs : [{
         url:  require("../../static/images/new_1.jpg"),
      },{
        url:  require("../../static/images/new_1.jpg"),
      },{
        url:  require("../../static/images/new_1.jpg"),
      }],
      imgs: [{
        url:  require("../../static/images/new_2.jpg"),
      },{
        url:  require("../../static/images/new_3.jpg"),
      },{
        url:  require("../../static/images/new_4.jpg"),
      }]
    };
  },
  methods: {
    testGet() {
      axios
        .get("/enterprise/hello/test.do")
        .then(res => {
          console.log(res.data);
          this.currentData = res.data;
        })
        .catch(err => {
          this.currentData = "首页";
          console.log(err);
        });
    },
    banner() {
      let activeIndex = this.$refs.carousel.activeIndex;
      console.log("banner -click==" + activeIndex);
        this.$router.push({
          path: `/mProductDetails2`,
          query: {
            id:  "1",
          }
        }).catch(err => {});

    }
  },
  mounted() {
    //this.testGet();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home-parent {
  display: flex;
  flex-direction: column;
}
.head-bg {
  background-repeat:no-repeat;
  background-size: cover;
  -moz-background-size:100% 100%;
  background-image: url("../../static/images/index.jpg");
  background-color: #292929;
  height: 1100px;
}

.des-logo{
  display: none;
  width: 55px;
  height: 40px;
  position: fixed;
   text-align: center;
   top: 95%;
   left: 50%;
   z-index: 10000;
}
.head-bg-des {
  position: absolute;
  width: 100%;
  color: white;
  text-align: center;
  top: 30%;
}
.des-one {
  font-size: 42px;
  font-weight: 800;
}
.des-two {
  margin-top: 50px;
  font-weight: 700;
  font-size: 14px;
}
.des-two::before{
  content: "";
  position: absolute;
  bottom: 30px;
  top: auto;
  left: 50%;
  right: auto;
  height: 2px;
  width: 30px;
  background-color: #fdbc21;
}
.des-three {
  margin-top: 30px;
  font-weight: 700;
  font-size: 14px;
}

.head-middle {
  background-repeat:no-repeat;
  background-size: cover;
  -moz-background-size:100% 100%;
  background-image: url("../../static/images/index_1.jpg");
  background-color: #292929;
  height: 1100px;
    // display: flex;
  // justify-content: center;
  // flex-direction: column;
}
.banner-parent {
  position: relative;
  left:50%;
  transform:translate(-50%,0);
  max-width: 1200px;
 // width:100%;
  padding-top: 50px;
}
.banner-parent /deep/ .el-carousel__container {
  //整个banner的高度设置,默认是300
   height: 650px;
   position: relative;
}
.el-carousel__item {
  background-color: #292929;
  background-repeat:no-repeat;
}
.banner-img{
  width: 100%;
  height: 100%;
}

.banner-des-parent {
  position: absolute;
  top: 30%;
  margin-left: 200px;
}
.banner-title {
  color: white;
}
.banner-des {
  color: white;
}

.banner-bottom-parent {
  margin-top: 50px;
  position: relative;
  left:50%;
  transform:translate(-50%,0);
  max-width: 1200px;
}

.banner-bottom-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.banner-bottom {
  width: 33%;
}
.banner-bottom-img{
}
.banner-bottom-des {
  position: absolute;
  width: 30%;
  bottom: 0;
  top: 91%;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  color: white;
}

.head-bottom {
  background-repeat:no-repeat;
  background-size: cover;
  -moz-background-size:100% 100%;
  background-image: url("../../static/images/index_2.jpg");
  background-color: #292929;
  height: 965px;
}

.head-controt-content {
  max-width: 1200px;
  position: relative;
  left:50%;
  transform:translate(-50%,0);
  top: 30%;
}

.head-bottom-des {
  display: flex;
  flex-direction: row;
}

.head-bottom-des-part1 {
   width: 50%;
   display: flex;
   flex-direction: column;
}

.des-part-icon {
  width: 66px;
  height: 66px;
}

.des-part-title {
  margin-top: 30px;
  font-weight: 700;
  font-size: 14px;
  color: white;
}
.des-part-title::before{
  content: "";
  position: absolute;
  bottom: 60px;
  top: auto;
  left: auto;
  height: 2px;
  width: 88px;
  background-color: #fdbc21;
}
.des-part-info {
  margin-top: 20px;
  font-size: 13px;
  color: white;
  line-height: 25px;
}
.head-bottom-des-part2 {
   width: 50%;
   display: flex;
   flex-direction: column;
}
.des-part-email {
  color: white;
  font-size: 13px;
  line-height: 25px;
}
</style>
