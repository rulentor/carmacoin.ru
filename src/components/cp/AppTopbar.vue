<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <img alt="Logo" :src="topbarImage()"/>
      <span>Админпанель</span>
    </router-link>
    <button
      :class="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein',
                      leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}"
      class="p-link layout-topbar-menu-button layout-topbar-button"
    >
      <i class="pi pi-ellipsis-v" />
    </button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <button class="p-link layout-topbar-button" @click="logoutUser">
          <i class="pi pi-sign-out" />
          <span>Профиль</span>
        </button>
      </li>
    </ul>
  </div>
</template>
<script async setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCookies } from '@vueuse/integrations/useCookies'

const stateuser = useCookies('stateUser') || null
//const toast = useToast()
const route = useRoute()
const router = useRouter()
const emit = defineEmits(['menu-toggle', 'user-menu-toggle', 'topbar-menu-toggle'])

const onMenuToggle = (event: PointerEvent) => {
  emit('menu-toggle', event)
}
const onTopbarMenuToggle = (event: PointerEvent) => {
  emit('topbar-menu-toggle', event)
}
const topbarImage = (event: PointerEvent) => {
  //return this.$appState.darkTheme ? '/images/3_3.png' : '/images/1_1.png'
  return '/images/1_1.png'
}

const logoutUser = (event: PointerEvent) => {
  console.log('logout')
  stateuser.value = null
  router.push('/login')
  
}

</script>
<style scope>
#topbar-menu{
  transform-origin: center bottom 0px;
  top: 4rem;
  left: 2rem;
  min-width: 83px;
  z-index: 999999999;
  position: fixed;
  background-color: var(--surface-overlay);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08);
}
</style>
