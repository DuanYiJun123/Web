<template>
  <div class="app-wrapper">
    <div class="main-container">
      <app-navbar></app-navbar>
      <app-main></app-main>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
import { AppMain, AppNavbar ,AppFooter} from '@/views/layout/components'

export default {
  name: 'layout',
  components: {
    AppMain,
    AppNavbar,
    AppFooter
  },
  computed: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;


}
</style>
