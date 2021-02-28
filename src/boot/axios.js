import axios from 'axios'
import store from '../store'
// import Vue from 'vue'

const axiosConfig = {
  baseURL: 'http://127.0.0.1:8000/api/',
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
  return Promise.reject(error.message)
})

export default instance
