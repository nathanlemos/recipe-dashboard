import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './boot/axios'

import Fab from './components/Fab'
import Card from './components/Card'
import CardNew from './components/CardNew'

const app = createApp(App).use(store).use(router)
app.config.globalProperties.axios = axios

app.component('Fab', Fab)
app.component('Card', Card)
app.component('CardNew', CardNew)

app.mount('#app')
