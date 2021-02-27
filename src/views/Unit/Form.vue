<template>
  <div class="inner-container">
    <h1 class="h1">
      <strong>{{ isEditing ? 'Update' : 'Create' }}</strong> unit
    </h1>
    <form action="javascript:;" @submit.prevent="submit()">
        <div class="form-group">
            <label for="">Name:</label>
            <input type="text" placeholder="Name" v-model="model.name">
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

  mixins: [crudMixin, messageMixin],

  mounted () {
    this.beforeRetrieve()
  }
}
</script>
