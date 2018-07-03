<template>
<div class="guide" v-if="isShow">
  <div class="guide-content">
    <nav class="guide-nav">
      <router-link to="/" class="guide-nav-a">
        <i class="icon icon-home"></i>
        <span class="guide-nav-h">首页</span>
      </router-link>
      <router-link to="/accounts/people" class="guide-nav-a">
        <i class="icon icon-user"></i>
        <span class="guide-nav-h">账户</span>
      </router-link>
    </nav>
    <div class="guide-footer">
    </div>
  </div>
  <div class="close-guide"></div>
</div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  }
}
</script>
