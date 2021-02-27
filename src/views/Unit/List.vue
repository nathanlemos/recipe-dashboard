<template>
  <div>
    <h1>UnitList</h1>
    <router-link to="/unit/add">Add</router-link>
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
            <router-link :to="'/unit/edit/' + item.id">Edit</router-link>
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
  name: 'UnitList',
  data () {
    return {
      endpoint: 'units/'
    }
  },

  mixins: [crudMixin],

  mounted () {
    this.retrieve()
  }
}
</script>
