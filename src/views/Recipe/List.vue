<template>
  <div>
    <h1>RecipeList</h1>
    <router-link to="/recipe/add">Add</router-link>
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
            <router-link :to="'/recipe/edit/' + item.id">Edit</router-link>
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
  name: 'RecipeList',
  data () {
    return {
      endpoint: 'recipes/'
    }
  },

  mixins: [crudMixin],

  mounted () {
    this.retrieve()
  }
}
</script>
