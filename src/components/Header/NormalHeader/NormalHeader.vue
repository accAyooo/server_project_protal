<template>
  <div class="header_normal">
    <div class="left">
      <img class="header_icon" src="~static/image/homelogo@2x.png" alt="header">
    </div>
    <div class="right">
      <router-link v-if="user" class="jump_icon login" to="/accounts/people"></router-link>
      <router-link v-else class="jump_icon login" to="/accounts/login"></router-link>
      <router-link v-if="user" class="jump_icon history" to="/accounts/history"></router-link>
      <router-link v-else class="jump_icon history" to="/accounts/login"></router-link>
    </div>
  </div>
</template>

<script>
import { getUserFromStorage } from 'service/UserService'

export default {
  data: function () {
    return {user: null}
  },
  created () {
    this.user = getUserFromStorage()
  },
  methods: {
  }
}
</script>
