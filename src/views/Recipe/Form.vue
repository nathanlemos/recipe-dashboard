<template>
  <div class="inner-container">
    <h1 class="h1">
      <strong>{{ isEditing ? 'Update' : 'Create' }}</strong> recipe
    </h1>
    <form action="javascript:;" @submit.prevent="submit()">
      <div class="grid">
        <div class="col-4">
          <div class="grid">
            <div class="col-12">
              <div class="form-group">
                  <label for="">Name:</label>
                  <input type="text" placeholder="Name" v-model="model.name">
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                  <label for="">Description:</label>
                  <textarea v-model="model.description" cols="30" rows="4"></textarea>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                  <label for="">Total cost:</label>
                  <div class="total-cost">
                    ${{ totalCost }}
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="ingredients-box">
            <div class="grid">
              <div class="col-10">
                <div class="form-group">
                  <label for="">Ingredient:</label>
                  <select v-model="newIngredient.ingredient">
                    <option v-for="ingredient in ingredientOptions" :key="ingredient.value" :value="ingredient">{{ingredient.label}}</option>
                  </select>
                </div>
              </div>
              <div class="col-2">
                <div class="form-group">
                  <label for="">Qt:</label>
                  <input type="text" placeholder="Qt" v-model="newIngredient.quantity">
                </div>
              </div>
              <div class="col-12">
                <button class="btn" type="button" @click="add">Add ingredient</button>
              </div>
              <div class="col-12">
                <!-- Table - start -->
                <table class="table">
                  <thead>
                      <tr>
                      <td>Action</td>
                      <td>Ingredient</td>
                      <td>Cost</td>
                      <td>Quantity</td>
                      <td>Total cost</td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="item in ingredients" :key="item.index">
                      <td>
                          <button type="button" @click="remove(item.index)">remove</button>
                      </td>
                      <td>
                        {{item.name}}
                      </td>
                      <td>
                        <div v-if="item.details && item.details.unit">
                          ${{formatCost(item.details.cost)}} / ({{item.details.avg_quantity}} {{item.details.unit.name}})
                        </div>
                      </td>
                      <td>
                        <div v-if="item.details && item.details.unit">
                          {{item.quantity}} {{item.details.unit.name}}
                        </div>
                      </td>
                      <td>
                        <div v-if="item.details && item.details.unit && item.quantity">
                          ${{formatCost(calculateCost(item))}}
                        </div>
                      </td>
                      </tr>
                      <tr v-if="!ingredients || !ingredients.length">
                        <td colspan="3">
                          No items found
                        </td>
                      </tr>
                  </tbody>
                </table>
                <!-- Table - end -->
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 lg-only">
          <button class="btn" type="submit">{{ isEditing ? 'Update' : 'Create' }}</button>
        </div>
      </div>
      <fab icon="&#x2713;" @click="submit" />
    </form>
  </div>
</template>

<script>
import crudMixin from '../../mixins/crud'
import messageMixin from '../../mixins/message'

const endpoint = 'recipes/'

export default {
  name: 'RecipeForm',
  data () {
    return {
      endpoint: 'recipes/',
      route: '/recipe',
      ingredientOptions: [],
      newIngredient: {
        ingredient: null,
        quantity: 0
      },
      ingredients: [],
      model: {
        id: null,
        name: '',
        description: '',
        ingredients: []
      }
    }
  },
  computed: {
    totalCost () {
      let sum = 0

      this.ingredients.forEach(item => {
        sum += this.calculateCost(item)
      })

      return this.formatCost(sum)
    }
  },
  methods: {
    calculateCost (item) {
      if (item.quantity && item.details) {
        return (item.details.cost / item.details.avg_quantity) * item.quantity
      }

      return 0
    },
    formatCost (value) {
      const val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    submit () {
      this.model.ingredients = this.ingredientsToPayload()

      const canSubmitResponse = this.canSubmit()

      if (!canSubmitResponse.allowed) {
        return this.handleSubmitRequestError(canSubmitResponse)
      }

      const request = !this.model.id ? this.axios.post(endpoint, this.model) : this.axios.put(endpoint + this.model.id, this.model)

      request.then(res => {
        this.showMessage('success', ['Done!'])
        this.$router.push({ path: this.route })
      }).catch(error => this.handleResponseError(error))
    },

    handleDetailsResponse (response) {
      this.model = response.data
      this.ingredients = this.payloadToIngredients(response.data.ingredients)
    },

    add () {
      if (!this.newIngredient.ingredient || !this.newIngredient.quantity) {
        return this.handleSubmitRequestError({
          response: {
            messages: ['Inform the ingredient and a valid quantity']
          }
        })
      }

      const index = this.ingredients.length

      this.ingredients.push({
        index: index,
        id: this.newIngredient.ingredient.value,
        name: this.newIngredient.ingredient.label,
        quantity: this.newIngredient.quantity,
        details: this.newIngredient.ingredient.details
      })

      this.newIngredient.ingredient = null
      this.newIngredient.quantity = 0
    },

    remove (index) {
      this.ingredients = this.ingredients.filter(e => e.index !== index)
    },

    ingredientsToPayload () {
      return this.ingredients.map(e => {
        return {
          id: e.id,
          quantity: e.quantity
        }
      })
    },

    payloadToIngredients (payload) {
      return payload.map((e, i) => {
        return {
          index: i,
          id: e.ingredient_id,
          name: e.name,
          quantity: e.quantity,
          details: e
        }
      })
    },

    fetchIngredients () {
      const self = this

      this.axios.get('ingredients/').then(res => {
        const ingredientOptions = res.data.map(e => {
          return {
            value: e.id,
            label: e.name,
            details: e
          }
        })

        self.ingredientOptions = ingredientOptions

        self.beforeRetrieve()
      }).catch(error => this.handleResponseError(error))
    },

    canSubmit () {
      // eslint-disable-next-line prefer-const
      let messages = []

      if (!this.model.name || this.model.name.length < 3) {
        messages.push('Name: Ensure this field has at least 3 characters.')
      }

      if (!this.model.description || this.model.description.length < 3) {
        messages.push('Description: Ensure this field has at least 3 characters.')
      }

      if (!this.model.ingredients || !this.model.ingredients.length) {
        messages.push('Ingredients: Inform at least 1 ingredient.')
      }

      return messages.length ? { response: { messages } } : { allowed: true }
    }
  },

  mixins: [crudMixin, messageMixin],

  mounted () {
    this.fetchIngredients()
  }
}
</script>
<style lang="scss" scoped>
  .ingredients-box {
    border: solid 1px $gray2;
    padding: 15px;
    border-radius: 4px;
  }

  .total-cost {
    font-size: 28px;
    font-weight: bold;
  }
</style>
