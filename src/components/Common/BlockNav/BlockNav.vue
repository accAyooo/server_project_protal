<template>
<div class="block-nav">
<ul>
  <li v-for="item in list" v-bind:key="item.id">
    <router-link :to="item.href">
      <img v-bind:src="item.imgUrl" alt="">
      <span v-if="item.hasMessage" class="notice-span"></span>
      {{item.name}}
    </router-link>
  </li>
</ul>
</div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
