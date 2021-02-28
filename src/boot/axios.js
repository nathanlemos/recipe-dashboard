import axios from 'axios'
import store from '../store'
// import Vue from 'vue'

const axiosConfig = {
  baseURL: 'https://nate-recipes.herokuapp.com/api/',
  timeout: 30000
}

const instance = axios.create(axiosConfig)

instance.interceptors.request.use(config => {
  store._actions.setLoaderState[0](true)
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  store._actions.setLoaderState[0](false)
  return response
}, (error) => {
  store._actions.setLoaderState[0](false)
  return Promise.reject(error)
})

export default instance
