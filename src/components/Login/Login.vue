<template>
  <div class="login_page">
    <div class="loginlogo">
      <img class="logo" src="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/zwlogo@3x.png" alt="">
    </div>
    <common-form btn-value="登录">
      <form-input form-name="email" placeholder="输入邮箱号" icon-url="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/name@2x.png">
      </form-input>
      <form-input form-name="code" placeholder="图片验证码" icon-url="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/imgcode@2x.png">
      </form-input>
      <form-input form-name="password" placeholder="输入密码" icon-url="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/code@2x.png">
      </form-input>
    </common-form>
  </div>
</template>

<script>
import FormInput from 'components/Common/Input/Input'
import CommonForm from 'components/Common/Form/Form'

export default {
  data: () => ({
    formName: 'form'
  }),
  components: {
    FormInput,
    CommonForm
  }
}
</script>

<style lang="less">
  @import "style";
</style>
