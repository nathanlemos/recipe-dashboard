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
              <label for="">Base quantity:</label>
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
              <label for="">Price per base quantity:</label>
              <input type="text" placeholder="Price per base quantity" v-model="model.cost">
          </div>
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
    }
  },

  mixins: [crudMixin, messageMixin],

  mounted () {
    this.fetchUnits()
  }
}
</script>
