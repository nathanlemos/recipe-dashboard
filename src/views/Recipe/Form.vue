<template>
  <div>
    <form action="javascript:;" @submit.prevent="submit()">
        <div>
            <label for="">Name:</label>
            <input type="text" placeholder="Name" v-model="model.name">
        </div>
        <div>
            <label for="">Description:</label>
            <textarea v-model="model.description" cols="30" rows="10"></textarea>
        </div>
        <div>
            <label for="">Ingredients</label>
            <div>
                <select v-model="newIngredient.ingredient">
                <option v-for="ingredient in ingredientOptions" :key="ingredient.value" :value="ingredient">{{ingredient.label}}</option>
                </select>
                <input type="text" placeholder="Qt" v-model="newIngredient.quantity">
                <button type="button" @click="add">Add</button>
            </div>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                    <td>Action</td>
                    <td>Ingredient</td>
                    <td>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in ingredients" :key="item.index">
                    <td>
                        <button type="button" @click="remove(item.index)">remove</button>
                    </td>
                    <td>{{item.name}}</td>
                    <td>{{item.quantity}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <button type="submit">{{ isEditing ? 'Save' : 'Create' }}</button>
        </div>
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
      listViewName: 'recipeList',
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
  methods: {
    submit () {
      this.model.ingredients = this.ingredientsToPayload()

      const request = !this.model.id ? this.axios.post(endpoint, this.model) : this.axios.put(endpoint + this.model.id, this.model)

      request.then(res => {
        this.$router.push({ name: 'recipeList' })
      }).catch(error => this.handleResponseError(error))
    },

    handleDetailsResponse (response) {
      this.model = response.data
      this.ingredients = this.payloadToIngredients(response.data.ingredients)
    },

    add () {
      const index = this.ingredients.length

      this.ingredients.push({
        index: index,
        id: this.newIngredient.ingredient.value,
        name: this.newIngredient.ingredient.label,
        quantity: this.newIngredient.quantity
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
          quantity: e.quantity

        }
      })
    },

    fetchIngredients () {
      const self = this

      this.axios.get('ingredients/').then(res => {
        const ingredientOptions = res.data.map(e => {
          return {
            value: e.id,
            label: e.name
          }
        })

        self.ingredientOptions = ingredientOptions

        self.beforeRetrieve()
      }).catch(error => this.handleResponseError(error))
    }
  },

  mixins: [crudMixin, messageMixin],

  mounted () {
    this.fetchIngredients()
  }
}
</script>
