import { createApp } from 'vue'

import App from '@/components/app.vue'

import router from '@/router'

import '@/sass/styles.sass'
import 'flowbite'

const app = createApp(App)

app.use(router)

app.mount('#app')
