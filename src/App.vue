<template>
  <router-view/>
</template>
<script>
import { mapActions } from 'vuex'
import jwtMixin from './mixins/jwt'

export default {
  name: 'app',
  methods: {
    ...mapActions(['setUser']),

    retrieveToken () {
      this.setUser(this.recoveryUser())
      this.setToken(this.recoveryToken())
    }
  },

  mixins: [jwtMixin],

  mounted () {
    this.retrieveToken()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
