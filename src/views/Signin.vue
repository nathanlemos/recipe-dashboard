<template>
    <div class="inner-container">
      <form action="javascript:;" @submit.prevent="signin()">
      <div class="grid">
        <div class="col-4"></div>
        <div class="col-4">
          <div class="grid">
            <div class="col-12">
              <h1 class="h1">
                <strong>Recipe</strong> manager
              </h1>
            </div>
            <div class="col-12">
              <div class="form-group">
                  <label for="">Usename:</label>
                  <input type="text" placeholder="Username" v-model="username">
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                  <label for="">Password:</label>
                  <input type="password" placeholder="Password" v-model="password">
              </div>
            </div>
            <div class="col-12">
              <button class="btn" type="submit" >Signin</button>
            </div>
            <div class="col-12 text-center">
              <router-link to="/signup">Create new account</router-link>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
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
        this.$router.push({ path: '/dashboard' })
      }).catch(error => this.handleResponseErrorPayload(error))
    }
  },

  mixins: [jwtMixin, messageMixin]
}
</script>
