<template>
  <div>
    <div ref="webgl"></div>
  </div>
</template>

<script>
import Three from '../example'

export default {
  components: {},
  data() {
    return {
      fullPage: false
    }
  },
  mounted() {
    console.log(this.$refs.webgl)
    Three(this.$refs.webgl)
    this.openFullScreenMode()
  },
  methods: {
    // 전체화면 설정
    openFullScreenMode() {
      var docV = document.documentElement
      if (docV.requestFullscreen) docV.requestFullscreen()
      else if (docV.webkitRequestFullscreen)
        // Chrome, Safari (webkit)
        docV.webkitRequestFullscreen()
      else if (docV.mozRequestFullScreen)
        // Firefox
        docV.mozRequestFullScreen()
      else if (docV.msRequestFullscreen)
        // IE or Edge
        docV.msRequestFullscreen()
    }
  }
}
</script>

<style></style>
