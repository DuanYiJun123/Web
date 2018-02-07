<template>
  <div class="footer">
    <div class="footer-nav">
      <div class="main-inner">
        <el-row>
          <el-col :span="14">
            <div class="small_logo">
              <img src="/src/assets/public_images/small_logo.png" alt="FaceDNA">
              <p>技术交流：138-8989-8989</p>
              <p>公司地址：重庆市渝北区互联网产业园5栋4-5层</p>
            </div>
            <div class="business_cop">
              <h5>商务合作</h5>
              <p>Business@cloudwalk.cn</p>
              <p>Media@cloudwalk.cn</p>
            </div>
            <div class="hotLine">
              <h5>全国联系热线</h5>
              <h6>400-151-5992</h6>
              <p>周一到周五9:30-18:00(北京时间)</p>
            </div>
          </el-col>
          <el-col :span="10">
            <el-row :gutter="30">
              <el-col :span="8">
                <div class="resource">
                  <h5>资源</h5>
                  <p>接入指南</p>
                  <p>API文档</p>
                  <p>常见问题</p>
                  <div class="attentionUs">
                    <h5>关注我们</h5>
                    <span class="wechat" @mouseenter="showWechat" @mouseleave="hiddenWechat">
                       <img class="wechatIcon" :src="wechat" alt="微信">
                       <span class="wechatCw" v-show="wechatCW"><img src="/src/assets/public_images/wechartCW.jpg"
                                                                      alt="关注微信公众号"></span>
                    </span>
                    <span class="webo" @mouseenter="showWebo" @mouseleave="hiddenWebo">
                    <img class="weboIcon" :src="weibo" alt="微博">
                       <span class="weboCw" v-show="weiboCW"><img src="/src/assets/public_images/weiboCW.jpg" alt="关注微博"></span>
                    </span>

                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="about">
                  <h5>关于</h5>
                  <p>关于云从</p>
                  <p>隐私政策</p>
                  <p>服务协议</p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="friendlyLink">
                  <h5>友情链接</h5>
                  <p>
                    <router-link to="http://www.cloudwalk.cn/index.html">公司官网</router-link>
                  </p>
                  <p>开发论坛</p>
                  <p>联系我们</p>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="footer-copy">
      <div class="main-inner">
        <p>{{copyInfor}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import {getFooterInfor} from '@/api/public'

  export default {
    name: "app-footer",
    data() {
      return {
        copyInfor: "",
        wechatCW: false,
        weiboCW: false,
        weibo:'/src/assets/public_images/webo.png',
        wechat: '/src/assets/public_images/wechat.png'
      }
    },
    created() {

    },
    mounted() {
      this.getFooter();
    },
    methods: {
      showWechat() {
        this.wechatCW=true;
        this.wechat='/src/assets/public_images/wechat_active.png'
      },
      hiddenWechat() {
        this.wechatCW=false;
        this.wechat= '/src/assets/public_images/wechat.png'

      },
      showWebo() {
        this.weiboCW=true;
        this.weibo='/src/assets/public_images/webo_active.png'

      },
      hiddenWebo() {
        this.weiboCW=false;
        this.weibo= '/src/assets/public_images/webo.png'

      },
      getFooter() {
        getFooterInfor().then(res => {
          this.copyInfor = res.data.data.text;
        })
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .footer {
    .footer-nav {
      padding: 70px 0;
      background: #141414;
      & p:hover, & h6:hover {
        color: #da4f4f;
        transition: all 0.4s;
        cursor: pointer;
      }
      .small_logo {
        margin-bottom: 30px;
        & img {
          margin-bottom: 50px;
        }
      }
      p {
        color: #666;
        font-size: 14px;
        line-height: 24px;
      }
      h5 {
        color: #8c8c8c;
        font-size: 20px;
        font-weight: normal;
      }
      h6 {
        color: #8c8c8c;
        font-size: 20px;
      }
      .business_cop {
        margin-bottom: 40px;
        h5 {
          margin-bottom: 20px;
        }
        p {
          padding-left: 30px;
          background: url("/src/assets/public_images/copraticon_email.png") no-repeat left center;
        }
      }
      .hotLine {
        h5 {
          margin-bottom: 16px;
        }
        h6 {
          padding-left: 40px;
          line-height: 40px;
          background: url("/src/assets/public_images/hotLine_icon.png") no-repeat left center;
        }
        p {
          color: #464646;
          font-size: 12px;
        }
      }
      .resource, .about, .friendlyLink {
        h5 {
          margin-bottom: 30px;
        }
        p {
          line-height: 50px;
        }
      }
      .attentionUs {
        margin-top: 60px;
        .wechat {
          margin-right: 20px;
          position: relative;
          width: 48px;
          display: inline-block;
          .wechatCw {
            position: absolute;
            width: 140px;
            top: -44px;
            left: -154px;
            & img {
              width: 100%;
            }
          }
        }
        .webo {
          width: 48px;
          display: inline-block;
          position: relative;
          .weboCw {
            position: absolute;
            top: -44px;
            left: 60px;
            width: 140px;
            & img {
              width: 100%;
            }
          }
        }
      }
    }
    .footer-copy {
      background: #0a0a0a;
      p {
        color: #626262;
        font-size: 14px;
        line-height: 80px;
        text-align: center;
      }

    }

  }

</style>
