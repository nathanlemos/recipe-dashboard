<template>
  <div>
    <form action="javascript:;" @submit.prevent="submit()">
        <div>
            <label for="">Name:</label>
            <input type="text" placeholder="Name" v-model="name">
        </div>
        <div>
            <button type="submit">{{ isEditing ? 'Save' : 'Create' }}</button>
        </div>
    </form>
  </div>
</template>

<script>
import { handleResponseError } from '../../helpers'

const endpoint = 'units/'

export default {
  name: 'UnitForm',
  data () {
    return {
      isEditing: false,
      id: null,
      name: ''
    }
  },
  methods: {
    submit () {
      const request = !this.id ? this.axios.post(endpoint, this.$data) : this.axios.put(endpoint + this.id, this.$data)

      request.then(res => {
        this.$router.push({ name: 'unitList' })
      }).catch(error => handleResponseError(error))
    },
    details (id) {
      this.axios.get(endpoint + id).then(res => {
        this.id = res.data.id
        this.name = res.data.name
      }).catch(error => handleResponseError(error))
    }
  },

  mounted () {
    if (this.$route.params && this.$route.params.id) {
      this.details(this.$route.params.id)
      this.isEditing = true
    }
  }
}
</script>
