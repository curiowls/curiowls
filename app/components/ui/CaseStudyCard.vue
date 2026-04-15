<script setup lang="ts">
defineProps<{
  title: string
  company: string
  description: string
  industry: string
  skills?: string[]
  thumbnail?: string
  slug: string
  theme?: 'dark' | 'light'
}>()
</script>

<template>
  <NuxtLink
    :to="slug.startsWith('/') ? slug : `/work/${slug}`"
    class="group block rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
    :class="[
      theme === 'dark'
        ? 'glass glass-hover hover:shadow-lg hover:shadow-dai/10'
        : 'bg-light-surface border border-light-border hover:border-accent-500/30 hover:shadow-lg hover:shadow-accent-500/5',
    ]"
  >
    <!-- Thumbnail / gradient placeholder -->
    <div class="aspect-[16/9] relative overflow-hidden">
      <img
        v-if="thumbnail"
        :src="thumbnail"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        v-else
        class="w-full h-full"
        :class="theme === 'dark'
          ? 'bg-gradient-to-br from-dai-dark/30 via-dark-surface to-gold-dark/20'
          : 'bg-gradient-to-br from-accent-100 via-accent-50 to-accent-100'"
      />
      <!-- Industry badge overlay -->
      <div class="absolute top-4 left-4">
        <span
          class="text-xs font-mono tracking-widest uppercase px-2 py-1 rounded-full backdrop-blur-sm"
          :class="theme === 'dark'
            ? 'bg-dark-bg/60 text-dai-light border border-dai/20'
            : 'bg-white/80 text-accent-600 border border-accent-500/20'"
        >
          {{ industry }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <p
        class="text-xs font-mono tracking-wider uppercase mb-2"
        :class="theme === 'dark' ? 'text-gold' : 'text-accent-500'"
      >
        {{ company }}
      </p>
      <h3
        class="font-display text-xl font-bold mb-2 transition-colors"
        :class="theme === 'dark'
          ? 'text-white group-hover:text-dai-light'
          : 'text-light-text group-hover:text-accent-600'"
      >
        {{ title }}
      </h3>
      <p
        class="text-sm line-clamp-2"
        :class="theme === 'dark' ? 'text-dark-muted' : 'text-light-muted'"
      >
        {{ description }}
      </p>

      <!-- Skills tags -->
      <div v-if="skills?.length" class="flex flex-wrap gap-2 mt-4">
        <span
          v-for="skill in skills.slice(0, 3)"
          :key="skill"
          class="text-xs px-2 py-0.5 rounded-full"
          :class="theme === 'dark'
            ? 'bg-white/5 text-dark-muted'
            : 'bg-light-bg text-light-muted'"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
