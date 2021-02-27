import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './boot/axios'

import Fab from './components/Fab'

const app = createApp(App).use(store).use(router)
app.config.globalProperties.axios = axios

app.component('Fab', Fab)

app.mount('#app')
