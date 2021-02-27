<template>
    <div>
        <router-link to="/dashboard">Home</router-link>
        <a href="javascript:;" @click.prevent="logoff">logoff</a>
    </div>
    <router-view />
</template>

<script>
import { mapActions } from 'vuex'
import jwtMixin from '../mixins/jwt'

export default {
  name: 'DashboardLayout',

  methods: {
    ...mapActions(['setUser']),

    logoff () {
      this.setUser(null)
      this.setToken(null)
      this.$router.push({ name: 'signin' })
    }
  },

  mixins: [jwtMixin]
}
</script>
