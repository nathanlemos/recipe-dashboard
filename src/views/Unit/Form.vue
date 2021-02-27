<template>
  <div class="inner-container">
    <h1 class="h1">
      <strong>{{ isEditing ? 'Update' : 'Create' }}</strong> unit
    </h1>
    <form action="javascript:;" @submit.prevent="submit()">
      <div class="grid">
        <div class="col-12">
          <div class="form-group">
              <label for="">Name:</label>
              <input type="text" placeholder="Name" v-model="model.name">
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
  name: 'UnitForm',
  data () {
    return {
      endpoint: 'units/',
      route: '/unit',
      model: {
        id: null,
        name: ''
      }
    }
  },

  methods: {
    canSubmit () {
      if (!this.model.name || this.model.name.length < 2) {
        return {
          response: {
            messages: ['Name: Ensure this field has at least 2 characters.']
          }
        }
      }

      return { allowed: true }
    }
  },

  mixins: [crudMixin, messageMixin],

  mounted () {
    this.beforeRetrieve()
  }
}
</script>
