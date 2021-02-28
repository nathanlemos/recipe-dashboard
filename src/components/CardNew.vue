<template>
    <div class="card shadow no-select" @click.prevent="click">
        <div class="card-content">
            <div class="card-icon">
                +
            </div>
            <div class="card-text">
                {{ title }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    subtitle: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
    border: solid 1px $gray1;
    border-bottom: 0;
    border-radius: $borderRadius;
    z-index: 2;
    background-color: $primary;
    cursor: pointer;

    .card-content {
        font-size: 16px;
        padding: 15px;
        text-align: center;
        color: $white;

        .card-icon {
            font-size: 24px;
            font-weight: bold;
            color: $white;
        }

        .card-text {
            color: $white;
        }
    }
}
</style>
