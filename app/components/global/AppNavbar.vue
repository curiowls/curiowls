<script setup lang="ts">
const props = defineProps<{
  theme?: 'dark' | 'light'
}>()

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
]

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

const isDark = computed(() => props.theme === 'dark')
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isDark
        ? scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
        : scrolled ? 'bg-light-bg shadow-sm border-b border-light-border' : 'bg-light-bg border-b border-light-border',
    ]"
  >
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <AppLogo :theme="theme" size="sm" />

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm font-mono tracking-wide uppercase transition-colors duration-200"
            :class="[
              isDark
                ? 'text-dark-muted hover:text-white'
                : 'text-light-muted hover:text-light-text',
            ]"
            :active-class="isDark ? '!text-dai-light' : '!text-accent-600'"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            href="https://www.linkedin.com/in/huangqian/"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02]"
            :class="[
              isDark
                ? 'bg-dai/10 text-dai-light border border-dai/20 hover:bg-dai/20'
                : 'bg-accent-600 text-white hover:bg-accent-700',
            ]"
          >
            Let's Connect
          </a>
        </div>

        <!-- Mobile hamburger -->
        <button
          class="md:hidden p-2"
          :class="isDark ? 'text-white' : 'text-light-text'"
          @click="mobileOpen = !mobileOpen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!mobileOpen"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileOpen"
          class="md:hidden pb-4 space-y-2"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block py-2 text-sm font-mono tracking-wide uppercase"
            :class="[
              isDark
                ? 'text-dark-muted hover:text-white'
                : 'text-light-muted hover:text-light-text',
            ]"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            href="https://www.linkedin.com/in/huangqian/"
            target="_blank"
            rel="noopener"
            class="block py-2 text-sm font-semibold"
            :class="isDark ? 'text-dai-light' : 'text-accent-600'"
          >
            Let's Connect
          </a>
        </div>
      </Transition>
    </nav>
  </header>
</template>
