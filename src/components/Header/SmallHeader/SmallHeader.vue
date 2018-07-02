<template>
<div class="small-header">
  <div class="left">
    <router-link @click.stop.prevent class="back" v-bind:to="backUrl"></router-link>
    <span class="name">{{ title }}</span>
  </div>
  <div class="right">
    <router-link class="search" to="/search"></router-link>
    <a class="open-guide" @click="openGuide()"></a>
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
