<script setup lang="ts">
defineProps<{
  theme?: 'dark' | 'light'
}>()

const year = new Date().getFullYear()

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
]

const expertise = [
  'Product Strategy',
  'UX Design',
  'Design Systems',
  'User Research',
]
</script>

<template>
  <footer
    class="relative border-t"
    :class="[
      theme === 'dark'
        ? 'bg-dark-surface border-dark-border text-dark-muted'
        : 'bg-light-surface border-light-border text-light-muted',
    ]"
  >
    <!-- Gradient top border -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dai/30 to-transparent" />

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand -->
        <div class="space-y-4">
          <AppLogo :theme="theme" size="md" />
          <p class="text-sm leading-relaxed opacity-70">
            Product strategist and designer. 16+ years shaping enterprise experiences across SaaS, cybersecurity, and beyond.
          </p>
        </div>

        <!-- Quick links -->
        <div>
          <h4 class="font-mono text-xs tracking-widest uppercase mb-4 opacity-75">Navigation</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-sm hover:text-accent-500 transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Expertise -->
        <div>
          <h4 class="font-mono text-xs tracking-widest uppercase mb-4 opacity-75">Expertise</h4>
          <ul class="space-y-2">
            <li v-for="skill in expertise" :key="skill" class="text-sm">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h4 class="font-mono text-xs tracking-widest uppercase mb-4 opacity-75">Connect</h4>
          <ul class="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/in/huangqian/"
                target="_blank"
                rel="noopener"
                class="text-sm hover:text-accent-500 transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/curiowls"
                target="_blank"
                rel="noopener"
                class="text-sm hover:text-accent-500 transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://x.com/qianhuang"
                target="_blank"
                rel="noopener"
                class="text-sm hover:text-accent-500 transition-colors"
              >
                X (@qianhuang)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-16 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
        :class="theme === 'dark' ? 'border-dark-border' : 'border-light-border'"
      >
        <p class="text-xs opacity-75">
          &copy; {{ year }} Chelsea Huang. All rights reserved.
        </p>
        <p class="text-xs font-mono opacity-50">
          Open to opportunities
        </p>
      </div>
    </div>
  </footer>
</template>
