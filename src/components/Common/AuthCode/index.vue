<template>
  <img v-bind:src="imgSrc" alt="动态验证码">
</template>

<script>
import { SERVER_DOMAIN } from '../../../common/config'

export default {
  data () {
    return {
      imgSrc: SERVER_DOMAIN + '/auth/code?t=' + this.props.timestamp
    }
  },
  props: {
    timestamp: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>

</style>
