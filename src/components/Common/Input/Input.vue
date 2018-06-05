<template>
  <div class="form_input">
    <!--<img v-if="iconUrl" src="{{iconUrl}}" alt="">-->
    <input type="text" name="{{formName}}" />
    <!--{{rightDiv}}-->
  </div>
</template>

<script>
export default {
  props: ['formName']
}
</script>

<style lang="less" scoped>
  @import "style";
</style>
