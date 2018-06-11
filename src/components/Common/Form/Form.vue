<template>
  <div class="form">
    <slot></slot>
    <p class="error"></p>
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
