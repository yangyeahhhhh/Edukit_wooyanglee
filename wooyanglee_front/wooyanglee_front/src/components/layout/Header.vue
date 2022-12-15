<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="light" style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">
      <b-navbar-brand href="/"><img src="~@/assets/images/logo.png" width="160px" height="36px" /></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav v-if="isLoggedin" class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ tokenUserName }}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="onClick('/auth/logout')">Log Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedin() {
      let login = false
      if (this.$store.getters.TokenUser && this.$store.getters.TokenUser.id > 0) {
        login = true
      }

      return login
    },
    tokenUserName() {
      return this.$store.getters.TokenUser && this.$store.getters.TokenUser.name
    }
  },
  methods: {
    onClick(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
.navbar {
  background: #ffffff;
}
</style>
