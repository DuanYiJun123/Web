<template>
  <div class="smart-container">
    <Banner v-bind="banner" v-show="banner"></Banner>
    <div class="smart-introduction" v-show="introduce">
      <div class="main-inner">
        <HeadAfter v-bind="smartIntro"></HeadAfter>
        <Introduce v-bind="introduce"></Introduce>
      </div>
    </div>
    <div class="smart-funciton" v-show="funList.length>0">
      <div class="main-inner">
        <HeadAfter v-bind="smartFuns"></HeadAfter>
        <p class="intro-all">{{funtext}}</p>
        <ul class="functionList">
          <li v-for="(item,index) in funList" :key="index">
            <Features v-bind="item"></Features>
          </li>
        </ul>
      </div>
    </div>
    <div class="smart-advantages" v-show="advanList1.length>0">
      <div class="main-inner">
        <HeadOrder v-bind="proAdvantages"></HeadOrder>
        <div class="advanLine1">
          <el-row :gutter="170">
            <el-col :span="8" v-for="(item,index) in advanList1" :key="index">
              <Advantages v-bind="item"></Advantages>
            </el-col>
          </el-row>
        </div>
        <div class="advanLine2" v-if="advanList2.length>0">
          <el-row :gutter="170">
            <el-col :span="8" v-for="(item,index) in advanList2" :key="index">
              <Advantages v-bind="item"></Advantages>
            </el-col>
          </el-row>
        </div>

      </div>
    </div>
    <div class="smart-scene" v-show="caseLists.length>0">
      <div class="main-inner">
        <HeadAfter v-bind="appliScene"></HeadAfter>
        <p>{{smartAppScene}}</p>
        <el-row :gutter="30">
          <el-col :span="6" v-for="(item , index) in caseLists" :key="index">
            <Scene v-bind="item"></Scene>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="smart-download" v-show="downLoadList.length>0">
      <div class="main-inner">
        <HeadOrder v-bind="domDownload"></HeadOrder>
        <el-row :gutter="30">
          <el-col v-for="(item,index) in downLoadList" :key="index" :span="4">
            <DownLoad v-bind="item"></DownLoad>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="smart-contact" v-show="contactsInfor">
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
  import HeadAfter from '@/components/HeadAfter'
  import GreetingWords from '@/components/GreetingWords'
  import DownLoad from '@/components/DownLoad'
  import Banner from '@/components/Banner'
  import Introduce from '@/components/Introduce'
  import Features from '@/components/Features'
  import Advantages from '@/components/Advantages'
  import Scene from '@/components/Scene'
  import {
    getRecoBannerPic,
    getRecoIntroduce,
    getRecoFun,
    getRecoAdvan,
    getRecoAppli,
    getRecoDown,
    getRecoCon
  } from '@/api/productsIntroduce'

  export default {
    name: "faceGoRecogniseEngine",
    data() {
      return {

        banner: {
          banner_pic: "",   // banner 图
          bannerBigTitle: '',
          mediumTitle: '',
          smallTitle: '',
          btnInfor: '申请试用'
        },
        //介绍标题
        smartIntro: {
          smallTitle: '',
          preTitle: '',
          postfixTitle: ''
        },
        introduce: {
          introPic: '',
          introTitle: '',
          introText: '',
        },
        // 功能标题
        smartFuns: {
          smallTitle: '',
          preTitle: '',
          postfixTitle: ''
        },

        funtext: '',
        funList: [],

        proAdvantages: {
          smallTitle: '',
          preTitle: '',
          postfixTitle: ''
        },

        advanList1: [],
        advanList2: [],

        //  应用场景
        appliScene: {
          smallTitle: '',
          preTitle: '',
          postfixTitle: ''
        },

        smartAppScene: '',
        caseLists: [],

        //  文档下载
        domDownload: {
          smallTitle: '',
          preTitle: '',
          postfixTitle: ''
        },

        downLoadList: [],

        //  联系我们
        contactsInfor: {
          readyContact: '',
          readyRegister: '',
          apply: '申请试用',
          contactus: '立即联系'
        },
      }
    },
    components: {
      Headline,
      HeadOrder,
      HeadAfter,
      GreetingWords,
      DownLoad,
      Banner,
      Introduce,
      Features,
      Advantages,
      Scene
    },

    mounted() {

    },
    created() {
      this.getCubeData();
    },
    methods: {
      getCubeData() {
        // banner 图片
        getRecoBannerPic().then(res => {
          // console.log(res);
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            let responce = res.data.data;
            this.banner.banner_pic = responce.picture;
            this.banner.bannerBigTitle = responce.advertise.biggerTitle;
            this.banner.mediumTitle = responce.advertise.mediumTitle;
            this.banner.smallTitle = responce.advertise.smallTitle;
          }
        });
        //   产品介绍
        getRecoIntroduce().then(res => {
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            let responce = res.data.data;
            // console.log(responce);
            this.smartIntro.smallTitle = responce.title.subTitle;
            const bigTitle = responce.title.bigTitle;
            this.smartIntro.preTitle = bigTitle.slice(0, 8);
            this.smartIntro.postfixTitle = bigTitle.slice(8, bigTitle.length);

            this.introduce.introPic = responce.content.pic;
            this.introduce.introTitle = responce.content.title;
            this.introduce.introText = responce.content.text;
          }
        });

        //  产品功能
        getRecoFun().then(res => {
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            let responce = res.data.data;
            // console.log(responce);
            this.smartFuns.smallTitle = responce.title.subTitle;
            const bigTitle = responce.title.bigTitle;

            this.smartFuns.preTitle = bigTitle.slice(0, bigTitle.length / 2);
            this.smartFuns.postfixTitle = bigTitle.slice(bigTitle.length / 2, bigTitle.length);
            this.funtext = responce.content.text;
            this.funList = responce.content.featuresList;
          }
        });

        //   产品优势
        getRecoAdvan().then(res => {
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            let responce = res.data.data;
            // console.log(responce);
            this.proAdvantages.smallTitle = responce.title.subTitle;
            const bigTitle = responce.title.bigTitle;

            this.proAdvantages.preTitle = bigTitle.slice(0, bigTitle.length / 2);
            this.proAdvantages.postfixTitle = bigTitle.slice(bigTitle.length / 2, bigTitle.length);
            this.advanList1 = responce.content.advanList1;
            this.advanList2 = responce.content.advanList2;
          }
        });

        //  应用场景
        getRecoAppli().then(res => {
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            let responce = res.data.data;
            // console.log(responce);
            this.appliScene.smallTitle = responce.title.subTitle;
            const bigTitle = responce.title.bigTitle;
            this.appliScene.preTitle = bigTitle.slice(0, bigTitle.length / 2);
            this.appliScene.postfixTitle = bigTitle.slice(bigTitle.length / 2, bigTitle.length);
            this.smartAppScene = responce.content.text;
            this.caseLists = responce.content.caseList;
          }
        });

        // 文档下载
        getRecoDown().then(res => {
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            let responce = res.data.data;
            // console.log(responce);
            this.domDownload.smallTitle = responce.title.subTitle;
            const bigTitle = responce.title.bigTitle;

            this.domDownload.preTitle = bigTitle.slice(0, bigTitle.length / 2);
            this.domDownload.postfixTitle = bigTitle.slice(bigTitle.length / 2, bigTitle.length);
            this.downLoadList = responce.content.list;
          }
        });

        //  申请试用
        getRecoCon().then(res => {
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            let responce = res.data.data;
            console.log(responce);
            this.contactsInfor.readyContact = responce.greetingWords;
            this.contactsInfor.readyRegister = responce.smallWords;
          }
        });
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .smart {
    &-container {
      width: 100%;
      height: auto;
      .smart-introduction {
        padding: 60px 0;
        width: 100%;
        height: auto;
        background: #fff;
      }
      .smart-funciton {
        padding: 60px 0;
        width: 100%;
        height: auto;
        background: #f8f8f8;
        .intro-all {
          text-align: center;
          font-size: 14px;
          color: #666;
        }
        .functionList {
          width: 100%;
          height: auto;
          list-style: none;
          margin-top: 33px;
          & li {
            width: 100%;
            height: auto;
          }
        }
      }
      .smart-advantages {
        padding: 60px 0;
        width: 100%;
        height: auto;
        background-color: rgba(0, 0, 0, 0.3);
        background: url('/src/assets/products_images/advantages_bg.jpg') no-repeat center;
        .advanLine1 {
          margin-bottom: 54px;
        }
      }
      .smart-scene {
        padding: 60px 0;
        width: 100%;
        height: auto;
        background: #f6f6f6;
        & p {
          color: #666;
          font-size: 14px;
          text-align: center;
          margin-bottom: 40px;
        }
      }
      .smart-download {
        padding: 60px 0;
        width: 100%;
        height: auto;
        background-color: rgba(0, 0, 0, 0.3);
        background: url('/src/assets/products_images/docDownload_bg.jpg') no-repeat center;
      }
      .smart-contact {
        width: 100%;
        height: auto;
        background-color: rgba(0, 0, 0, 0.3);
        background: url('/src/assets/public_images/contact_us_bg.jpg') no-repeat center;
      }
    }
  }
</style>
