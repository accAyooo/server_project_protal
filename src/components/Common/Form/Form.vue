<template>
  <div class="form">
    <slot></slot>
    <input class="submit_btn" type="text" v-bind:value="btnValue">
  </div>
</template>

<script>
export default {
  props: {
    btnValue: {
      default: '提交',
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
  @import "style";
</style>
