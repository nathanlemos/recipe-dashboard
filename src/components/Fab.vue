<template>
    <div class="fab shadow no-select sm-only" @click="click">
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
      background: $white;
      font-size: 48px;
      position: fixed;
      bottom: 45px;
      right: 45px;
      height: 60px;
      width: 60px;
      border: solid 1px $secondary;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $secondary;
      cursor: pointer;

      &:hover {
        background-color: $primary;
        color: $white;
      }
    }
</style>
