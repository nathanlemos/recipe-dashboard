<template>
  <div class="inner-container">
    <h1 class="h1">
      <strong>Units</strong> manager
    </h1>
    <fab icon="&plus;" @click="navigateToAdd" />
    <div class="mb-1">
      <search-box @search="setSearchText" />
    </div>
    <div class="list-grid-container">
      <div class="grid">
        <div class="col-4">
          <card-new title="Add new unit" @click="navigateToAdd" />
        </div>
        <div v-for="item in filteredCollection" :key="item.id" class="col-4">
          <card :title="item.name" @delete="destroy(item.id)" @navigateTo="navigateTo(item.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import crudMixin from '../../mixins/crud'
import messageMixin from '../../mixins/message'
import generalMixin from '../../mixins/general'

export default {
  name: 'UnitList',
  data () {
    return {
      endpoint: 'units/',
      route: '/unit'
    }
  },

  mixins: [crudMixin, messageMixin, generalMixin],

  mounted () {
    this.retrieve()
  }
}
</script>
