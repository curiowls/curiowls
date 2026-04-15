<script setup lang="ts">
import { resolveComponent, computed } from 'vue'

const props = defineProps<{
  to?: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
  theme?: 'dark' | 'light'
}>()

const NuxtLink = resolveComponent('NuxtLink')

const tag = computed(() => {
  if (props.to) return NuxtLink
  if (props.href) return 'a'
  return 'button'
})

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="inline-flex items-center justify-center gap-2 font-semibold rounded-xl border transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
    :class="[
      sizeClasses[size ?? 'md'],
      theme === 'light'
        ? 'border-light-border text-light-text hover:border-accent-500 hover:text-accent-600'
        : 'border-white/10 text-white hover:border-white/20 hover:bg-white/5',
    ]"
  >
    <slot />
  </component>
</template>
