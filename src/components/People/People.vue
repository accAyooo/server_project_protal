<template>
  <div class="people">
    <div class="info" :v-if="userInfo != null">
      id:{{ userInfo.id }} <br>
      name: {{ userInfo.name }} <br>
      isStaff: {{ userInfo.staff }} <br>
      isWriter:  {{ userInfo.writer }}
    </div>
    <div class="btn_fixed" @click="_logout()">退出</div>
  </div>
</template>

<script>
import { getUserFromStorage, logout } from 'service/UserService'
import { SUCCESS_CODE } from 'common/config'

export default {
  data: function () {
    return {
      userInfo: null
    }
  },
  created: function () {
    let user = getUserFromStorage()
    console.log(user)
    if (user == null) {
      this.$router.push('/accounts/login')
    }
    this.userInfo = user
  },
  methods: {
    _logout: function () {
      logout().then((res) => {
        if (res.code === SUCCESS_CODE) {
          this.$router.push('/accounts/login')
        }
      })
    }
  }
}
</script>
