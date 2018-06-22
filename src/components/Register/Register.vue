<template>
  <div class="register">
    <div class="loginlogo">
      <img class="logo" src="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/zwlogo@3x.png" alt="">
    </div>
    <common-form>
      <form-input v-model="form.email" form-name="email" placeholder="输入邮箱号" icon-url="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/name@2x.png">
      </form-input>
      <form-input v-model="form.code" form-name="code" placeholder="图片验证码" icon-url="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/imgcode@2x.png">
        <auth-code @click.native.stop.prevent="_generateAuthCode" :timestamp="form.timestamp"></auth-code>
      </form-input>
      <form-input v-model="form.nickName" form-name="nickName" placeholder="输入昵称" icon-url="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/name@2x.png">
      </form-input>
      <form-input v-model="form.password" form-name="password" placeholder="输入密码" icon-url="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/code@2x.png"></form-input>
      <form-input v-model="form.recPassword" form-name="recPassword" placeholder="确认密码" icon-url="http://b-lemon.heiyanimg.com/_res/css/zhangwen/mobile/img/code@2x.png">
      </form-input>
      <input class="submit_btn" type="button" value="注册" @click.stop.prevent="_register(form.email, form.code, form.timestamp, form.nickName, form.password, form.recPassword)">
    </common-form>
    <router-link class="sign_up" to="/accounts/login">已有账户，去登录</router-link>
  </div>
</template>

<script>
import CommonForm from 'components/Common/Form/Form'
import AuthCode from 'components/Common/AuthCode/'
import FormInput from 'components/Common/Input/Input'
import { register } from 'service/UserService'

import { messageAlert } from 'utils/kernel'
import {ERROR_CODE, SUCCESS_CODE} from 'common/config'

export default {
  data () {
    return {
      form: {
        email: '',
        nickName: '',
        code: '',
        password: '',
        recPassword: '',
        timestamp: ''
      }
    }
  },
  created () {
    this._generateAuthCode()
    this._register.bind(this)
  },
  components: {
    CommonForm,
    FormInput,
    AuthCode
  },
  methods: {
    _register: function (email, code, timestamp, nickName, password, recPassword) {
      if (password !== recPassword) {
        messageAlert(this, '两次密码不一致')
        return
      }
      register(code, timestamp, nickName, email, password).then((res) => {
        if (res.code === ERROR_CODE) {
          messageAlert(this, res.message)
          return
        }
        if (res.code === SUCCESS_CODE) {
          this.$router.push('/')
        }
      })
    },
    _generateAuthCode: function (e) {
      this.form.timestamp = new Date().getTime()
    }
  }
}
</script>
