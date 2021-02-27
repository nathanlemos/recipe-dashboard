<template>
  <div class="inner-container">
    <form action="javascript:;" @submit.prevent="signup()">
      <div class="grid">
        <div class="col-3"></div>
        <div class="col-6">
          <div class="grid">
            <!-- init -->
            <div class="col-12">
              <h1 class="h1">
                <strong>New</strong> account
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
                  <label for="">E-mail:</label>
                  <input type="text" placeholder="E-mail" v-model="email">
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label for="">Password:</label>
                <input type="password" placeholder="Password" v-model="password">
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label for="">Confirm password:</label>
                <input type="password" placeholder="Password" v-model="confirm_password">
              </div>
            </div>
            <div class="col-12">
              <button class="btn" type="submit">Create account</button>
            </div>
            <div class="col-12 text-center">
              <router-link to="/signin">Already have an account?</router-link>
            </div>
            <!-- end -->
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Signup',

  data () {
    return {
      username: '',
      password: '',
      confirm_password: '',
      email: ''
    }
  },

  methods: {
    signup () {
      this.axios.post('auth/register', this.$data).then(res => {
        this.$router.push({ name: 'signin' })
      }).catch(err => {
        console.log('error', err.response)
      })
    }
  }
}
</script>
