<template>
    <form action="javascript:;" @submit.prevent="signup()">
        <div>
            <label for="">Usename:</label>
            <input type="text" placeholder="Username" v-model="username">
        </div>
        <div>
            <label for="">E-mail:</label>
            <input type="text" placeholder="E-mail" v-model="email">
        </div>
        <div>
            <label for="">Password:</label>
            <input type="text" placeholder="Password" v-model="password">
        </div>
        <div>
            <label for="">Confirm password:</label>
            <input type="text" placeholder="Password" v-model="confirm_password">
        </div>
        <div>
            <button type="submit">Create account</button>
        </div>
    </form>
</template>

<script>
export default {
  name: 'Signup',

  data () {
    return {
      username: 'Nathan',
      password: 'batata',
      confirm_password: 'batata',
      email: 'nathanlemos.ec@gmail.com'
    }
  },

  methods: {
    signup () {
      this.axios.post('auth/register', this.$data).then(res => {
        alert(res)
      }).catch(err => {
        console.log('error', err.response)
      })
    }
  }
}
</script>
