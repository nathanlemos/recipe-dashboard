<template>
    <div>
        <a href="javascript:;" @click.prevent="logoff">logoff</a>
    </div>
    <router-view />
</template>
<script>
export default {
  name: 'DashboardLayout',

  methods: {
    logoff () {
      this.$store.commit('setUser', null)
      delete this.axios.defaults.headers.common.Authorization
      localStorage.removeItem('credentials')
      this.$router.push({ name: 'signin' })
    }
  }
}
</script>
