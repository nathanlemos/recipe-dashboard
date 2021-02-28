<template>
    <div class="card no-select" @click.prevent="click">
        <div class="card-content">
            <div class="card-icon">
                <i class="icon-plus"></i>
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
    border-radius: $borderRadius;
    z-index: 2;
    border: solid 1px $gray2;
    cursor: pointer;

    .card-content {
        font-size: 16px;
        padding: 36px 15px;
        text-align: center;

        .card-icon {
            i {
                font-size: 32px;
                color: $gray2;
            }
            margin-bottom: 15px;
        }

        .card-text {
            color: $gray2;
        }
    }

    &:hover {
        border: solid 1px $primary;

        .card-icon {
            i {
                color: $primary;
            }
        }

        .card-text {
            color: $primary;
        }
    }
}
</style>
