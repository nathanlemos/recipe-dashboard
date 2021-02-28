/* eslint-disable prefer-const */
export default {
  methods: {
    showMessage (type, messages) {
      let title = 'Success!'
      let bgColor = '#27ae60'
      let initialTop = 60
      let id = (+new Date()).toString()

      let currentToasts = document.getElementsByClassName('toast')

      if (currentToasts && currentToasts.length) {
        let lastToast = currentToasts[currentToasts.length - 1]
        initialTop = 15 + lastToast.offsetTop + lastToast.offsetHeight
      }

      if (type === 'error') {
        title = 'Error!'
        bgColor = '#e74c3c'
      }

      let el = document.createElement('div')
      el.id = id
      el.classList.add('toast')
      el.classList.add('shadow')
      el.style.backgroundColor = bgColor
      el.style.top = initialTop.toString() + 'px'

      let titleEl = document.createElement('h2')
      titleEl.innerText = title

      let detailsEl = document.createElement('ul')

      messages.forEach(message => {
        let messageEl = document.createElement('li')
        messageEl.innerText = message
        detailsEl.appendChild(messageEl)
      })

      el.appendChild(titleEl)
      el.appendChild(detailsEl)

      document.body.appendChild(el)

      setTimeout(function () {
        document.getElementById(id).remove()
      }, 5000)
    },

    handleResponseErrorPayload (error) {
      let messages = ['An error occured']
      if (error.response) {
        if (typeof error.response === 'object' && error.response.data) {
          if (error.response.data.errors) {
            messages = [error.response.data.errors]
          } else {
            messages = []

            Object.keys(error.response.data).forEach(key => {
              messages.push(key + ' ' + error.response.data[key][0])
            })
          }
        } else if (typeof error.response === 'string') {
          messages = [error.response]
        }
      } else if (error.messages) {
        messages = error.messages
      }

      this.showMessage('error', messages)
    }
  }
}
