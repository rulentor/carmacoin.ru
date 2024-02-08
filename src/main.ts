//import { ViteSSG } from 'vite-ssg'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { useCookies } from '@vueuse/integrations/useCookies'

import { routes } from 'vue-router/auto/routes'
import App from './App.vue'
import type { UserModule } from './types'

import PrimeVue from 'primevue/config'
import BadgeDirective from 'primevue/badgedirective'

import './assets/main.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes) => setupLayouts(routes),
})
const app = createApp(App)
app
  .use(router)
  .use(useCookies)
  .use(PrimeVue)
  
  .directive('badge', BadgeDirective)   
  
  .mount('#app')
