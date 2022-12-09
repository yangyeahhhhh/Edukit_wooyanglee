<template>
  <div>
    <div class="separate-body"></div>
    <div ref="webgl"></div>
    <app-sidebar />
    <div ref="webgl"></div>
  </div>
</template>

<script>
import Three from "../example";
import Sidebar from "../components/layout/Sidebar";

export default {
  components: {
    "app-sidebar": Sidebar,
  },
  mounted() {
    console.log(this.$refs.webgl);
    Three(this.$refs.webgl);
  },
};
</script>

<style></style>
