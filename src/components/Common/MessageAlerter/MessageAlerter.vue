<template>
  <!--弹出框-->
  <div v-if="timer !== null" class="message_alert" ref="message_alerter">{{ message }}</div>
</template>

<script>
export default {
  data: () => ({
    message: '1',
    timer: null
  }),
  created: function () {
    console.log(this)
  },
  methods: {
    messageAlerter: function (mes, time) {
      time = time || 1.5
      if (this.timer !== null) {
        clearTimeout(this.timer)
        this.timer = null
      }
      this.message = mes
      this.timer = setTimeout(function () {
        this.message = ''
        this.timer = null
      }.bind(this), time * 1000)
    }
  }
}
</script>
