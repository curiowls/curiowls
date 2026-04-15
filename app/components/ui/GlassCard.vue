<script setup lang="ts">
defineProps<{
  padding?: string
  hoverable?: boolean
  as?: string
}>()
</script>

<template>
  <component
    :is="as ?? 'div'"
    class="glass transition-all duration-300"
    :class="[
      padding ?? 'p-6 lg:p-8',
      hoverable !== false && 'glass-hover hover:-translate-y-1 hover:shadow-lg hover:shadow-dai/10 cursor-pointer',
    ]"
  >
    <slot />
  </component>
</template>
