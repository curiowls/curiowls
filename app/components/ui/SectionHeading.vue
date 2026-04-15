<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  badge?: string
  alignment?: 'left' | 'center'
  theme?: 'dark' | 'light'
}>()
</script>

<template>
  <div :class="alignment === 'left' ? 'text-left' : 'text-center'" class="mb-16">
    <BadgePill v-if="badge" :label="badge" class="mb-4" />
    <h2
      class="font-display text-4xl lg:text-5xl font-bold tracking-tight"
      :class="theme === 'dark' ? 'text-white' : 'text-light-text'"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="mt-4 text-lg max-w-2xl"
      :class="[
        alignment === 'left' ? '' : 'mx-auto',
        theme === 'dark' ? 'text-dark-muted' : 'text-light-muted',
      ]"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
