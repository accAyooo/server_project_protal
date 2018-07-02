<template>
<div class="small-header">
  <div class="left">
    <router-link to="/"></router-link>
  </div>
  <div class="right">
    <router-link to="/search"></router-link>
    <span class="open-menu" @click="openGuide()"></span>
  </div>
</div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      backUrl: {
        type: String,
        default: ''
      }
    }
  }
</script>
