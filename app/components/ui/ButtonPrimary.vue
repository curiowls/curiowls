<script setup lang="ts">
import { resolveComponent, computed } from 'vue'

const props = defineProps<{
  to?: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'dark' | 'light'
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
    class="inline-flex items-center justify-center gap-2 font-semibold rounded-xl text-white transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
    :class="[
      sizeClasses[size ?? 'md'],
      variant === 'dark'
        ? 'bg-gradient-to-r from-gold to-dai'
        : 'bg-gradient-to-r from-accent-700 to-accent-500',
    ]"
  >
    <slot />
  </component>
</template>
