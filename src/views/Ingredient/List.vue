<template>
  <div>
    <h1>IngredientList</h1>
    <router-link to="/ingredient/add">Add</router-link>
    <table>
      <thead>
        <tr>
          <td>Action</td>
          <td>Name</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in collection" :key="item.id">
          <td>
            <button type="button" @click="destroy(item.id)">remove</button>
            <router-link :to="'/ingredient/edit/' + item.id">Edit</router-link>
          </td>
          <td>{{item.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import crudMixin from '../../mixins/crud'

export default {
  name: 'IngredientList',
  data () {
    return {
      endpoint: 'ingredients/'
    }
  },

  mixins: [crudMixin],

  mounted () {
    this.retrieve()
  }
}
</script>
