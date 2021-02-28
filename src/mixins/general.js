export default {
  data () {
    return {
      searchText: '',
      collection: []
    }
  },
  computed: {
    filteredCollection () {
      return this.collection.filter(item => {
        return this.searchFilter(item)
      })
    }
  },
  methods: {
    setSearchText (searchText) {
      this.searchText = searchText
    },

    searchFilter (item) {
      const n = item.name.toLowerCase()
      const s = this.searchText.toLowerCase()

      return s.length > 1 ? n.includes(s) : true
    },

    calculateCost (item) {
      if (item.quantity && item.details) {
        return (item.details.cost / item.details.avg_quantity) * item.quantity
      }

      return 0
    },
    formatCost (value) {
      const val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
