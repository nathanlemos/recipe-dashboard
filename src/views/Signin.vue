<template>
    <form action="javascript:;" @submit.prevent="signin()">
        <div>
            <label for="">Usename:</label>
            <input type="text" placeholder="Username" v-model="username">
        </div>
        <div>
            <label for="">Password:</label>
            <input type="text" placeholder="Password" v-model="password">
        </div>
        <div>
            <button type="submit" >Signin</button>
        </div>
        <div>
          <router-link to="/signup">Create new account</router-link>
        </div>
    </form>
</template>

<script>
export default {
  name: 'Signin',

  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    signin () {
      this.axios.post('auth/login', this.$data).then(res => {
        this.$store.commit('setUser', res.data.user)
        this.axios.defaults.headers.common.Authorization = 'bearer ' + res.data.token
        localStorage.setItem('credentials', JSON.stringify(res.data))
        this.$router.push({ name: 'home' })
      }).catch(err => {
        console.log('error', err.response)
      })
    }
  }
}
</script>
