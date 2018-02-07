<template>
  <div class="client-container">
    <Banner v-bind="banner"></Banner>
    <div class="typical_case">
      <div class="main-inner">
        <PreHead v-bind="typicalCaseTitle"></PreHead>
        <ul class="functionList">
          <li v-for="(item,index) in caseList" :key="index">
            <Cases v-bind="item"></Cases>
          </li>
        </ul>
      </div>
    </div>
    <div class="more_case">
      <div class="main-inner">
        <PreHead v-bind="moreCaseTitle"></PreHead>
        <el-row :gutter="30">
          <el-col :span="6" v-for="(item,index) in moreCaseList" :key="index">
            <div class="caseIcon">
              <img :src="item.pic" alt="图片">
              <!--<div></div>-->
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import PreHead from '@/components/PreHead'
  import Banner from '@/components/Banner'
  import Cases from '@/components/Cases'

  import {
    getOthBannerPic,
    getOthTypical,
    getOthCaseMore
  } from '@/api/client'

  export default {
    name: "index",
    components: {
      PreHead,
      Banner,
      Cases
    },
    data() {
      return {
        banner: {
          banner_pic: "",   // banner 图
          bannerBigTitle: '',
          mediumTitle: '',
          smallTitle: '',
          btnInfor: '申请试用'
        },

        //典型案例标题
        typicalCaseTitle: {
          smallTitle: '',
          preTitle: '',
          postfixTitle: ''
        },
        //更多案例标题
        moreCaseTitle: {
          smallTitle: '',
          preTitle: '',
          postfixTitle: ''
        },
        itemList: {},  // 数据项
        caseList: [],
        moreCaseList: []  //更多案例列表

      }
    },
    mounted() {

    },
    created() {
      this.getClientData();
    },
    methods: {
      getClientData() {
        // banner 图片
        getOthBannerPic().then(res => {
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

        //
        getOthTypical().then(res => {

          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            let responce = res.data.data;
            this.typicalCaseTitle.smallTitle = responce.title.subTitle;
            const bigTitle = responce.title.bigTitle;
            this.typicalCaseTitle.preTitle = bigTitle.slice(0, 2);
            this.typicalCaseTitle.postfixTitle = bigTitle.slice(2, bigTitle.length);
            let lists = responce.content.caseList;
            lists.filter(item => {
              this.itemList.useProduct = item.product.slice(0, item.product.indexOf("："));
              this.itemList.productName = item.product.slice(item.product.indexOf("："), item.product.length);
              this.itemList.pic = item.pic;
              this.itemList.title = item.title;
              this.itemList.detail = item.detail;
              this.caseList.push(this.itemList);
            });
          }
        });
        getOthCaseMore().then(res => {
          if (res.data.status !== 0) {
            this.$message.error('获取数据失败!请检查！')
          } else {
            let responce = res.data.data;
            this.moreCaseTitle.smallTitle = responce.title.subTitle;
            const bigTitle = responce.title.bigTitle;
            this.moreCaseTitle.preTitle = bigTitle.slice(0, 2);
            this.moreCaseTitle.postfixTitle = bigTitle.slice(2, bigTitle.length);
            this.moreCaseList = responce.content.caseList;
          }
        });

      }
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .client {
    &-container {
      .typical_case {
        padding: 60px 0;
        width: 100%;
        height: auto;
        background: #f8f8f8;
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
      .more_case {
        padding: 60px 0;
        width: 100%;
        height: auto;
        background: #fff;
        .caseIcon {
          width: 100%;
          height: auto;
          position: relative;
          margin-bottom: 30px;
          border: 1px solid #eaeaea;
          & img {
            max-width: 100%;
          }
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
        }
      }
    }
  }
</style>
