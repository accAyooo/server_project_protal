<template>
  <div class="login_page">
    <div class="loginlogo">
      <img class="logo" src="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/zwlogo@3x.png" alt="">
    </div>
    <common-form>
      <form-input v-model="form.email" form-name="email" placeholder="输入邮箱号" icon-url="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/name@2x.png">
      </form-input>
      <form-input v-model="form.code" form-name="code" placeholder="图片验证码" icon-url="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/imgcode@2x.png">
      </form-input>
      <form-input v-model="form.password" form-name="password" placeholder="输入密码" icon-url="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/code@2x.png">
      </form-input>
      <input class="submit_btn" type="button" value="登录" @click.stop.prevent="login(form.email, form.code, form.password)">
    </common-form>
    <router-link class="sign_up" to="/accounts/register">注册</router-link>
  </div>
</template>

<script>
import FormInput from 'components/Common/Input/Input'
import CommonForm from 'components/Common/Form/Form'

export default {
  data () {
    return {
      form: {
        email: '',
        code: '',
        password: ''
      }
    }
  },
  created () {
  },
  methods: {
    login: (email, code, password) => {
    }
  },
  components: {
    FormInput,
    CommonForm
  }
}
</script>

<style lang="less">
  @import "style";
</style>
