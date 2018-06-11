<template>
  <div class="form_input">
    <img v-if="iconUrl" v-bind:src="iconUrl" alt="">
    <input :value="value" type="text" v-bind:name="formName" v-bind:placeholder="placeholder"
           ref="input" @input="$emit('input', $event.target.value)">
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
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
</style>
