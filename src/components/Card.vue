<template>
    <div class="card shadow-hover noselect" @click.prevent="click">
        <div class="card-content">
            {{ title }}
        </div>
        <div class="card-actions">
            <div class="card-action" @click="$emit('navigateTo')">
                Edit
            </div>
            <div class="card-action" @click="$emit('delete')">
                Delete
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

    .card-content {
        font-weight: bold;
        font-size: 16px;
        text-transform: uppercase;
        padding: 15px;
    }

    .card-actions {
        border-top: solid 1px $gray1;
        display: flex;
        flex-direction: row;

        .card-action {
            text-transform: uppercase;
            flex: 1;
            text-align: center;
            padding: 5px;
            color: $gray2;
            font-weight: bold;

            &:first-child {
                border-radius: solid 1px $gray1;
            }

            &:hover{
                cursor: pointer;
                color: white;
                background-color: $primary;
            }
        }
    }
}
</style>
