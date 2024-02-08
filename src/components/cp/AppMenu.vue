<template>
  <div class="layout-menu-container">
    <AppSubmenu :items="menu" class="layout-menu" :root="true" @menuitem-click="onMenuItemClick" />
  </div>
</template>
<script async setup>
import { ref, shallowRef, watch } from 'vue'
const props = defineProps({
  menu: { type: Array, required: false, default: () => ([]) },
})
const menu = shallowRef(props.menu)
const emit = defineEmits(['menuitem-click'])
const onMenuItemClick = (event) => {
  emit('menuitem-click', event)
}
const bannerImage = () => {
  return '' // this.$appState.darkTheme ? 'images/banner-primeblocks-dark.png' : 'images/banner-primeblocks.png';
}
</script>
<style scoped></style>
