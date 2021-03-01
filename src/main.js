import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './boot/axios'

import Fab from './components/Fab'
import Card from './components/Card'
import AddButton from './components/AddButton'
import SearchBox from './components/SearchBox'
import Breadcrumbs from './components/Breadcrumbs'

const app = createApp(App).use(store).use(router)
app.config.globalProperties.axios = axios

app.component('Fab', Fab)
app.component('Card', Card)
app.component('AddButton', AddButton)
app.component('SearchBox', SearchBox)
app.component('Breadcrumbs', Breadcrumbs)

app.mount('#app')
