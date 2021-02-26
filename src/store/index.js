import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    // Used to manage user data
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
