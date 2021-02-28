<template>
  <div class="inner-container">
    <h1 class="h1">
      <strong>{{ isEditing ? 'Update' : 'Create' }}</strong> ingredient
    </h1>

    <form action="javascript:;" @submit.prevent="submit()">
      <div class="grid">
        <div class="col-12">
          <div class="form-group">
              <label for="">Name:</label>
              <input type="text" placeholder="Name" v-model="model.name">
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
              <label for="">Article number:</label>
              <input type="text" placeholder="Article number" v-model="model.article_number">
          </div>
        </div>
        <div class="col-4">
          <div class="form-group">
              <label for="">Referencial quantity:</label>
              <input type="text" placeholder="Base quantity" v-model="model.avg_quantity">
          </div>
        </div>
        <div class="col-4">
          <div class="form-group">
              <label for="">Unit:</label>
              <select v-model="model.unit_id">
                <option v-for="unit in unitOptions" :key="unit.value" :value="unit.value">{{unit.label}}</option>
              </select>
          </div>
        </div>
        <div class="col-4">
          <div class="form-group">
              <label for="">Price per referencial quantity:</label>
              <input type="text" placeholder="Price per referencial quantity" v-model="model.cost">
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

export default {
  name: 'IngredientForm',
  data () {
    return {
      endpoint: 'ingredients/',
      route: '/ingredient',
      unitOptions: [],
      model: {
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
        self.beforeRetrieve()
      }).catch(error => this.handleResponseError(error))
    },

    canSubmit () {
      // eslint-disable-next-line prefer-const
      let messages = []

      if (!this.model.name || this.model.name.length < 3) {
        messages.push('Name: Ensure this field has at least 3 characters.')
      }

      if (!this.model.article_number || this.model.article_number.length < 3) {
        messages.push('Article Number: Ensure this field has at least 3 characters.')
      }

      if (!this.model.avg_quantity || isNaN(this.model.avg_quantity)) {
        messages.push('Base quantity: Ensure this value is greater than or equal to 1.')
      }

      if (!this.model.unit_id || isNaN(this.model.unit_id)) {
        messages.push('Unit: Inform the unit of the ingredient.')
      }

      if (!this.model.cost || isNaN(this.model.cost)) {
        messages.push('Price per referencial quantity: Ensure this value is greater than or equal to 0.01.')
      }

      return messages.length ? { response: { messages } } : { allowed: true }
    }
  },

  mixins: [crudMixin, messageMixin],

  mounted () {
    this.fetchUnits()
  }
}
</script>
