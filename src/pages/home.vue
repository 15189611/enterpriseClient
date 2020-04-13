<template>
  <div class="home-parent">
    <img class="head-bg" src="../../static/images/intro-bg.jpg" />
    <!-- <img class="head-bg" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" /> -->

    <div class="head-bg-des">
      <div class="des-one">最终前沿</div>
      <div class="des-two">致力于推动前沿太空科技的一家公司</div>
      <div class="des-three">太空，人类的最终前沿</div>
    </div>

    <div class="head-middle">
      <div class="banner-parent">
        <el-carousel
          ref="carousel"
          :interval="2000"
          arrow="always"
          indicator-position="none"
          :autoplay="false"
          @click.native="banner"
        >
          <el-carousel-item v-for="item in 3" :key="item">
            <div class="banner-des-parent">
              <div class="banner-title">新闻标题</div>
              <div class="banner-des">xxxxxxxx</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="banner-bottom-parent">
        <div v-for="item in 3" :key="item">
          <div
            class="banner-bottom"
            :style="{backgroundImage: 'url(' + converImgUrl + ')',backgroundSize:'contain'}"
          >
            <!-- <img src="../../static/images/collect_money_success.png"  /> -->
            <div class="banner-bottom-des-parent">新闻标题{{item}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="head-bottom">
      <div class="head-bottom-des">
        <div class="head-bottom-des-part1">
          <img class="des-part-icon" src="../../static/images/collect_money_success.png" />
          <div class="des-part-title">关于最终前沿</div>
          <div class="des-part-info">最终前沿是一家中国致力于推动太空科技的一家私有企业，目前总部在北京</br>公司第一步以商业应用为起点，解决用户实实在在存在的问题为目标</div>
        </div>

        <div class="head-bottom-des-part2">
          <img class="des-part-icon" src="../../static/images/collect_money_success.png" />
          <div class="des-part-title">联系最终前沿</div>
          <div class="des-part-info">如果想要联系我们</div>
          <div class="des-part-email">请发邮件至info@finailfrontier.cn</div>
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
      converImgUrl: "../../static/images/intro-bg.jpg"
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
  /* background-image: url("/static/images/intro-bg.jpg"); */
  flex-direction: column;
}
.head-bg {

}
.head-bg-des {
  position: absolute;
  width: 100%;
  color: white;
  text-align: center;
  top: 50%;
}
.des-one {
  font-size: 42px;
}
.des-two {
  margin-top: 20px;
}
.des-three {
  margin-top: 20px;
}
.head-middle {
  background: #545c64;
}
.banner-parent {
  margin-left: 350px;
  margin-right: 350px;
}
.banner-parent /deep/ .el-carousel__container {
  height: 500px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  background-image: url("../../static/images/intro-bg.jpg");
  //background-image: url("https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg");
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #858a91;
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
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 350px;
  margin-right: 350px;
}
.banner-bottom {
  height: 450px;
  //width: 450px;
  width: 33%;
}
.banner-bottom-des-parent {
  position: relative;
  bottom: 0;
  top: 95%;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  color: white;
}

.head-bottom {
  background-color: rgba(0, 0, 0, 0.7);
}
.head-bottom-des {
  padding-top: 100px;
  margin-bottom: 200px;
  margin-left: 350px;
  margin-right: 350px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

.head-bottom-des-part1{
  flex: 1;
  margin-left: 100px;
}

.des-part-icon{
  display: flex;
}
.des-part-title{
  margin-top: 20px;
  font-weight: 700;
  color: white;
  display: inline-block;
  padding-bottom: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #1f86ed;
}
.des-part-info{
  margin-top: 20px;
  font-size: 14px;
  color: white;
  line-height: 25px;
  
}
.head-bottom-des-part2{
  flex: 1;
  margin-left: 100px;
}
.des-part-email{
  color: white;
  font-size: 14px;
  line-height: 25px;
}

</style>
