<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NormalHeader from 'components/Header/NormalHeader/NormalHeader'

export default {
  name: 'App',
  components: {
    NormalHeader
  }
}
</script>

<style scoped lang="less">
  @import "./static/style/common/index";
</style>
