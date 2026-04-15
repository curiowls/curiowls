<script setup lang="ts">
defineProps<{
  label: string
  variant?: 'default' | 'accent' | 'muted' | 'gold'
  theme?: 'dark' | 'light'
}>()
</script>

<template>
  <span
    class="inline-block text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full border"
    :class="{
      'bg-dai/10 text-dai-light border-dai/20': (variant === 'accent' || !variant) && theme !== 'light',
      'bg-accent-500/10 text-accent-600 border-accent-500/20': (variant === 'accent' || !variant) && theme === 'light',
      'bg-gold/10 text-gold border-gold/20': variant === 'gold',
      'bg-white/5 text-dark-muted border-white/10': variant === 'muted',
    }"
  >
    {{ label }}
  </span>
</template>
