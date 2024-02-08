<script setup>
const emit = defineEmit('setColor')

if (2 + 2 === 4)
  emit('setColor', 'green')
else
  emit('setColor', 'red')
</script>
