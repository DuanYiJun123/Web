<template>
  <div class="home-container">
    <!-- 轮播图-->
    <el-row v-show="picList.length>0">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-carousel height="680px" :interval="5000">
          <el-carousel-item v-for="(item, index) in picList " :key="index">
            <img :src="item.url" alt="广告轮播图">
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>

    <!--关于云从科技 -->
    <div class="home-aboutUs" v-show="aboutUsTitle">
      <div class="main-inner">
        <Headline v-bind="aboutCloudWalk"></Headline>
        <h3>{{aboutUsTitle}}</h3>
        <p>{{aboutUsText}}</p>
      </div>
    </div>

    <!--能力引擎产品-->
    <div class="home-products" v-show="productsList.length>0">
      <div class="main-inner">
        <Headline v-bind="aboutProducts"></Headline>
        <p>{{productsText}}</p>
        <el-row class="productsList" :gutter="30">
          <el-col :span="6" v-for="(item,index) in productsList" :key="index">
            <!--<EngineProducts v-bind="item"></EngineProducts>-->
            <div class="list">
              <img :src="item.pic" alt="图片">
              <h4>{{item.title}}</h4>
              <span></span>
              <p>{{item.text}}</p>
              <button @click="learnMorePro(index)">{{learnMore}}</button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <!--产品优势-->
    <div class="home-advantages" v-show="advantagesList.length>0">
      <div class="main-inner">
        <HeadOrder v-bind="aboutAdvantages"></HeadOrder>
        <p>{{advantagesText}}</p>
        <el-row class="advantagesList" :gutter="30">
          <el-col :span="6" v-for="(item,index) in advantagesList" :key="index">
            <Advantages v-bind="item"></Advantages>
          </el-col>
        </el-row>
      </div>
    </div>

    <!--合作案例-->
    <div class="home-cases" v-show="ourCasesList.length>0">
      <div class="main-inner">
        <Headline v-bind="ourCases"></Headline>
        <p>{{ourCasesText}}</p>
        <el-row class="casesList" :gutter="15">
          <el-col :span="8" v-for="(item,index) in ourCasesList" :key="index">
            <div class="picView">
              <div class="picView__imgBg">
                <img :src="item.casePic" alt="图片">
              </div>
              <h6>{{item.casePicTitle}}</h6>
              <p>{{item.casePicDetail}}</p>
            </div>
          </el-col>
        </el-row>
        <button class="readMore" @click="readMoreClient">{{readMore}}</button>
      </div>
    </div>

    <!--准备联系我们-->
    <div class="home-contact" v-show="contactsInfor">
      <div class="main-inner">
        <GreetingWords v-bind="contactsInfor"></GreetingWords>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import Headline from '@/components/Headine'
  import HeadOrder from '@/components/HeadOrder'
  import Advantages from '@/components/Advantages'
  import GreetingWords from '@/components/GreetingWords'
  import {getBannerPic, getAboutUs, getOurProducts, getAdvantages, getCases, getContact} from '@/api/home'

  export default {
    name: 'home',
    components: {
      Headline, HeadOrder, Advantages,GreetingWords
    },
    data() {
      return {
        picList: [],   // banner图片
        aboutCloudWalk: {   // 关于云从科技
          smallTitle: '',
          preTitle: '',
          postfixTitle: ''
        },
        aboutUsTitle: '',  // 关于我们内容标题
        aboutUsText: '',  //  关于我们内容

        aboutProducts: {  // 云从能力引擎产品
          smallTitle: '',
          preTitle: '',
          postfixTitle: ''
        },
        learnMore: '了解更多',
        productsText: '',  //  产品介绍内容
        productsList: [],
        readMore: '查看更多',

        aboutAdvantages: {   // 产品优势
          smallTitle: '',
          preTitle: '',
          postfixTitle: ''
        },
        advantagesText: '',  //  产品介绍内容
        advantagesList: [],

        ourCases: {   // 合作案例
          smallTitle: '',
          preTitle: '',
          postfixTitle: ''
        },
        ourCasesText: '',
        ourCasesList: [],

        //  联系我们
        contactsInfor: {
          readyContact: '',
          readyRegister: '',
          apply: '',
          contactus: '联系我们'
        },
        // readyContact: '',  // 联系我们
        // readyRegister: ''
      }
    },

    mounted() {
      this.getPagesData();
    },
    computed: {},
    methods: {
      getPagesData() {
        // banner 图片
        getBannerPic().then(res => {
          // console.log(res);
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            this.picList = res.data.data;
          }
        });
        //  关于我们
        getAboutUs().then(res => {
          // console.log(res);
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            this.aboutCloudWalk.smallTitle = res.data.data.title.subTitle;  // 小标题
            let biggestTitle = res.data.data.title.bigTitle;
            this.aboutCloudWalk.preTitle = biggestTitle.slice(0, biggestTitle.indexOf(" "));  // 前半段
            this.aboutCloudWalk.postfixTitle = biggestTitle.slice(biggestTitle.indexOf(" "), biggestTitle.length);  // 后半段
            this.aboutUsText = res.data.data.content.text;
            this.aboutUsTitle = res.data.data.content.title;
          }
        });

        //  能力引擎产品
        getOurProducts().then(res => {
          // console.log(res);
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            this.aboutProducts.smallTitle = res.data.data.title.subTitle;  // 小标题
            let biggestTitle = res.data.data.title.bigTitle;
            this.aboutProducts.preTitle = biggestTitle.slice(0, biggestTitle.indexOf(" "));  // 前半段
            this.aboutProducts.postfixTitle = biggestTitle.slice(biggestTitle.indexOf(" "), biggestTitle.length);  // 后半段
            this.productsText = res.data.data.content.text;
            this.productsList = res.data.data.content.engineList;
            // console.log(this.productsList);
          }
        });

        //  产品优势
        getAdvantages().then(res => {
          // console.log(res);
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            this.aboutAdvantages.smallTitle = res.data.data.title.subTitle;  // 小标题
            let biggestTitle = res.data.data.title.bigTitle;
            this.aboutAdvantages.preTitle = biggestTitle.slice(0, biggestTitle.indexOf(" "));  // 前半段
            this.aboutAdvantages.postfixTitle = biggestTitle.slice(biggestTitle.indexOf(" "), biggestTitle.length);  // 后半段

            this.advantagesText = res.data.data.content.text;
            this.advantagesList = res.data.data.content.advantagesList;
          }
        });

        //   合作案例
        getCases().then(res => {
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            console.log(res);
            this.ourCases.smallTitle = res.data.data.title.subTitle;  // 小标题
            let biggestTitle = res.data.data.title.bigTitle;
            this.ourCases.preTitle = biggestTitle.slice(0, biggestTitle.indexOf(" "));  // 前半段
            this.ourCases.postfixTitle = biggestTitle.slice(biggestTitle.indexOf(" "), biggestTitle.length);  // 后半段

            this.ourCasesText = res.data.data.content.text;
            this.ourCasesList = res.data.data.content.caseList;
            // console.log(this.ourCasesList);
          }
        });

        //  联系我们
        getContact().then(res => {
          // console.log(res);
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            this.contactsInfor.readyContact = res.data.data.greetingWords;
            this.contactsInfor.readyRegister = res.data.data.smallWords;
          }
        })
      },
      readMoreClient() {
        this.$router.push({path: '/securityCase'})
      },
      learnMorePro(index) {
        switch (index !== undefined && index !== null) {
          case index === 0 :
            this.$router.push({path: '/faceGoCubeEngine'});
            break;
          case index === 1:
            this.$router.push({path: '/businessSDK'});
            break;
          case index === 2:
            this.$router.push({path: '/faceRecognitionEngine'});
            break;
          case index === 3:
            this.$router.push({path: '/faceGoSmartEngine'});
            break;
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .home {
    &-container {
    }
    & img {
      width: 100%;
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }
    &-aboutUs {
      width: 100%;
      background: #fff;
      padding: 70px 0;
      h3 {
        color: #222;
        font-size: 22px;
        text-align: center;
        margin-bottom: 50px;
      }
      p {
        color: #666;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        text-indent: 2em;
      }
    }
    &-products {
      width: 100%;
      height: auto;
      background: #fafafa;
      padding: 70px 0;
      p {
        text-align: center;
        color: #666;
        font-size: 14px;
      }
      .productsList {
        width: 100%;
        height: auto;
        margin-top: 50px;
        .list {
          width: 100%;
          background: #fff;
          border: 1px solid #e2e2e2;
          padding: 10px;
          box-sizing: border-box;
          &:hover {
            -webkit-transform: translate(0px, -5px);
            -moz-transform: translate(0px, -5px);
            -o-transform: translate(0px, -5px);
            -ms-transform: translate(0px, -5px);
            transform: translate(0px, -5px);
            -webkit-box-shadow: 0 5px 10px rgba(67, 72, 84, 0.3);
            box-shadow: 0 5px 10px rgba(67, 72, 84, 0.3);
            transition-duration: 0.4s;
            border: 1px solid #f26060;
          }
          img {
            width: 100%;
          }
          span {
            width: 60px;
            height: 1px;
            background: #e6aaaa;
            margin: 0 auto 15px;
            display: block;
          }
          h4 {
            color: #333;
            font-size: 18px;
            line-height: 44px;
            text-align: center;
            font-weight: normal;
            margin-top: 15px;
          }
          p {
            text-align: center;
            padding: 0 10px;
            line-height: 24px;
            font-size: 14px;
            min-height: 96px;
          }
          button {
            padding: 6px 25px;
            border: 1px solid #e6e6e6;
            border-radius: 10px;
            margin: 15px auto;
            display: block;
            background: none;
            color: #969696;
            font-size: 12px;
            outline: none;
            &:hover {
              background: #f26060;
              color: #fff;
              border: 1px solid #f26060;
              transition: all 0.4s;
              cursor: pointer;
            }
          }
        }

      }
    }
    &-advantages {
      width: 100%;
      height: auto;
      padding: 70px 0;
      background: url("/src/assets/public_images/advantages_bg.jpg") no-repeat top;
      background-size: cover;
      p {
        text-align: center;
        color: #888;
        font-size: 14px;
      }
      .advantagesList {
        width: 100%;
        height: auto;
        margin-top: 50px;
      }
    }
    &-cases {
      width: 100%;
      height: auto;
      padding: 70px 0;
      background: #f8f8f8;
      p {
        text-align: center;
        color: #888;
        font-size: 14px;
      }
      .casesList {
        margin-top: 3em;
        .picView {
          position: relative;
          vertical-align: top;
          display: inline-block;
          width: 100%;
          height: 14em;
          margin-bottom: 1em;
          overflow: hidden;
          -webkit-transition: opacity 0.5s linear;
          -moz-transition: opacity 0.5s linear;
          -o-transition: opacity 0.5s linear;
          transition: opacity 0.5s linear;
          opacity: 1;
          &:first-child {
            clear: left;
          }
          .preloading {
            opacity: 0;
            display: block;
          }
          & h6{
            position: absolute;
            width: 100%;
            padding: 1em 1em;
            color: #fff;
            font-size: 1.6em;
            font-weight: 500;
            line-height: 4em;
            text-align: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            opacity: 0;
            overflow: hidden;
            box-sizing: border-box;
            cursor: pointer;
            pointer-events: none;
            -webkit-transition: opacity 0.2s 0.4s linear;
            -moz-transition: opacity 0.2s 0.4s linear;
            -o-transition: opacity 0.2s 0.4s linear;
            transition: opacity 0.2s 0.4s linear;
            &:before,&:after{
              content: '';
              position: absolute;
              width: 0;
              height: 1px;
              background: #f26060;
              -webkit-transform: translate3d(0, 0, 0);
              -moz-transform: translate3d(0, 0, 0);
              -o-transform: translate3d(0, 0, 0);
              -ms-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
              -webkit-transition: width 0.8s 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
              -moz-transition: width 0.8s 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
              -o-transition: width 0.8s 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
              transition: width 0.8s 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
            }
            &:before{
              bottom: 1.2em;
              left: 1em;
            }
            &:after{
              bottom: 1.5em;
              right: 1em;
            }
          }
          & p{
            position: absolute;
            bottom: 4em;
            width: 100%;
            font-size: 14px;
            padding: 0 1em;
            box-sizing: border-box;
            opacity: 0;
            font-weight: 400;
            color: #f0f0f0;
            text-align: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            cursor: pointer;
            pointer-events: none;
            -webkit-transition: opacity 0.3s 0.5s linear;
            -moz-transition: opacity 0.3s 0.5s linear;
            -o-transition: opacity 0.3s 0.5s linear;
            transition: opacity 0.3s 0.5s linear;
          }
        }
        .picView__imgBg {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          overflow: hidden;
          & img{
            width: 100%;
            vertical-align: middle;
          }
          &:before{
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.75);
            border-radius: 0;
            -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.65, 0.05, 0.36, 1), -webkit-border-radius 0.2s 0.1s cubic-bezier(0.65, 0.05, 0.36, 1);
            -moz-transition: -moz-transform 0.3s cubic-bezier(0.65, 0.05, 0.36, 1), border-radius 0.2s 0.1s cubic-bezier(0.65, 0.05, 0.36, 1);
            -o-transition: -o-transform 0.3s cubic-bezier(0.65, 0.05, 0.36, 1), border-radius 0.2s 0.1s cubic-bezier(0.65, 0.05, 0.36, 1);
            transition: -webkit-transform 0.3s cubic-bezier(0.65, 0.05, 0.36, 1), -moz-transform 0.3s cubic-bezier(0.65, 0.05, 0.36, 1), -o-transform 0.3s cubic-bezier(0.65, 0.05, 0.36, 1), transform 0.3s cubic-bezier(0.65, 0.05, 0.36, 1), border-radius 0.2s 0.1s cubic-bezier(0.65, 0.05, 0.36, 1);
            -webkit-transform: translate3d(100%, 0, 0);
            -moz-transform: translate3d(100%, 0, 0);
            -o-transform: translate3d(100%, 0, 0);
            -ms-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
          }
        }
        .picView__color {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-transform: translate3d(0, 0, 0);
          -moz-transform: translate3d(0, 0, 0);
          -o-transform: translate3d(0, 0, 0);
          -ms-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          -webkit-transition: width 0.8s 0.3s cubic-bezier(0.65, 0.05, 0.36, 1), height 0.8s 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
          -moz-transition: width 0.8s 0.3s cubic-bezier(0.65, 0.05, 0.36, 1), height 0.8s 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
          -o-transition: width 0.8s 0.3s cubic-bezier(0.65, 0.05, 0.36, 1), height 0.8s 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
          transition: width 0.8s 0.3s cubic-bezier(0.65, 0.05, 0.36, 1), height 0.8s 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
        }
        .picView:hover .picView__color,
        .picView.hovered .picView__color {
          width: 15em;
          height: 14em;
        }
        .picView:hover .picView__imgBg:before,
        .picView.hovered .picView__imgBg:before {
          -webkit-transform: translate3d(0, 0, 0);
          -moz-transform: translate3d(0, 0, 0);
          -o-transform: translate3d(0, 0, 0);
          -ms-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        .picView:hover h6,
        .picView.hovered h6 {
          opacity: 1;
        }
        .picView:hover h6:before,
        .picView.hovered h6:before,
        .picView:hover h6:after,
        .picView.hovered h6:after {
          width: 10.5em;
        }
        .picView:hover p,
        .picView.hovered p {
          opacity: 1;
        }
      }
      .readMore {
        margin: 24px auto 0;
        background: transparent;
        border: 1px solid #cacaca;
        font-size: 14px;
        color: #bbb;
        padding: 12px 46px;
        border-radius: 10px;
        outline: none;
        box-sizing: border-box;
        display: block;
        &:hover {
          cursor: pointer;
          background: #f26060;
          color: #fff;
          border: 1px solid #f26060;
          transition: all 0.4s;
        }
      }
    }

    &-contact {
      width: 100%;
      height: auto;
      background: url("/src/assets/public_images/contact_us_bg.jpg") no-repeat center;
      .contact-content {
        padding: 116px 0;
        h2 {
          color: #fefefe;
          font-size: 28px;
          text-align: left;
          line-height: 46px;
        }
        p {
          font-size: 14px;
          color: #c9c9c9;
          text-align: left;
        }

        button {
          margin-top: 8px;
          background: transparent;
          border: 1px solid #cacaca;
          font-size: 14px;
          color: #bbb;
          padding: 12px 60px;
          border-radius: 10px;
          outline: none;
          box-sizing: border-box;
          display: block;
          &:hover {
            cursor: pointer;
            background: #f26060;
            color: #fff;
            border: 1px solid #f26060;
            transition: all 0.4s;
          }
        }

      }
    }

  }
</style>
