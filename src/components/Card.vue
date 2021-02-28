<template>
    <div class="card shadow-hover no-select" @click.prevent="click" :class="bgClass">
        <div class="card-inner">
            <div class="card-actions">
                <div v-if="showDetails" class="card-action" @click="$emit('navigateToDetails')">
                    <i class="icon-list"></i>
                </div>
                <div class="card-action" @click="$emit('navigateTo')">
                    <i class="icon-note"></i>
                </div>
                <div class="card-action" @click="$emit('delete')">
                    <i class="icon-trash"></i>
                </div>
            </div>
            <div class="card-content">
                <div class="type">{{ type || '' }}</div>
                <span class="title">{{ title }}</span>
                <span class="subtitle">{{ subtitle || ' ' }}</span>
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
    },
    type: {
      type: String
    },
    bgClass: {
      type: String
    },
    showDetails: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
    border: solid 1px $gray1;
    border-radius: $borderRadius;
    z-index: 2;

    .card-inner {
        background-color: rgba(255, 255, 255, 0.5);

        .card-content {
            padding: 15px;
            background-image: linear-gradient(to top, white , transparent);
            border-radius: $borderRadius;

            span {
                display: block;
            }

            .type {
                color: $primary;
                font-weight: 700;
                font-size: 14px;
                margin-bottom: 3px;
            }

            .title {
                font-weight: bold;
                font-size: 24px;
                text-transform: uppercase;
                margin-bottom: 25px;
                color: $black;
            }

            .subtitle {
                font-size: 12px;
                color: $primary;
            }
        }

        .card-actions {
            display: flex;
            flex-direction: row;
            top: 1;

            .card-action {
                color: $gray2;
                height: 40px;
                width: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;

                i {
                    color: $gray4;
                    cursor: pointer;

                    &:hover{
                        color: $primary;
                    }
                }

            }
        }
    }
}
</style>
