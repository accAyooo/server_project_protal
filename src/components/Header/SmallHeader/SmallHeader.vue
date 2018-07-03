<template>
<div class="small-header">
  <div class="left">
    <router-link v-if="backUrl !== ''" class="back" v-bind:to="backUrl"></router-link>
    <a class="back" @click="$router.go(-1)" v-else></a>
    <span class="name">{{ title }}</span>
  </div>
  <div class="right">
    <router-link class="search" to="/search"></router-link>
    <a class="open-guide" @click="switchGuide()"></a>
  </div>
  <guide-nav :isShow="isGuideNavShow"></guide-nav>
</div>
</template>

<script>
import GuideNav from 'components/Header/GuideNav/GuideNav'

export default {
  components: {
    GuideNav
  },
  data () {
    return {
      isGuideNavShow: false
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    backUrl: {
      type: String,
      default: ''
    }
  },
  methods: {
    switchGuide: function () {
      this.isGuideNavShow = !this.isGuideNavShow
    }
  }
}
</script>
