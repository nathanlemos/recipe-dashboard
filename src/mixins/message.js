export default {
  methods: {
    handleResponseErrorPayload (error) {
      let messages = ['An error occured']

      if (error.response) {
        messages = [error.response]
      } else if (error.messages) {
        messages = error.messages
      }

      console.log('MESSAGE MIXIN:', messages)
    }
  }
}
