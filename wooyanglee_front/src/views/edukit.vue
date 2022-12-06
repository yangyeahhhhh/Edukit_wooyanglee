<template>
  <div ref="webgl"></div>
</template>

<script>
import Three from '../example'

export default {
  mounted() {
    console.log(this.$refs.webgl)
    Three(this.$refs.webgl)
  }
}
</script>

<style></style>
