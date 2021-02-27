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
      if (!this.id) {
        this.axios.post('units/', this.$data).then(res => {
          this.$router.push({ name: 'unitList' })
        }).catch(err => {
          console.log('error', err.response)
        })
      } else {
        this.axios.put('units/' + this.id, this.$data).then(res => {
          this.$router.push({ name: 'unitList' })
        }).catch(err => {
          console.log('error', err.response)
        })
      }
    },
    details (id) {
      this.axios.get('units/' + id).then(res => {
        this.id = res.data.id
        this.name = res.data.name
      }).catch(err => {
        console.log('error', err.response)
      })
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
