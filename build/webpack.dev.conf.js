'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder');

// 这里模仿请求本地数据
const express = require('express');
const app = express(); //  从这后面开始加

let appData = require('../src/data/data.json');

const banner = appData.home.banner;    // 首页获取对应的首页banner图片
const aboutUs = appData.home.aboutUs;     // 首页获取对应的首页公司简介
const ourProducts = appData.home.ourProducts;     // 首页获取对应的首页公司产品
const ourAdvantages = appData.home.ourAdvantages;   // 首页产品优势
const ourCases = appData.home.ourCases;   // 首页合作案例
const contactUs = appData.home.contactUs;   // 首页合作案例

const copyInfor = appData.publicFooter;   // 公共底部信息


const smartBanner = appData.faceGoSmart.banner;   // faceGoSmart 页面
const smartIntroduce = appData.faceGoSmart.introduce;
const smartFunciton = appData.faceGoSmart.features;
const smartAdvantages = appData.faceGoSmart.advantages;
const smartApplication = appData.faceGoSmart.applicationCases;
const smartDownload = appData.faceGoSmart.download;
const smartContact = appData.faceGoSmart.contactUs;

const cubeBanner = appData.faceGoCube.banner;   // faceGoCube 页面
const cubeIntroduce = appData.faceGoCube.introduce;
const cubeFunciton = appData.faceGoCube.features;
const cubeAdvantages = appData.faceGoCube.advantages;
const cubeApplication = appData.faceGoCube.applicationCases;
const cubeDownload = appData.faceGoCube.download;
const cubeContact = appData.faceGoCube.contactUs;

const recoBanner = appData.faceRecognise.banner;   // faceGoCube
const recoIntroduce = appData.faceRecognise.introduce;
const recoFunciton = appData.faceRecognise.features;
const recoAdvantages = appData.faceRecognise.advantages;
const recoApplication = appData.faceRecognise.applicationCases;
const recoDownload = appData.faceRecognise.download;
const recoContact = appData.faceRecognise.contactUs;

const sdkBanner = appData.businessSDK.banner;   // faceGosdk
const sdkIntroduce = appData.businessSDK.introduce;
const sdkFunciton = appData.businessSDK.features;
const sdkAdvantages = appData.businessSDK.advantages;
const sdkApplication = appData.businessSDK.applicationCases;
const sdkDownload = appData.businessSDK.download;
const sdkContact = appData.businessSDK.contactUs;

const secCaseBanner = appData.clientCase.securityCase.banner;   // 安防案例
const secCaseTypical = appData.clientCase.securityCase.typical;
const secCaseMore = appData.clientCase.securityCase.moreCase;

const finCaseBanner = appData.clientCase.financialCase.banner;   // 金融案例
const finCaseTypical = appData.clientCase.financialCase.typical;
const finCaseMore = appData.clientCase.financialCase.moreCase;

const othCaseBanner = appData.clientCase.otherCase.banner;   // 其他案例
const othCaseTypical = appData.clientCase.otherCase.typical;
const othCaseMore = appData.clientCase.otherCase.moreCase;

const bankCardBanner = appData.coreTechnology.bankCardRecog.banner;   //  银行卡识别
const bankCardIntroduce = appData.coreTechnology.bankCardRecog.introduce;
const bankCardFunciton = appData.coreTechnology.bankCardRecog.features;
const bankCardAdvantages = appData.coreTechnology.bankCardRecog.advantages;
const bankCardExperience = appData.coreTechnology.bankCardRecog.experience;
const bankCardApplication = appData.coreTechnology.bankCardRecog.useCases;

const idCardBanner = appData.coreTechnology.idCardRecog.banner;   //  身份证识别
const idCardIntroduce = appData.coreTechnology.idCardRecog.introduce;
const idCardFunciton = appData.coreTechnology.idCardRecog.features;
const idCardAdvantages = appData.coreTechnology.idCardRecog.advantages;
const idCardExperience = appData.coreTechnology.idCardRecog.experience;
const idCardApplication = appData.coreTechnology.idCardRecog.useCases;

const actionRecogBanner = appData.coreTechnology.actionRecog.banner;   //  动作活体识别
const actionRecogIntroduce = appData.coreTechnology.actionRecog.introduce;
const actionRecogFunciton = appData.coreTechnology.actionRecog.features;
const actionRecogAdvantages = appData.coreTechnology.actionRecog.advantages;
const actionRecogExperience = appData.coreTechnology.actionRecog.experience;
const actionRecogApplication = appData.coreTechnology.actionRecog.useCases;

const characterRecogBanner = appData.coreTechnology.characterRecog.banner;   //  特征识别
const characterRecogIntroduce = appData.coreTechnology.characterRecog.introduce;
const characterRecogFunciton = appData.coreTechnology.characterRecog.features;
const characterRecogAdvantages = appData.coreTechnology.characterRecog.advantages;
const characterRecogExperience = appData.coreTechnology.characterRecog.experience;
const characterRecogApplication = appData.coreTechnology.characterRecog.useCases;

const faceDetRecogBanner = appData.coreTechnology.faceDetRecog.banner;   //  人脸检测
const faceDetRecogIntroduce = appData.coreTechnology.faceDetRecog.introduce;
const faceDetRecogFunciton = appData.coreTechnology.faceDetRecog.features;
const faceDetRecogAdvantages = appData.coreTechnology.faceDetRecog.advantages;
const faceDetRecogExperience = appData.coreTechnology.faceDetRecog.experience;
const faceDetRecogApplication = appData.coreTechnology.faceDetRecog.useCases;

const infraredRecogBanner = appData.coreTechnology.infraredRecog.banner;   //  红外线识别
const infraredRecogIntroduce = appData.coreTechnology.infraredRecog.introduce;
const infraredRecogFunciton = appData.coreTechnology.infraredRecog.features;
const infraredRecogAdvantages = appData.coreTechnology.infraredRecog.advantages;
const infraredRecogExperience = appData.coreTechnology.infraredRecog.experience;
const infraredRecogApplication = appData.coreTechnology.infraredRecog.useCases;

const keypointRecogBanner = appData.coreTechnology.keypointRecog.banner;   //  关键点识别
const keypointRecogIntroduce = appData.coreTechnology.keypointRecog.introduce;
const keypointRecogFunciton = appData.coreTechnology.keypointRecog.features;
const keypointRecogAdvantages = appData.coreTechnology.keypointRecog.advantages;
const keypointRecogExperience = appData.coreTechnology.keypointRecog.experience;
const keypointRecogApplication = appData.coreTechnology.keypointRecog.useCases;

const lipreadingRecogBanner = appData.coreTechnology.lipreadingRecog.banner;   //  唇语识别
const lipreadingRecogIntroduce = appData.coreTechnology.lipreadingRecog.introduce;
const lipreadingRecogFunciton = appData.coreTechnology.lipreadingRecog.features;
const lipreadingRecogAdvantages = appData.coreTechnology.lipreadingRecog.advantages;
const lipreadingRecogExperience = appData.coreTechnology.lipreadingRecog.experience;
const lipreadingRecogApplication = appData.coreTechnology.lipreadingRecog.useCases;

const silentRecogBanner = appData.coreTechnology.silentRecog.banner;   //  静默活体识别
const silentRecogIntroduce = appData.coreTechnology.silentRecog.introduce;
const silentRecogFunciton = appData.coreTechnology.silentRecog.features;
const silentRecogAdvantages = appData.coreTechnology.silentRecog.advantages;
const silentRecogExperience = appData.coreTechnology.silentRecog.experience;
const silentRecogApplication = appData.coreTechnology.silentRecog.useCases;

const similarityRecogBanner = appData.coreTechnology.similarityRecog.banner;   //  相似度识别
const similarityRecogIntroduce = appData.coreTechnology.similarityRecog.introduce;
const similarityRecogFunciton = appData.coreTechnology.similarityRecog.features;
const similarityRecogAdvantages = appData.coreTechnology.similarityRecog.advantages;
const similarityRecogExperience = appData.coreTechnology.similarityRecog.experience;
const similarityRecogApplication = appData.coreTechnology.similarityRecog.useCases;

const striationRecogBanner = appData.coreTechnology.striationRecog.banner;   //  身份证识别
const striationRecogIntroduce = appData.coreTechnology.striationRecog.introduce;
const striationRecogFunciton = appData.coreTechnology.striationRecog.features;
const striationRecogAdvantages = appData.coreTechnology.striationRecog.advantages;
const striationRecogExperience = appData.coreTechnology.striationRecog.experience;
const striationRecogApplication = appData.coreTechnology.striationRecog.useCases;

const expressionRecogBanner = appData.coreTechnology.expressionRecog.banner;   //  表情识别
const expressionRecogIntroduce = appData.coreTechnology.expressionRecog.introduce;
const expressionRecogFunciton = appData.coreTechnology.expressionRecog.features;
const expressionRecogAdvantages = appData.coreTechnology.expressionRecog.advantages;
const expressionRecogExperience = appData.coreTechnology.expressionRecog.experience;
const expressionRecogApplication = appData.coreTechnology.expressionRecog.useCases;


// 接口地址
let apiRoutes = express.Router();
app.use('/api', apiRoutes);

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap, usePostCSS: true})
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? {warnings: false, errors: true}
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    // 这里类似页面这样写请求
    before(app) {
      // 首页
      app.get('/api/banner', (req, res) => {
        res.json({
          status: 0,
          data: banner
        })
      });
      app.get('/api/aboutUs', (req, res) => {
        res.json({
          status: 0,
          data: aboutUs
        })
      });
      app.get('/api/ourProducts', (req, res) => {
        res.json({
          status: 0,
          data: ourProducts
        })
      });
      app.get('/api/ourAdvantages', (req, res) => {
        res.json({
          status: 0,
          data: ourAdvantages
        })
      });
      app.get('/api/ourCases', (req, res) => {
        res.json({
          status: 0,
          data: ourCases
        })
      });
      app.get('/api/contactUs', (req, res) => {
        res.json({
          status: 0,
          data: contactUs
        })
      });
      app.get('/api/copyInfor', (req, res) => {
        res.json({
          status: 0,
          data: copyInfor
        })
      });

      //   facegosmart 页面
      app.get('/api/smartBanner', (req, res) => {
        res.json({
          status: 0,
          data: smartBanner
        })
      });
      app.get('/api/smartIntro', (req, res) => {
        res.json({
          status: 0,
          data: smartIntroduce
        })
      });
      app.get('/api/smartFun', (req, res) => {
        res.json({
          status: 0,
          data: smartFunciton
        })
      });
      app.get('/api/smartAdvan', (req, res) => {
        res.json({
          status: 0,
          data: smartAdvantages
        })
      });
      app.get('/api/smartAppli', (req, res) => {
        res.json({
          status: 0,
          data: smartApplication
        })
      });
      app.get('/api/smartDown', (req, res) => {
        res.json({
          status: 0,
          data: smartDownload
        })
      });
      app.get('/api/smartCon', (req, res) => {
        res.json({
          status: 0,
          data: smartContact
        })
      });

      //   facegoCube 页面
      app.get('/api/cubeBanner', (req, res) => {
        res.json({
          status: 0,
          data: cubeBanner
        })
      });
      app.get('/api/cubeIntro', (req, res) => {
        res.json({
          status: 0,
          data: cubeIntroduce
        })
      });
      app.get('/api/cubeFun', (req, res) => {
        res.json({
          status: 0,
          data: cubeFunciton
        })
      });
      app.get('/api/cubeAdvan', (req, res) => {
        res.json({
          status: 0,
          data: cubeAdvantages
        })
      });
      app.get('/api/cubeAppli', (req, res) => {
        res.json({
          status: 0,
          data: cubeApplication
        })
      });
      app.get('/api/cubeDown', (req, res) => {
        res.json({
          status: 0,
          data: cubeDownload
        })
      });
      app.get('/api/cubeCon', (req, res) => {
        res.json({
          status: 0,
          data: cubeContact
        })
      });

      //   人脸识别引擎页面
      app.get('/api/recoBanner', (req, res) => {
        res.json({
          status: 0,
          data: recoBanner
        })
      });
      app.get('/api/recoIntro', (req, res) => {
        res.json({
          status: 0,
          data: recoIntroduce
        })
      });
      app.get('/api/recoFun', (req, res) => {
        res.json({
          status: 0,
          data: recoFunciton
        })
      });
      app.get('/api/recoAdvan', (req, res) => {
        res.json({
          status: 0,
          data: recoAdvantages
        })
      });
      app.get('/api/recoAppli', (req, res) => {
        res.json({
          status: 0,
          data: recoApplication
        })
      });
      app.get('/api/recoDown', (req, res) => {
        res.json({
          status: 0,
          data: recoDownload
        })
      });
      app.get('/api/recoCon', (req, res) => {
        res.json({
          status: 0,
          data: recoContact
        })
      });

      //   商用SDK 页面
      app.get('/api/sdkBanner', (req, res) => {
        res.json({
          status: 0,
          data: sdkBanner
        })
      });
      app.get('/api/sdkIntro', (req, res) => {
        res.json({
          status: 0,
          data: sdkIntroduce
        })
      });
      app.get('/api/sdkFun', (req, res) => {
        res.json({
          status: 0,
          data: sdkFunciton
        })
      });
      app.get('/api/sdkAdvan', (req, res) => {
        res.json({
          status: 0,
          data: sdkAdvantages
        })
      });
      app.get('/api/sdkAppli', (req, res) => {
        res.json({
          status: 0,
          data: sdkApplication
        })
      });
      app.get('/api/sdkDown', (req, res) => {
        res.json({
          status: 0,
          data: sdkDownload
        })
      });
      app.get('/api/sdkCon', (req, res) => {
        res.json({
          status: 0,
          data: sdkContact
        })
      });

      // 安防
      app.get('/api/secCaseBanner', (req, res) => {
        res.json({
          status: 0,
          data: secCaseBanner
        })
      });
      app.get('/api/secCaseTypical', (req, res) => {
        res.json({
          status: 0,
          data: secCaseTypical
        })
      });
      app.get('/api/secCaseMore', (req, res) => {
        res.json({
          status: 0,
          data: secCaseMore
        })
      });

      //  金融
      app.get('/api/finCaseBanner', (req, res) => {
        res.json({
          status: 0,
          data: finCaseBanner
        })
      });
      app.get('/api/finCaseTypical', (req, res) => {
        res.json({
          status: 0,
          data: finCaseTypical
        })
      });
      app.get('/api/finCaseMore', (req, res) => {
        res.json({
          status: 0,
          data: finCaseMore
        })
      });

      //  其他
      app.get('/api/othCaseBanner', (req, res) => {
        res.json({
          status: 0,
          data: othCaseBanner
        })
      });
      app.get('/api/othCaseTypical', (req, res) => {
        res.json({
          status: 0,
          data: othCaseTypical
        })
      });
      app.get('/api/othCaseMore', (req, res) => {
        res.json({
          status: 0,
          data: othCaseMore
        })
      });

      // 银行卡识别
      app.get('/api/bankCardBanner', (req, res) => {
        res.json({
          status: 0,
          data: bankCardBanner
        })
      });
      app.get('/api/bankCardIntro', (req, res) => {
        res.json({
          status: 0,
          data: bankCardIntroduce
        })
      });
      app.get('/api/bankCardFun', (req, res) => {
        res.json({
          status: 0,
          data: bankCardFunciton
        })
      });
      app.get('/api/bankCardAdvan', (req, res) => {
        res.json({
          status: 0,
          data: bankCardAdvantages
        })
      });
      app.get('/api/bankCardAppli', (req, res) => {
        res.json({
          status: 0,
          data: bankCardApplication
        })
      });
      app.get('/api/bankCardExper', (req, res) => {
        res.json({
          status: 0,
          data: bankCardExperience
        })
      });


      // 身份证识别
      app.get('/api/idCardBanner', (req, res) => {
        res.json({
          status: 0,
          data: idCardBanner
        })
      });
      app.get('/api/idCardIntroduce', (req, res) => {
        res.json({
          status: 0,
          data: idCardIntroduce
        })
      });
      app.get('/api/idCardFun', (req, res) => {
        res.json({
          status: 0,
          data: idCardFunciton
        })
      });
      app.get('/api/idCardAdvan', (req, res) => {
        res.json({
          status: 0,
          data: idCardAdvantages
        })
      });
      app.get('/api/idCardAppli', (req, res) => {
        res.json({
          status: 0,
          data: idCardApplication
        })
      });
      app.get('/api/idCardExper', (req, res) => {
        res.json({
          status: 0,
          data: idCardExperience
        })
      });

      // 动作活体识别
      app.get('/api/actionRecogBanner', (req, res) => {
        res.json({
          status: 0,
          data: actionRecogBanner
        })
      });
      app.get('/api/actionRecogIntro', (req, res) => {
        res.json({
          status: 0,
          data: actionRecogIntroduce
        })
      });
      app.get('/api/actionRecogFun', (req, res) => {
        res.json({
          status: 0,
          data: actionRecogFunciton
        })
      });
      app.get('/api/actionRecogAdvan', (req, res) => {
        res.json({
          status: 0,
          data: actionRecogAdvantages
        })
      });
      app.get('/api/actionRecogAppli', (req, res) => {
        res.json({
          status: 0,
          data: actionRecogApplication
        })
      });
      app.get('/api/actionRecogExper', (req, res) => {
        res.json({
          status: 0,
          data: actionRecogExperience
        })
      });

      // 特征识别
      app.get('/api/characterRecogBanner', (req, res) => {
        res.json({
          status: 0,
          data: characterRecogBanner
        })
      });
      app.get('/api/characterRecogdIntro', (req, res) => {
        res.json({
          status: 0,
          data: characterRecogIntroduce
        })
      });
      app.get('/api/characterRecogFun', (req, res) => {
        res.json({
          status: 0,
          data: characterRecogFunciton
        })
      });
      app.get('/api/characterRecogdAdvan', (req, res) => {
        res.json({
          status: 0,
          data: characterRecogAdvantages
        })
      });
      app.get('/api/characterRecogAppli', (req, res) => {
        res.json({
          status: 0,
          data: characterRecogApplication
        })
      });
      app.get('/api/characterRecogExper', (req, res) => {
        res.json({
          status: 0,
          data: characterRecogExperience
        })
      });

      // 表情识别
      app.get('/api/expressionRecogBanner', (req, res) => {
        res.json({
          status: 0,
          data: expressionRecogBanner
        })
      });
      app.get('/api/expressionRecogIntro', (req, res) => {
        res.json({
          status: 0,
          data: expressionRecogIntroduce
        })
      });
      app.get('/api/expressionRecogFun', (req, res) => {
        res.json({
          status: 0,
          data: expressionRecogFunciton
        })
      });
      app.get('/api/expressionRecogAdvan', (req, res) => {
        res.json({
          status: 0,
          data: expressionRecogAdvantages
        })
      });
      app.get('/api/expressionRecogAppli', (req, res) => {
        res.json({
          status: 0,
          data: expressionRecogApplication
        })
      });
      app.get('/api/expressionRecogExper', (req, res) => {
        res.json({
          status: 0,
          data: expressionRecogExperience
        })
      });

      // 人脸特征识别
      app.get('/api/faceDetRecogBanner', (req, res) => {
        res.json({
          status: 0,
          data: faceDetRecogBanner
        })
      });
      app.get('/api/faceDetRecogIntro', (req, res) => {
        res.json({
          status: 0,
          data: faceDetRecogIntroduce
        })
      });
      app.get('/api/faceDetRecogFun', (req, res) => {
        res.json({
          status: 0,
          data: faceDetRecogFunciton
        })
      });
      app.get('/api/faceDetRecogAdvan', (req, res) => {
        res.json({
          status: 0,
          data: faceDetRecogAdvantages
        })
      });
      app.get('/api/faceDetRecogAppli', (req, res) => {
        res.json({
          status: 0,
          data: faceDetRecogApplication
        })
      });
      app.get('/api/faceDetRecogExper', (req, res) => {
        res.json({
          status: 0,
          data: faceDetRecogExperience
        })
      });

      // 红外活体
      app.get('/api/infraredRecogBanner', (req, res) => {
        res.json({
          status: 0,
          data: infraredRecogBanner
        })
      });
      app.get('/api/infraredRecogIntro', (req, res) => {
        res.json({
          status: 0,
          data: infraredRecogIntroduce
        })
      });
      app.get('/api/infraredRecogFun', (req, res) => {
        res.json({
          status: 0,
          data: infraredRecogFunciton
        })
      });
      app.get('/api/infraredRecogAdvan', (req, res) => {
        res.json({
          status: 0,
          data: infraredRecogAdvantages
        })
      });
      app.get('/api/infraredRecogAppli', (req, res) => {
        res.json({
          status: 0,
          data: infraredRecogApplication
        })
      });
      app.get('/api/infraredRecogExper', (req, res) => {
        res.json({
          status: 0,
          data: infraredRecogExperience
        })
      });

      // 关键点识别
      app.get('/api/keypointRecogBanner', (req, res) => {
        res.json({
          status: 0,
          data: keypointRecogBanner
        })
      });
      app.get('/api/keypointRecogIntro', (req, res) => {
        res.json({
          status: 0,
          data: keypointRecogIntroduce
        })
      });
      app.get('/api/keypointRecogFun', (req, res) => {
        res.json({
          status: 0,
          data: keypointRecogFunciton
        })
      });
      app.get('/api/keypointRecogAdvan', (req, res) => {
        res.json({
          status: 0,
          data: keypointRecogAdvantages
        })
      });
      app.get('/api/keypointRecogAppli', (req, res) => {
        res.json({
          status: 0,
          data: keypointRecogApplication
        })
      });
      app.get('/api/keypointRecogExper', (req, res) => {
        res.json({
          status: 0,
          data: keypointRecogExperience
        })
      });

      // 唇语识别
      app.get('/api/lipreadingRecogBanner', (req, res) => {
        res.json({
          status: 0,
          data: lipreadingRecogBanner
        })
      });
      app.get('/api/lipreadingRecogIntro', (req, res) => {
        res.json({
          status: 0,
          data: lipreadingRecogIntroduce
        })
      });
      app.get('/api/lipreadingRecogFun', (req, res) => {
        res.json({
          status: 0,
          data: lipreadingRecogFunciton
        })
      });
      app.get('/api/lipreadingRecogAdvan', (req, res) => {
        res.json({
          status: 0,
          data: lipreadingRecogAdvantages
        })
      });
      app.get('/api/lipreadingRecogAppli', (req, res) => {
        res.json({
          status: 0,
          data: lipreadingRecogApplication
        })
      });
      app.get('/api/lipreadingRecogExper', (req, res) => {
        res.json({
          status: 0,
          data: lipreadingRecogExperience
        })
      });


      // 静默活体识别
      app.get('/api/silentRecogBanner', (req, res) => {
        res.json({
          status: 0,
          data: silentRecogBanner
        })
      });
      app.get('/api/silentRecogIntro', (req, res) => {
        res.json({
          status: 0,
          data: silentRecogIntroduce
        })
      });
      app.get('/api/silentRecogFun', (req, res) => {
        res.json({
          status: 0,
          data: silentRecogFunciton
        })
      });
      app.get('/api/silentRecogAdvan', (req, res) => {
        res.json({
          status: 0,
          data: silentRecogAdvantages
        })
      });
      app.get('/api/silentRecogAppli', (req, res) => {
        res.json({
          status: 0,
          data: silentRecogApplication
        })
      });
      app.get('/api/silentRecogExper', (req, res) => {
        res.json({
          status: 0,
          data: silentRecogExperience
        })
      });

      // 相似度识别
      app.get('/api/similarityRecogBanner', (req, res) => {
        res.json({
          status: 0,
          data: similarityRecogBanner
        })
      });
      app.get('/api/similarityRecogIntro', (req, res) => {
        res.json({
          status: 0,
          data: similarityRecogIntroduce
        })
      });
      app.get('/api/similarityRecogFun', (req, res) => {
        res.json({
          status: 0,
          data: similarityRecogFunciton
        })
      });
      app.get('/api/similarityRecogAdvan', (req, res) => {
        res.json({
          status: 0,
          data: similarityRecogAdvantages
        })
      });
      app.get('/api/similarityRecogAppli', (req, res) => {
        res.json({
          status: 0,
          data: similarityRecogApplication
        })
      });
      app.get('/api/similarityRecogExper', (req, res) => {
        res.json({
          status: 0,
          data: similarityRecogExperience
        })
      });

      // 人脸去网纹
      app.get('/api/striationRecogBanner', (req, res) => {
        res.json({
          status: 0,
          data: striationRecogBanner
        })
      });
      app.get('/api/striationRecogIntro', (req, res) => {
        res.json({
          status: 0,
          data: striationRecogIntroduce
        })
      });
      app.get('/api/striationRecogFun', (req, res) => {
        res.json({
          status: 0,
          data: striationRecogFunciton
        })
      });
      app.get('/api/striationRecogAdvan', (req, res) => {
        res.json({
          status: 0,
          data: striationRecogAdvantages
        })
      });
      app.get('/api/striationRecogAppli', (req, res) => {
        res.json({
          status: 0,
          data: striationRecogApplication
        })
      });
      app.get('/api/striationRecogExper', (req, res) => {
        res.json({
          status: 0,
          data: striationRecogExperience
        })
      });


    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      favicon: resolve('favicon.ico'),
      title: '云从能力引擎开放平台'
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
