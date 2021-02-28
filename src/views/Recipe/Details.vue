<template>
  <div class="inner-container">
   <div class="grid">
       <div class="col-3"></div>
       <div class="col-6">
          <div class="details-container">
            <div class="main-actions">
              <div>
                <i class="icon-heart"></i>
              </div>
              <div>
                <i class="icon-drawer"></i>
              </div>
              <div>
                <i class="icon-share"></i>
              </div>
            </div>
            <div class="details-container-info">
              <h1 class="h1">
                <strong>{{model.name}}</strong>
              </h1>
              <h3>
                <strong>Total cost:</strong> €{{totalCost}}
              </h3>
              <h2 class="subtitle">
                Ingredientes
              </h2>
              <p v-for="ingredient in model.ingredients" :key="ingredient.id">
                <strong>{{ingredient.quantity}} {{ingredient.unit.name}}</strong> {{ingredient.name}}
              </p>

              <h2 class="subtitle">
                Description
              </h2>
              <p>
                {{ model.description }}
              </p>
            </div>
            <div class="details-container-actions">
              <button class="btn" type="button" @click="document.print()">
                <i class="icon-printer"></i>
              </button>
            </div>
          </div>
       </div>
   </div>
  </div>
</template>

<script>
import crudMixin from '../../mixins/crud'
import generalMixin from '../../mixins/general'

export default {
  name: 'RecipeDetails',
  data () {
    return {
      endpoint: 'recipes/',
      route: '/recipe'
    }
  },
  computed: {
    totalCost () {
      let sum = 0

      if (this.model && this.model.ingredients && this.model.ingredients.length) {
        this.model.ingredients.forEach(item => {
          item = {
            quantity: item.quantity,
            details: {
              cost: item.cost,
              avg_quantity: item.avg_quantity
            }
          }
          sum += this.calculateCost(item)
        })
      }

      return this.formatCost(sum)
    }
  },

  mixins: [crudMixin, generalMixin],

  mounted () {
    this.beforeRetrieve()
  }
}
</script>

<style lang="scss" scoped>
.details-container {
  border: solid 1px $gray2;
  border-radius: 4px;

  .main-actions {
    display: flex;

    div {
      padding: 15px;
    }
  }
  .details-container-info {
    padding: 15px;

    .h1 {
      margin-bottom: 15px;
    }

    h3 {
      margin: 0;
      padding: 0;
      font-size: 16px;
      color: $primary !important;

      strong {
        color: $gray2;
        text-transform: uppercase;
      }
    }

    h2 {
      font-size: 16px;
      border-bottom: solid 1px $gray2;
      padding-bottom: 15px;
      padding-top: 30px;
    }
  }

  .details-container-actions {
    padding: 15px;
    background-color: $secondary;
  }
}
</style>
