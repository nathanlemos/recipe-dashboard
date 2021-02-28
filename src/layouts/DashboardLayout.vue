<template>
    <div class="navbar">
      <div class="navbar-container">
        <div class="navbar-container-main">
          <div class="sm-only">
            <a href="javascript:;" @click="isShowingMobileMenu = !isShowingMobileMenu">&#9776;</a>
          </div>
          <div :class="isShowingMobileMenu ? 'lg-only main-menu' : 'main-menu'">
            <span class="badge no-select">
              Welcome{{user ? ', '+user.username : ''}}
            </span>
            <router-link class="no-select" to="/recipe">Recipe</router-link>
            <router-link class="no-select" to="/unit">Units</router-link>
            <router-link class="no-select" to="/ingredient">Ingredients</router-link>
          </div>
        </div>
        <div>
            <a class="no-select" href="javascript:;" @click.prevent="logoff">Logout</a>
        </div>
      </div>
    </div>
    <router-view />
</template>

<script>
import { mapActions, mapState } from 'vuex'
import jwtMixin from '../mixins/jwt'

export default {
  name: 'DashboardLayout',

  data () {
    return {
      isShowingMobileMenu: false
    }
  },

  computed: {
    ...mapState(['user'])
  },

  methods: {
    ...mapActions(['setUser']),

    logoff () {
      this.setUser(null)
      this.setToken(null)
      this.$router.push({ name: 'signin' })
    }
  },

  mixins: [jwtMixin]
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  background-color: $primary;
  position: fixed;
  top: 0;

  .navbar-container {
    display: flex;
    justify-content: space-between;

    .navbar-container-main {
      flex: 1;
    }

    .badge, a {
      color: white;
      padding: 15px;
      border-right: solid 1px $primary;
    }

    a {
      background: $secondary;
      display: inline-block;
      text-decoration: none;

      &:hover {
          background-color: $primary;
      }
    }
  }

  @media (max-width: #{$mobile-breakpoint}) {
    .main-menu {
      position: relative;
      span {
        display: none;
      }
      a {
        display: block;
        width: 100%;
        background-color: $primary;
        border-bottom: solid 1px $gray0;

        &:hover {
          background-color: $secondary;
        }
      }
    }
  }
}
</style>
