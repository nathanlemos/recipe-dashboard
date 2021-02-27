<template>
  <div>
    <form action="javascript:;" @submit.prevent="submit()">
        <div>
            <label for="">Name:</label>
            <input type="text" placeholder="Name" v-model="model.name">
        </div>
        <div>
            <button type="submit">{{ isEditing ? 'Save' : 'Create' }}</button>
        </div>
    </form>
  </div>
</template>

<script>
import crudMixin from '../../mixins/crud'

export default {
  name: 'UnitForm',
  data () {
    return {
      endpoint: 'units/',
      listViewName: 'unitList',
      model: {
        id: null,
        name: ''
      }
    }
  },

  mixins: [crudMixin],

  mounted () {
    this.beforeRetrieve()
  }
}
</script>
