<template>
  <img class="auth_code_img" v-bind:src="imgSrc + timestamp" alt="动态验证码">
</template>

<script>
import { SERVER_DOMAIN } from 'common/config'

export default {
  data () {
    return {
      imgSrc: SERVER_DOMAIN + '/auth/code?t='
    }
  },
  props: {
    timestamp: {
      type: Number,
      default: 0
    }
  }
}
</script>
