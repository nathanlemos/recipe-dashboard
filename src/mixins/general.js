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
    }
  }
}
