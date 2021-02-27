<template>
  <div>
    <form action="javascript:;" @submit.prevent="submit()">
        <div>
            <label for="">Name:</label>
            <input type="text" placeholder="Name" v-model="model.name">
        </div>
        <div>
            <label for="">Article number:</label>
            <input type="text" placeholder="Article number" v-model="model.article_number">
        </div>
        <div>
            <label for="">Base quantity:</label>
            <input type="text" placeholder="Base quantity" v-model="model.avg_quantity">
        </div>
        <div>
            <label for="">Unit:</label>
            <select v-model="model.unit_id">
              <option v-for="unit in unitOptions" :key="unit.value" :value="unit.value">{{unit.label}}</option>
            </select>
        </div>
        <div>
            <label for="">Price per base quantity:</label>
            <input type="text" placeholder="Price per base quantity" v-model="model.cost">
        </div>
        <div>
            <button type="submit">{{ isEditing ? 'Save' : 'Create' }}</button>
        </div>
    </form>
  </div>
</template>

<script>
import { handleResponseError } from '../../helpers'

const endpoint = 'ingredients/'

export default {
  name: 'IngredientForm',
  data () {
    return {
      unitOptions: [],
      model: {
        isEditing: false,
        id: null,
        name: '',
        article_number: '',
        avg_quantity: 0,
        cost: 0,
        unit_id: null
      }
    }
  },
  methods: {
    submit () {
      const request = !this.model.id ? this.axios.post(endpoint, this.model) : this.axios.put(endpoint + this.model.id, this.model)

      request.then(res => {
        this.$router.push({ name: 'ingredientList' })
      }).catch(error => handleResponseError(error))
    },
    details (id) {
      this.axios.get(endpoint + id).then(res => {
        this.model = res.data
      }).catch(error => handleResponseError(error))
    },

    fetchUnits () {
      const self = this

      this.axios.get('units/').then(res => {
        const unitOptions = res.data.map(e => {
          return {
            value: e.id,
            label: e.name
          }
        })

        self.unitOptions = unitOptions

        if (self.$route.params && self.$route.params.id) {
          self.details(self.$route.params.id)
          self.isEditing = true
        }
      }).catch(error => handleResponseError(error))
    }
  },

  mounted () {
    this.fetchUnits()
  }
}
</script>
