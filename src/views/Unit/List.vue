<template>
  <div class="inner-container">
    <h1 class="h1">
      <strong>Units</strong> manager
    </h1>
    <fab icon="&plus;" @click="navigateToAdd" />
    <div class="list-grid-container">
      <div class="grid">
        <div class="col-4">
          <card-new title="Add new unit" @click="navigateToAdd" />
        </div>
        <div v-for="item in collection" :key="item.id" class="col-4">
          <card :title="item.name" @delete="destroy(item.id)" @navigateTo="navigateTo(item.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../../components/Card.vue'
import crudMixin from '../../mixins/crud'
import messageMixin from '../../mixins/message'

export default {
  components: { Card },
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
