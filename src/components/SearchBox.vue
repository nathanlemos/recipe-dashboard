<template>
    <div class="search-box">
        <i class="icon-magnifier"></i>
        <input v-model="search" :placeholder="placeholder || 'Search by name'" type="text" @keyup="keyup" @keydown="keydown">
    </div>
</template>

<script>
export default {
  props: ['placeholder'],
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
      border: solid 1px $gray1;
      background-color: $gray0;
      padding: 8px 5px;
      border-radius: $borderRadius;
      display: flex;

      i {
        margin-left: 5px;
        margin-right: 15px;
      }

      input {
        font-size: 16px;
        width: 100%;
        border: none;
        background-color: transparent;
      }
    }
</style>
