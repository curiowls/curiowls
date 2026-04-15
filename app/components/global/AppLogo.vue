<script setup lang="ts">
defineProps<{
  size?: 'sm' | 'md' | 'lg'
  theme?: 'dark' | 'light'
}>()

const sizeMap = {
  sm: { mark: 'h-7 w-7', text: 'text-lg' },
  md: { mark: 'h-9 w-9', text: 'text-xl' },
  lg: { mark: 'h-12 w-12', text: 'text-3xl' },
}
</script>

<template>
  <NuxtLink to="/" class="flex items-center gap-2.5 group">
    <!-- Owl logo mark — gold on dark, dai on light -->
    <img
      :src="theme === 'dark' ? '/images/logo-mark-gold.svg' : '/images/logo-mark-dai.svg'"
      alt="Curiowls"
      :class="sizeMap[size ?? 'md'].mark"
      class="object-contain transition-transform group-hover:scale-105"
    />
    <!-- Wordmark -->
    <span
      class="font-mono font-bold tracking-wider uppercase transition-colors"
      :class="[sizeMap[size ?? 'md'].text, theme === 'dark' ? 'text-dai-light' : 'text-accent-600']"
    >
      Curiowls
    </span>
  </NuxtLink>
</template>
