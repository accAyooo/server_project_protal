<template>
  <div class="people">
    <div class="info" :v-if="userInfo != null">
      id:{{ userInfo.id }} <br>
      name: {{ userInfo.name }} <br>
      isStaff: {{ userInfo.staff }} <br>
      isWriter:  {{ userInfo.writer }}
    </div>
    <block-nav :list="peopleNavList">
    </block-nav>
    <div class="btn_fixed" @click="_logout()">退出</div>
  </div>
</template>

<script>
import { getUserFromStorage, logout } from 'service/UserService'
import { SUCCESS_CODE } from 'common/config'
import BlockNav from 'components/Common/BlockNav/BlockNav'

export default {
  data: function () {
    return {
      userInfo: null,
      peopleNavList: [
        {
          id: 1,
          name: '作家中心',
          hasMessage: false,
          href: '/accounts/author',
          imgUrl: require('static/image/book.png')
        }
      ]
    }
  },
  components: {
    BlockNav
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
