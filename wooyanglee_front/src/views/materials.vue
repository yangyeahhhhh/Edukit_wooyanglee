<template>
  <div>
    <app-sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from '../components/layout/Sidebar'

export default {
  components: {
    'app-sidebar': Sidebar
  }
}
</script>

<style lang="scss" scoped></style>
