<template>
    <div class="fab shadow noselect" @click="click">
        {{ icon }}
    </div>
</template>
<script>
export default {
  props: ['icon'],
  click () {
    this.$emit('click')
  }
}
</script>

<style lang="scss" scoped>
    .fab {
      background: $secondary;
      font-size: 48px;
      position: fixed;
      bottom: 45px;
      right: 45px;
      height: 60px;
      width: 60px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      cursor: pointer;

      &:hover {
        background-color: $primary;
      }
    }
</style>
