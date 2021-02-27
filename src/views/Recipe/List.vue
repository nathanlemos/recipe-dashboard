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
import STRING from '../../strings'
import { handleResponseError } from '../../helpers'

const endpoint = 'recipes/'

export default {
  name: 'RecipeList',
  data () {
    return {
      collection: []
    }
  },

  methods: {
    retrieve () {
      this.axios.get(endpoint).then(res => {
        this.collection = res.data
      }).catch(error => handleResponseError(error))
    },

    destroy (id) {
      if (confirm(STRING.DELETE_CONFIRMATION_MESSAGE)) {
        this.axios.delete(endpoint + id).then(res => {
          this.retrieve()
        }).catch(error => handleResponseError(error))
      }
    }
  },

  mounted () {
    this.retrieve()
  }
}
</script>
