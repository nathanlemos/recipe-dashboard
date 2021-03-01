<template>
  <div class="inner-container">
    <breadcrumbs />

    <h1 class="h1">
      <strong>Ingredients</strong> manager
    </h1>

    <fab icon="&plus;" @click="navigateToAdd" />

    <div class="mb-1">
      <search-box placeholder="Search by name or article number" @search="setSearchText" />
    </div>

    <div class="list-grid-container">
      <div class="grid">
        <div class="col-4">
          <add-button title="Add new ingredient" @click="navigateToAdd" />
        </div>
        <div v-for="item in filteredCollection" :key="item.id" class="col-4">
          <card
            type="Ingredient"
            bgClass="bg-ingredient"
            :title="item.name"
            :subtitle="item.article_number"
            @delete="destroy(item.id)"
            @navigateTo="navigateTo(item.id)"
          />
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
  name: 'IngredientList',
  data () {
    return {
      endpoint: 'ingredients/',
      route: '/ingredient'
    }
  },

  methods: {
    searchFilter (item) {
      const n = item.name.toLowerCase()
      const a = item.article_number ? item.article_number.toLowerCase() : ''
      const s = this.searchText.toLowerCase()

      return s.length > 1 ? (n.includes(s) || a.includes(s)) : true
    }
  },

  mixins: [crudMixin, messageMixin, generalMixin],

  mounted () {
    this.retrieve()
  }
}
</script>
