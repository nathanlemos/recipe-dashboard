import { createStore } from 'vuex'
import STRING from '../strings'

export default createStore({
  state: {
    user: null,
    loaderState: false
  },

  mutations: {
    applySetUser (state, payload) {
      state.user = payload
    },

    applySetLoaderState (state, payload) {
      console.log('chmaou mutation', payload)
      state.loaderState = payload
    }
  },

  actions: {
    setUser ({ commit }, payload) {
      if (payload) {
        localStorage.setItem(STRING.USER_CREDENTIALS, JSON.stringify(payload))
      } else {
        localStorage.removeItem(STRING.USER_CREDENTIALS)
      }

      commit('applySetUser', payload)
    },

    setLoaderState ({ commit }, payload) {
      commit('applySetLoaderState', payload)
    }
  },

  getters: {
    getUser: state => {
      return state.user
    },

    getLoaderState: state => {
      return state.loaderState
    }
  }
})
