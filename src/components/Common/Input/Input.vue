<template>
  <div class="form_input">
    <img v-if="iconUrl" v-bind:src="iconUrl" alt="">
    <input type="text" v-bind:name="formName">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    formName: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    iconUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
  @import "style";
</style>
