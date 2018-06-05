<template>
  <div class="login_page">
    <div class="loginlogo">
      <img class="logo" src="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/zwlogo@3x.png" alt="">
    </div>
    <form-input :formName="formName"/>
  </div>
</template>

<script>
import FormInput from '../Common/Input/Input'
export default {
  data: () => ({
    formName: 'form'
  }),
  components: {
    FormInput
  }
}
</script>

<style lang="less">
  @import "style";
</style>
