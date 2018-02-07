<template>
  <div class="smart-container">
    <CoreBanner v-bind="banner" v-show="banner"></CoreBanner>
    <div class="smart-introduction" v-show="introduce">
      <div class="main-inner">
        <PreHead v-bind="smartIntro"></PreHead>
        <Introduce v-bind="introduce"></Introduce>
      </div>
    </div>
    <div class="smart-advantages"  v-show="advanList1.length>0">
      <div class="main-inner">
        <HeadOrder v-bind="proAdvantages"></HeadOrder>
        <div class="advanLine1">
          <el-row :gutter="170">
            <el-col :span="8" v-for="(item,index) in advanList1" :key="index">
              <Advantages v-bind="item"></Advantages>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="smart-experience" v-show="experienceText1">
      <div class="main-inner">
        <HeadAfter v-bind="userExperience"></HeadAfter>
        <p>{{experienceText1}}</p>
        <p class="experWords">{{experienceText2}}</p>
        <div class="experience">
          <!-- 体验部分 -->
        </div>
      </div>
    </div>
    <div class="smart-funciton" v-show="funList.length>0">
      <div class="main-inner">
        <HeadAfter v-bind="smartFuns"></HeadAfter>
        <p class="intro-all">{{funtext}}</p>
        <ul class="functionList">
          <li v-for="item in funList">
            <Features v-bind="item"></Features>
          </li>
        </ul>
      </div>
    </div>
    <div class="smart-scene" v-show="caseLists.length>0">
      <div class="main-inner">
        <HeadAfter v-bind="appliScene"></HeadAfter>
        <p>{{smartAppScene}}</p>
        <el-row :gutter="30">
          <el-col :span="8" v-for="(item , index) in caseLists" :key="index">
            <Scene2 v-bind="item"></Scene2>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import PreHead from '@/components/PreHead'
  import HeadAfter from '@/components/HeadAfter'
  import HeadOrder from '@/components/HeadOrder'
  import GreetingWords from '@/components/GreetingWords'
  import DownLoad from '@/components/DownLoad'
  import CoreBanner from '@/components/CoreBanner'
  import Introduce from '@/components/Introduce'
  import Features from '@/components/Features'
  import Advantages from '@/components/Advantages'
  import Scene2 from '@/components/Scene2'
  import {
    getBankBanner,
    getBankIntroduce,
    getBankFun,
    getBankAdvan,
    getBankAppli,
    getBankCardExper
  } from '@/api/coreTech'

  export default {
    name: "actionRecog",
    data() {
      return {
        banner: {
          banner_pic: "",   // banner 图
          bannerBigTitle: '',
          mediumTitle: '',
          smallTitle: '',
          btnInfor: '申请试用'
        },

        //介绍
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

        // 功能
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

        // 用户体验
        userExperience: {
          smallTitle: '',
          preTitle: '',
          postfixTitle: ''
        },
        experienceText1: '',
        experienceText2: '',
        //  应用场景
        appliScene: {
          smallTitle: '',
          preTitle: '',
          postfixTitle: ''
        },
        smartAppScene: '',
        caseLists: [],

      }
    },
    components: {
      PreHead,
      HeadAfter,
      HeadOrder,
      GreetingWords,
      DownLoad,
      CoreBanner,
      Introduce,
      Features,
      Advantages,
      Scene2
    },

    mounted() {

    },
    created() {
      this.getSmartData();
    },
    methods: {
      getSmartData() {
        // banner 图片
        getBankBanner().then(res => {
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
        getBankIntroduce().then(res => {
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            let responce = res.data.data;
            // console.log(responce);
            this.smartIntro.smallTitle = responce.title.subTitle;
            const bigTitle = responce.title.bigTitle;
            this.smartIntro.preTitle = bigTitle.slice(0, 5);
            this.smartIntro.postfixTitle = bigTitle.slice(5, bigTitle.length);

            this.introduce.introPic = responce.content.pic;
            this.introduce.introTitle = responce.content.title;
            this.introduce.introText = responce.content.text;
          }
        });

        //  产品功能
        getBankFun().then(res => {
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
        getBankAdvan().then(res => {
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

          }
        });

        getBankCardExper().then(res => {
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            let responce = res.data.data;
            console.log(responce);
            this.userExperience.smallTitle = responce.title.subTitle;
            const bigTitle = responce.title.bigTitle;

            this.userExperience.preTitle = bigTitle.slice(0, bigTitle.length / 2);
            this.userExperience.postfixTitle = bigTitle.slice(bigTitle.length / 2, bigTitle.length);
            let expText = responce.content.text;
            this.experienceText1 = expText.slice(0, expText.length / 2 - 11);
            this.experienceText2 = expText.slice(expText.length / 2 - 11, expText.length);

          }
        });

        //  应用场景
        getBankAppli().then(res => {
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
        }).catch(err => {
          this.$message.error(err)
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
        background: #f2f2f2;
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
        background: url('/src/assets/technology_images/bankCard_advan_bg.jpg') no-repeat center;
        background-size: cover;
      }
      .smart-scene {
        padding: 60px 0;
        width: 100%;
        height: auto;
        background: #fff;
        & p {
          color: #666;
          font-size: 14px;
          text-align: center;
          margin-bottom: 40px;
        }
      }
      .smart-experience {
        padding: 60px 0;
        width: 100%;
        height: auto;
        background: #f8f8f8;
        & p {
          color: #666;
          font-size: 14px;
          text-align: center;
          line-height: 24px;
        }
        .experWords {
          margin-bottom: 40px;
        }
        .experience {
          /* 体验部分*/
          width: 100%;
          background: #f0f0f0;
          min-height: 400px;
        }
      }
    }
  }
</style>
