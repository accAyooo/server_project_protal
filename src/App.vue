<template>
  <div id="app">
    <router-view></router-view>
    <message-alerter ref="alerter"></message-alerter>
  </div>
</template>

<script>
import NormalHeader from 'components/Header/NormalHeader/NormalHeader'
import MessageAlerter from 'components/Common/MessageAlerter/MessageAlerter'

export default {
  name: 'App',
  data: () => ({
  }),
  methods: {
    messageAlerter: function (msg) {
      this.$refs.alerter.messageAlerter(msg)
    }
  },
  components: {
    NormalHeader,
    MessageAlerter
  }
}
</script>

<style lang="less">
  @import "./static/style/base";
</style>
