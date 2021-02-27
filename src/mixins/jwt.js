import STRING from '../strings'

export default {
  methods: {
    setToken (token) {
      if (token) {
        this.axios.defaults.headers.common.Authorization = 'bearer ' + token
        localStorage.setItem(STRING.JWT_TOKEN, JSON.stringify(token))
      } else {
        delete this.axios.defaults.headers.common.Authorization
        localStorage.removeItem(STRING.JWT_TOKEN)
      }
    },

    recoveryUser () {
      return JSON.parse(localStorage.getItem(STRING.USER_CREDENTIALS))
    },

    recoveryToken () {
      return JSON.parse(localStorage.getItem(STRING.JWT_TOKEN))
    }
  }
}
