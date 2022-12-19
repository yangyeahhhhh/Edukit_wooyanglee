<template>
  <div class="background">
    <div ref="webgl"></div>
  </div>
</template>

<script>
import Three from '../example'

export default {
  components: {},
  mounted() {
    console.log(this.$refs.webgl)
    Three(this.$refs.webgl)
  }
}
</script>

<style scoped>
</style>
