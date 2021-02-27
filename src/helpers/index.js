import STRING from '../strings'

export function setToken (self, token) {
  if (token) {
    self.axios.defaults.headers.common.Authorization = 'bearer ' + token
    localStorage.setItem(STRING.JWT_TOKEN, JSON.stringify(token))
  } else {
    delete self.axios.defaults.headers.common.Authorization
    localStorage.removeItem(STRING.JWT_TOKEN)
  }
}

export function recoveryToken () {
  return JSON.parse(localStorage.getItem(STRING.USER_CREDENTIALS))
}

export function recoveryUser () {
  return JSON.parse(localStorage.getItem(STRING.JWT_TOKEN))
}

export function handleResponseError (error) {
  console.log('HELPER HANDLE:', error.response)
}
