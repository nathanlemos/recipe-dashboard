import { createStore } from 'vuex'
import STRING from '../strings'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    // Used to manage user data
    applySetUser (state, payload) {
      state.user = payload
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
    }
  },

  getters: {
    getUser: state => {
      return state.user
    }
  }
})
