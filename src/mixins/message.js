/* eslint-disable prefer-const */
export default {
  methods: {
    showMessage (type, messages) {
      let title = 'Success!'
      let bgColor = '#27ae60'
      let initialTop = 60
      let id = (+new Date()).toString()

      let currentToasts = document.getElementsByClassName('toast')

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
      el.style.opacity = 0

      let titleEl = document.createElement('h2')
      titleEl.innerText = title

      let detailsEl = document.createElement('ul')

      if (messages && messages.length) {
        messages.forEach(message => {
          let messageEl = document.createElement('li')
          messageEl.innerText = message
          detailsEl.appendChild(messageEl)
        })
      }

      el.appendChild(titleEl)
      el.appendChild(detailsEl)

      document.body.appendChild(el)

      if (currentToasts && currentToasts.length) {
        let nextTop = 15 + el.offsetHeight

        currentToasts.forEach(toast => {
          if (toast.id !== id) {
            const top = toast.offsetTop + nextTop
            toast.style.top = top.toString() + 'px'
          }
        })
      }

      el.style.opacity = 1

      setTimeout(function () {
        el.style.opacity = 0
        setTimeout(function () {
          el.remove()
        }, 500)
      }, 5000)
    },

    handleResponseErrorPayload (error) {
      let messages = ['An error occured']

      if (error) {
        if (error.response) {
          if (typeof error.response === 'object' && error.response.data) {
            if (error.response.data.errors) {
              messages = [error.response.data.errors]
            } else if (error.response.data.message) {
              messages = [error.response.data.message]
            } else {
              if (typeof error.response.data === 'object') {
                messages = []
                Object.keys(error.response.data).forEach(key => {
                  messages.push(key + ' ' + error.response.data[key][0])
                })
              }
            }
          } else if (typeof error.response === 'string') {
            messages = [error.response]
          }
        } else if (error.messages) {
          messages = error.messages
        } else if (typeof error === 'string') {
          messages = [error]
        }
      }

      this.showMessage('error', messages)
    }
  }
}
