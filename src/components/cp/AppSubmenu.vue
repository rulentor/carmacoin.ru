<template>
  <ul v-if="props.items">
    <template v-for="(item, i) of props.items">
      <li
        v-if="visible(item) && !item.separator"
        :key="item.label || i"
        :class="[{ 'layout-menuitem-category': props.root, 'active-menuitem': activeIndex === i && !item.to && !item.disabled }]"
        role="none"
      >
        <template v-if="props.root">
          <div class="layout-menuitem-root-text">
            {{ item.label }}
          </div>
          <AppSubmenu :items="visible(item) && item.items" @menuitem-click="$emit('menuitem-click', $event)" />
        </template>
        <template v-else>
          <router-link
            v-if="item.to"
            :to="item.to"
            :class="[item.class, 'p-ripple', {'p-disabled': item.disabled}]"
            :style="item.style"
            :target="item.target"
            exact
            role="menuitem"
            @click="onMenuItemClick($event,item,i)"
          >
            <i :class="item.icon" />
            <span>{{ item.label }}</span>
            <i v-if="item.items" class="pi pi-fw pi-angle-down menuitem-toggle-icon" />
            <!--Badge v-if="item.badge" :value="item.badge" /-->
			<i v-if="item.badge" class="pi pi-bell" v-badge="item.badge"></i>
          </router-link>
          <a
            v-if="!item.to"
            :href="item.url || '#'"
            :style="item.style"
            :class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]"
            :target="item.target"
            role="menuitem"
            @click="onMenuItemClick($event, item, i)"
          >
            <i :class="item.icon" />
            <span>{{ item.label }}</span>
            <i v-if="item.items" class="pi pi-fw pi-angle-down menuitem-toggle-icon" />
            <span v-if="item.badge" class="menuitem-badge">{{ item.badge }}</span>
          </a>
          <transition name="layout-submenu-wrapper">
            <AppSubmenu
              v-show="activeIndex === i"
              :items="visible(item) && item.items"
              @menuitem-click="$emit('menuitem-click', $event)"
            />
          </transition>
        </template>
      </li>
      <li v-if="visible(item) && item.separator" :key="'separator' + i" class="p-menu-separator" :style="item.style" role="separator" />
    </template>
  </ul>
</template>
<script async setup>
import { ref, shallowRef, watch } from 'vue'
const props = defineProps({
  items: { type: Array, required: false, default: () => ([]) },
  root: {
    type: Boolean,
    default: () => (false),
  },
})
console.log('props',props)
const activeIndex = ref(null)
const emit = defineEmits(['menuitem-click'])

const onMenuItemClick = (event, item, index) => {
  if (item.disabled) {
    event.preventDefault()
    return
  }

  if (!item.to && !item.url) { event.preventDefault() }
  if (item.command) { item.command({ originalEvent: event, item }) }

  activeIndex.value = index === activeIndex.value ? null : index
  emit('menuitem-click', {
    originalEvent: event,
    item,
  })
}
const visible = (item) => {
  return (typeof item.visible === 'function') ? item.visible() : item.visible !== false
}
</script>
<style scoped></style>
