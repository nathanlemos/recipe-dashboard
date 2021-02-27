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
import { mapActions } from 'vuex'
import jwtMixin from '../mixins/jwt'
import messageMixin from '../mixins/message'

export default {
  name: 'Signin',

  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    ...mapActions(['setUser']),

    signin () {
      this.axios.post('auth/login', this.$data).then(res => {
        this.setUser(res.data.user)
        this.setToken(res.data.token)
        this.$router.push({ name: 'home' })
      }).catch(error => this.handleResponseErrorPayload(error))
    }
  },

  mixins: [jwtMixin, messageMixin]
}
</script>
