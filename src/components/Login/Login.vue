<template>
  <div class="login_page">
    <div class="loginlogo">
      <img class="logo" src="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/zwlogo@3x.png" alt="">
    </div>
    <common-form>
      <form-input v-model="form.email" form-name="email" placeholder="输入邮箱号" icon-url="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/name@2x.png">
      </form-input>
      <form-input v-model="form.code" form-name="code" placeholder="图片验证码" icon-url="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/imgcode@2x.png">
        <auth-code @click.native.stop.prevent="_generateAuthCode" :timestamp="form.timestamp"></auth-code>
      </form-input>
      <form-input v-model="form.password" form-name="password" placeholder="输入密码" icon-url="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/code@2x.png">
      </form-input>
      <input class="submit_btn" type="button" value="登录" @click.stop.prevent="_login(form.code, form.timestamp, form.email, form.password)">
    </common-form>
    <router-link class="sign_up" to="/accounts/register">注册</router-link>
  </div>
</template>

<script>
import FormInput from 'components/Common/Input/Input'
import CommonForm from 'components/Common/Form/Form'
import AuthCode from 'components/Common/AuthCode/'
import { login } from 'service/UserService'
import { SUCCESS_CODE } from 'common/config'
import { messageAlert } from 'utils/kernel'

export default {
  data () {
    return {
      form: {
        code: '',
        timestamp: '',
        email: '',
        password: ''
      }
    }
  },
  created () {
    this._generateAuthCode()
  },
  methods: {
    _login: function (code, timestamp, email, password) {
      login(code, timestamp, email, password).then((res) => {
        if (res.code === SUCCESS_CODE) {
          this.$router.push('/accounts/people')
        } else {
          messageAlert(this, res.message)
        }
      })
    },
    _generateAuthCode: function (e) {
      this.form.timestamp = new Date().getTime()
    }
  },
  components: {
    FormInput,
    CommonForm,
    AuthCode
  }
}
</script>
