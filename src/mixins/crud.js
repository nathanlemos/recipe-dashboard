import STRING from '../strings'

export default {
  data () {
    return {
      model: {},
      isEditing: false,
      listViewName: '',
      collection: []
    }
  },

  methods: {
    retrieve () {
      console.log('Listou daqui')
      this.axios.get(this.endpoint).then(res => {
        this.collection = res.data
      }).catch(error => this.handleResponseError(error))
    },

    destroy (id) {
      if (confirm(STRING.DELETE_CONFIRMATION_MESSAGE)) {
        this.axios.delete(this.endpoint + id).then(res => {
          this.retrieve()
        }).catch(error => this.handleResponseError(error))
      }
    },

    details (id) {
      this.axios.get(this.endpoint + id).then(response =>
        this.handleDetailsResponse(response)
      ).catch(error =>
        this.handleResponseError(error)
      )
    },

    submit () {
      const request = !this.model.id ? this.axios.post(this.endpoint, this.model) : this.axios.put(this.endpoint + this.model.id, this.model)

      request.then(response =>
        this.handleSubmitResponse(response)
      ).catch(error =>
        this.handleResponseError(error)
      )
    },

    beforeRetrieve () {
      if (this.$route.params && this.$route.params.id) {
        this.details(this.$route.params.id)
        this.isEditing = true
      }
    },

    handleSubmitResponse (response) {
      this.$router.push({ name: this.listViewName })
    },

    handleDetailsResponse (response) {
      this.model = response.data
    },

    handleResponseError (error) {
      console.log('HELPER HANDLE:', error.response)
    }
  }
}
