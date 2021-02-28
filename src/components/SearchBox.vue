<template>
    <div class="search-box">
        <input v-model="search" type="text" @keyup="keyup" @keydown="keydown">
    </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      isTypingTimer: null
    }
  },
  methods: {
    keyup () {
      clearTimeout(this.isTypingTimer)
      this.isTypingTimer = setTimeout(this.emitSearch, 500)
    },

    keydown () {
      clearTimeout(this.isTypingTimer)
    },

    emitSearch () {
      this.$emit('search', this.search)
    }
  }
}
</script>

<style lang="scss" scoped>
    .search-box {
      background-color: $gray1;
      padding: 5px;
      border-radius: 4px;

      input {
        font-size: 24px;
        width: 100%;
        border: none;
        background-color: transparent;
      }
    }
</style>
