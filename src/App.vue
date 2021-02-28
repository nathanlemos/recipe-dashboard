<template>
  <div :class="getLoaderState() ? 'loader active' : 'loader'">
    <div class="loader-inner">
      <div class="lds-dual-ring"></div>
    </div>
  </div>
  <router-view/>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import jwtMixin from './mixins/jwt'

export default {
  name: 'app',
  methods: {
    ...mapGetters(['getLoaderState']),
    ...mapActions(['setUser']),

    retrieveToken () {
      this.setUser(this.recoveryUser())
      this.setToken(this.recoveryToken())
    }
  },

  mixins: [jwtMixin],

  mounted () {
    this.retrieveToken()
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.loader {
  position: fixed;
  z-index: 2;
  height: 100%;
  width: 100%;
  top: 0;
  display: none;
  transition: all 0.5s ease-in-out;

  &.active {
    display: flex;
  }

  .loader-inner {
    flex: 1;
    padding: 60px;
    display: flex;
    justify-content: flex-end;
  }
}

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 32px;
  height: 32px;
  margin: 8px;
  border-radius: 50%;
  border: 2px solid $secondary;
  border-color: $secondary transparent $secondary transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
