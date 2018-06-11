<template>
  <div id="app">
    <router-view></router-view>
    <import-com></import-com>
  </div>
</template>

<script>
import NormalHeader from 'components/Header/NormalHeader/NormalHeader'
import ImportCom from 'components/Common/ImportCom/ImportCom'

export default {
  name: 'App',
  components: {
    NormalHeader,
    ImportCom
  }
}
</script>

<style lang="less">
  @import "./static/style/base";
</style>
