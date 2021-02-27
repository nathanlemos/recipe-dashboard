<template>
  <div class="inner-container">
    <h1 class="h1">
      <strong>Units</strong> manager
    </h1>
    <fab icon="&plus;" @click="navigateToAdd" />
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
import messageMixin from '../../mixins/message'

export default {
  name: 'UnitList',
  data () {
    return {
      endpoint: 'units/',
      route: '/unit'
    }
  },

  mixins: [crudMixin, messageMixin],

  mounted () {
    this.retrieve()
  }
}
</script>
