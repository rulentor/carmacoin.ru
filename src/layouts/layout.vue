<template>
  <main :class="containerClass" :style="`background: ${bgColor};`" @click="onWrapperClick">
    <AppTopbar @menu-toggle="onMenuToggle" />
    <div class="layout-sidebar" @click="onSidebarClick">
      <AppMenu :menu="menu" @menuitem-click="onMenuItemClick" />
    </div>
    <div class="layout-main-container">
      <div class="layout-main">
        <router-view @set-color="setBg" />
      </div>
      <AppFooter />
    </div>
    <transition name="layout-mask">
      <div v-if="mobileMenuActive" class="layout-mask p-component-overlay" />
    </transition>
  </main>
</template>
<script setup>
import { computed, onMounted, shallowRef, ref } from 'vue'
//import { useRouter } from 'vue-router'
//import { useNuxtApp } from '#app'
import { useCookies } from '@vueuse/integrations/useCookies'

//definePageMeta({
  //middleware: (stateUser.token) ? false : ['auth'],
//})
const stateuser = useCookies('stateUser') || null
const bgColor = ref('black')
const setBg = (color) => {
  bgColor.value = color
}

const layoutMode = ref('static') // overlay
let staticMenuInactive = false
let overlayMenuActive = false
let mobileMenuActive = ref(false)
let menuClick = false
const isDesktop = () => true
const onWrapperClick = () => {
  if (!menuClick) {
    overlayMenuActive = false
    mobileMenuActive = false
  }
  menuClick = false
}
const onLayoutChange = layoutMode => layoutMode.value = layoutMode
const onMenuItemClick = (event) => {
  if (event.item && !event.item.items) {
    overlayMenuActive = false
    mobileMenuActive = false
  }
}
const onSidebarClick = () => menuClick = true
const onMenuToggle = () => {
  menuClick = true
  if (isDesktop()) {
    switch (layoutMode.value) {
      case 'overlay':
        overlayMenuActive = !!(mobileMenuActive)
        overlayMenuActive = !overlayMenuActive
        mobileMenuActive = false
        break
      default:
        staticMenuInactive = !staticMenuInactive
        break
    }
  }
}
const containerClass = ref(
  {
    'layout-wrapper': true,
    'layout-overlay': false, // useLayoutMode() === 'overlay',
    'layout-static': true, // useLayoutMode() === 'static',
    'layout-static-sidebar-inactive': false, // useStaticMenuInactive() && useLayoutMode() === 'static',
    'layout-overlay-sidebar-active': false, // useOverlayMenuActive && useLayoutMode() === 'overlay',
    'layout-mobile-sidebar-active': false, // useMobileMenuActive(),
    'p-input-filled': true, // $primevue.config.inputStyle === 'filled',
    'p-ripple-disabled': false, // $primevue.config.ripple === false,
    'layout-theme-light': true, // $appState.theme.startsWith('lara') //.startsWith('saga')
  },
)
const menu = shallowRef([
  {
    label: 'Администрирование',
    icon: 'pi pi-fw pi-microsoft',
    items: [
      { label: 'Реестр пользователей', to: '/cp/registry-users' },
      { label: 'Реестр ролей', to: '/cp/registry-roles' },
      { label: 'Реестр данных', to: '/cp/registry-data' },
      // { label: 'Вход в систему', to: '/login' },
    ],
  },
  {
    label: 'Справочники',
    icon: 'pi pi-fw pi-microsoft',
    items: [
      { label: 'Организации', to: '/cp/book-companies' },
      { label: 'Типы Угроз', to: '/cp/book-fw' },
      { label: 'Типы Данных', to: '/cp/book-data' },
    ],
  },

  {
    label: 'Настройки',
    icon: 'pi pi-fw pi-microsoft',
    items: [
      { label: 'Планировщик', to: '/cp/book-data' },
    ],
  },
  /*
        {
          label: 'Интеграции',
		  icon: 'pi pi-fw pi-microsoft',
          items: [

          ]
        },
*/
  {
    label: 'Журнал и логи',
    icon: 'pi pi-fw pi-microsoft',
    items: [
      { label: 'Журнал событий', to: '/cp/book-logs' },
    ],
  },
])
</script>

