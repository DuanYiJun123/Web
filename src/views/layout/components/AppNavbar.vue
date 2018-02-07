<template>
  <div class="navbar-container">
    <div class="main-inner">
      <el-row type="flex" :gutter="20">
        <el-col :xs='3' :sm="3" :md="3" :lg="3">
          <router-link to="/cloudWalkEngine"><img class="logo" src="/src/assets/public_images/logo.png" alt="能力引擎开放平台logo"></router-link>
        </el-col>
        <el-col type="flex" :offset="9" :xs='12' :sm="12" :md="12" :lg="12" class="nav">
          <el-menu :default-active="activeIndex"
                   class="el-menu-demo"
                   mode="horizontal"
                   @select="handleSelect"
                   background-color="#fff"
                   text-color="#646464"
                   active-text-color="#dd3434">
            <el-menu-item index="1" class="home">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">核心技术</template>
              <div class="nav-itemList">
                <ul class="recogList">
                  <li><p>人脸识别</p></li>
                  <li><el-menu-item index="2-1">人脸检测</el-menu-item></li>
                  <li><el-menu-item index="2-2">表情识别</el-menu-item></li>
                  <li><el-menu-item index="2-3">人脸属性分析</el-menu-item></li>
                  <li><el-menu-item index="2-4">人脸关键点分析</el-menu-item></li>
                </ul>
                <ul class="recogList">
                  <li><p class="picRecog">图像识别</p></li>
                  <li><el-menu-item index="2-5">银行卡识别</el-menu-item></li>
                  <li><el-menu-item index="2-6">身份证识别</el-menu-item></li>
                  <li><el-menu-item index="2-7">人脸去网纹</el-menu-item></li>
                  <li><el-menu-item index="2-8">人脸相似度</el-menu-item></li>
                </ul>
                <ul class="recogList">
                  <li><p class="manRecog">活体识别</p></li>
                  <li><el-menu-item index="2-9">动作活体</el-menu-item></li>
                  <li><el-menu-item index="2-10">红外活体</el-menu-item></li>
                  <li><el-menu-item index="2-11">静默活体</el-menu-item></li>
                  <li><el-menu-item index="2-12">唇语识别</el-menu-item></li>
                </ul>
                <div class="clearfix"></div>
              </div>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">产品介绍</template>
              <el-menu-item index="3-1">云之眼引擎</el-menu-item>
              <el-menu-item index="3-2">人脸识别引擎</el-menu-item>
              <el-menu-item index="3-3">商用SDK</el-menu-item>
              <el-menu-item index="3-4">FaceGo-Smart</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">客户案例</template>
              <el-menu-item index="4-1">安防</el-menu-item>
              <el-menu-item index="4-2">金融</el-menu-item>
              <el-menu-item index="4-3">其他</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">功能演示</template>
              <div class="nav-itemList">
                <ul class="recogList">
                  <li><p>人脸识别</p></li>
                  <li><el-menu-item index="5-1">人脸检测</el-menu-item></li>
                  <li><el-menu-item index="5-2">表情识别</el-menu-item></li>
                  <li><el-menu-item index="5-3">人脸属性分析</el-menu-item></li>
                  <li><el-menu-item index="5-4">人脸关键点分析</el-menu-item></li>
                </ul>
                <ul class="recogList">
                  <li><p class="picRecog">图像识别</p></li>
                  <li><el-menu-item index="5-5">银行卡识别</el-menu-item></li>
                  <li><el-menu-item index="5-6">身份证识别</el-menu-item></li>
                  <li><el-menu-item index="5-7">人脸去网纹</el-menu-item></li>
                  <li><el-menu-item index="5-8">人脸相似度</el-menu-item></li>
                </ul>
                <ul class="recogList">
                  <li><p class="manRecog">活体识别</p></li>
                  <li><el-menu-item index="5-9">动作活体</el-menu-item></li>
                  <li><el-menu-item index="5-10">红外活体</el-menu-item></li>
                  <li><el-menu-item index="5-11">静默活体</el-menu-item></li>
                  <li><el-menu-item index="5-12">唇语识别</el-menu-item></li>
                </ul>
                <div class="clearfix"></div>
              </div>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">技术支持</template>
              <el-menu-item index="6-1">咨询价格</el-menu-item>
              <el-menu-item index="6-2">申请试用</el-menu-item>
              <el-menu-item index="6-3">联系我们</el-menu-item>
              <el-menu-item index="6-4">常见问题</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'AppNavbar',
    data() {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key);
        switch (key) {
          case '1':
            this.$router.push({path: '/cloudWalkEngine'});
            break;
          case '2-1':
            this.$router.push({path: '/faceDetRecog'});
            break;
          case '2-2':
            this.$router.push({path: '/expressionRecog'});
            break;
          case '2-3':
            this.$router.push({path: '/characterRecog'});
            break;
          case '2-4':
            this.$router.push({path: '/keypointRecog'});
            break;
          case '2-5':
            this.$router.push({path: '/bankCardRecog'});
            break;
          case '2-6':
            this.$router.push({path: '/idCardRecog'});
            break;
          case '2-7':
            this.$router.push({path: '/striationRecog'});
            break;
          case '2-8':
            this.$router.push({path: '/similarityRecog'});
            break;
          case '2-9':
            this.$router.push({path: '/actionRecog'});
            break;
          case '2-10':
            this.$router.push({path: '/infraredRecog'});
            break;
          case '2-11':
            this.$router.push({path: '/silentRecog'});
            break;
          case '2-12':
            this.$router.push({path: '/lipreadingRecog'});
            break;
          case '3-1':
            this.$router.push({path: '/faceGoCubeEngine'});
            break;
          case '3-2':
            this.$router.push({path: '/faceRecognitionEngine'});
            break;
          case '3-3':
            this.$router.push({path: '/businessSDK'});
            break;
          case '3-4':
            this.$router.push({path: '/faceGoSmartEngine'});
            break;
          case '4-1':
            this.$router.push({path: '/securityCase'});
            break;
          case '4-2':
            this.$router.push({path: '/financialCase'});
            break;
          case '4-3':
            this.$router.push({path: '/otherCase'});
            break;
          case '5-1':
            this.$router.push({path: '/faceDetRecog'});
            break;
          case '5-2':
            this.$router.push({path: '/expressionRecog'});
            break;
          case '5-3':
            this.$router.push({path: '/characterRecog'});
            break;
          case '5-4':
            this.$router.push({path: '/keypointRecog'});
            break;
          case '5-5':
            this.$router.push({path: '/bankCardRecog'});
            break;
          case '5-6':
            this.$router.push({path: '/idCardRecog'});
            break;
          case '5-7':
            this.$router.push({path: '/striationRecog'});
            break;
          case '5-8':
            this.$router.push({path: '/similarityRecog'});
            break;
          case '5-9':
            this.$router.push({path: '/actionRecog'});
            break;
          case '5-10':
            this.$router.push({path: '/infraredRecog'});
            break;
          case '5-11':
            this.$router.push({path: '/silentRecog'});
            break;
          case '5-12':
            this.$router.push({path: '/lipreadingRecog'});
            break;
          default:
            this.$router.push({path: '/404'});
            break;
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar-container {
    height: 60px;
    background: #fff;
    .main-inner {
      .logo {
        vertical-align: middle;
        display: block;
        margin-top: 9px;
      }
      .nav {
        min-width: 570px;
      }
      .home {
        color: #222;
        background: none !important;
        &:hover {
          background: transparent !important;
        }
      }
      .nav-itemList {
        min-width: 450px;
        box-sizing: border-box;
        height: auto;
        background: #fff;
        .recogList {
          width: 150px;
          float: left;
          border-right: 1px solid #f0f0f0;
          &:last-child {
            border-right: none;
          }
          & li > p {
            color: #3c3c3c;
            padding: 18px 0;
            background: url("/src/assets/public_images/faceRecog.png") no-repeat 22px center;
          }
          .picRecog {
            background: url("/src/assets/public_images/picRecog.png") no-repeat 22px center !important;
          }
          .manRecog {
            background: url("/src/assets/public_images/manRecog.png") no-repeat 22px center !important;
          }
        }
      }
    }
  }

</style>
