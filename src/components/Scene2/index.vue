<template>
  <div class="view view-first" v-show="pic">
    <img :src="pic" alt="图片列表"/>
    <div class="mask">
      <h4>{{title}}</h4>
      <p>{{detail}}</p>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: "index",
    props: {
      pic: {
        type: String
      },
      title: {
        type: String
      },
      detail: {
        type: String
      }
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .view {
    width: 100%;
    height: auto;
    display: block;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
  }
.view-first{
  overflow: hidden;
}
  .view .mask, .view .content {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
  }

  .view img {
    width: 100%;
    display: block;
    position: relative;
  }

  .view h4 {
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    position: relative;
    font-weight: 500;
    font-size: 20px;
    padding: 14px 0;
    background: rgba(218, 79, 79, 0.6);
    margin: 32px 0 0 0;
  }

  .view p {
    font-size: 14px;
    line-height: 24px;
    position: relative;
    color: #f0f0f0;
    padding: 14px 20px 20px;
    text-align: center;
  }

  .view-first img {
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }

  .view-first .mask {
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    opacity: 0;
    background-color: rgba(60, 60, 60, 0.7);
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .view-first h4 {
    -webkit-transform: translateY(200px);
    -moz-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    transform: translateY(200px);
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    opacity: 0;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .view-first p {
    -webkit-transform: translateY(100px);
    -moz-transform: translateY(100px);
    -o-transform: translateY(100px);
    -ms-transform: translateY(100px);
    transform: translateY(100px);
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    opacity: 0;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }

  .view-first:hover img {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    -ms-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  .view-first:hover .mask {
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: alpha(opacity=100);
    opacity: 1;
  }

  .view-first:hover h4,
  .view-first:hover p {
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: alpha(opacity=100);
    opacity: 1;
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -o-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
  }

  .view-first:hover p {
    -webkit-transition-delay: 0.1s;
    -moz-transition-delay: 0.1s;
    -o-transition-delay: 0.1s;
    transition-delay: 0.1s;
  }


</style>
