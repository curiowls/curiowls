<script setup lang="ts">
useSeoMeta({
  title: 'Work — Chelsea Huang',
  description: 'Products designed and built from concept to launch, plus case studies from 16+ years of B2B product strategy and design.',
})

const { data: caseStudies } = await useAsyncData('work', () =>
  queryCollection('work')
    .where('draft', '=', false)
    .order('order', 'ASC')
    .all()
)

const industries = computed(() => {
  if (!caseStudies.value) return []
  const set = new Set(caseStudies.value.map(cs => cs.industry))
  return ['All', ...Array.from(set)]
})

const activeFilter = ref('All')

const filtered = computed(() => {
  if (!caseStudies.value) return []
  if (activeFilter.value === 'All') return caseStudies.value
  return caseStudies.value.filter(cs => cs.industry === activeFilter.value)
})

const workAnchors = [
  { label: 'Consumer Apps', href: '#consumer-apps' },
  { label: 'Enterprise/B2B Systems', href: '#enterprise-b2b-systems' },
]

function scrollToWorkAnchor(href: string) {
  const target = document.querySelector(href)
  if (!target) return

  target.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start',
  })
  history.pushState(null, '', href)
}

// ── Carousel state ──
const projects = [
  {
    name: 'MeerKatta',
    tagline: 'built to capture perishable thoughts',
    description: 'Merely a click from idea to post. Speak into any text field — MeerKatta transcribes, adapts tone to the active app, and drops polished text at your cursor. Record video — it handles trim, captions, resize, and multi-platform export. All processing runs locally on your Mac. No prompting, no cloud uploads.',
    stack: ['Voice-to-Text', 'Video Processing', 'On-Device AI', 'macOS', 'iOS', 'MCP', 'Gamification'],
    gradient: 'from-amber-50 via-orange-50 to-yellow-50',
    visual: 'image',
    image: '/images/work/meerkatta-thumb.png',
    links: [
      { label: 'Live Site', href: 'https://meerkatta.com', icon: 'lucide:external-link', primary: true },
      { label: 'GitHub', href: 'https://github.com/curiowls/meerkatta', icon: 'lucide:github' },
    ],
  },
  {
    name: 'MojiMachi',
    kanji: '文字街',
    tagline: 'Japanese Typing Game',
    description: 'A foggy street, a blinking cursor. Type Japanese words to clear fog, reveal shops, and build a living street — language learning disguised as cozy world-building. Nine shops across three districts, each teaching vocabulary in context. No tutorials, no lesson plans — just discovery.',
    stack: ['Education', 'Idol Game', 'Vite', 'JavaScript'],
    gradient: 'from-[#c0392b]/10 via-[#f5f0e8] to-[#2d5a27]/10',
    visual: 'image',
    image: '/images/work/mojimachi-thumb.png',
    imageFill: true,
    links: [
      { label: 'Live Site', href: 'https://mojimachi.com', icon: 'lucide:external-link', primary: true },
      { label: 'GitHub', href: 'https://github.com/curiowls/mojimachigame', icon: 'lucide:github' },
    ],
  },
  {
    name: 'Sacabamba',
    tagline: 'AI College Counselor',
    description: 'An AI counselor skill for OpenClaw and Claude that guides high school students through the full 4-year college application journey via chat — from framework-based interest exploration to strategy, timelines, essay feedback, and school research. Delivered conversationally through Telegram, Discord, and more.',
    stack: ['AI Skill', 'OpenClaw', 'Claude', 'Chatbot', 'Education', 'Self-exploration'],
    gradient: 'from-emerald-50 via-teal-50 to-cyan-50',
    visual: 'image',
    image: '/images/work/sacabamba-logo.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/curiowls/Sacabamba', icon: 'lucide:github', primary: true },
    ],
  },
]

const carouselRef = ref<HTMLElement>()
const activeIndex = ref(0)

function scrollToCard(index: number) {
  if (!carouselRef.value) return
  const cards = carouselRef.value.querySelectorAll('.carousel-card')
  if (cards[index]) {
    cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    activeIndex.value = index
  }
}

function onCarouselScroll() {
  if (!carouselRef.value) return
  const cards = carouselRef.value.querySelectorAll('.carousel-card')
  const containerRect = carouselRef.value.getBoundingClientRect()
  const containerCenter = containerRect.left + containerRect.width / 2

  let closest = 0
  let minDist = Infinity
  cards.forEach((card, i) => {
    const rect = card.getBoundingClientRect()
    const cardCenter = rect.left + rect.width / 2
    const dist = Math.abs(cardCenter - containerCenter)
    if (dist < minDist) {
      minDist = dist
      closest = i
    }
  })
  activeIndex.value = closest
}
</script>

<template>
  <div class="pt-24 pb-16">
    <!-- Hero -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="mb-8">
        <h1 class="font-display text-4xl lg:text-5xl font-bold tracking-tight text-light-text">
          Selected Work
        </h1>
        <p class="mt-6 text-lg font-display font-medium text-light-text italic leading-relaxed max-w-2xl">
          Design is predicting the future by creating it.<br />
          It is turning foresight into form, with empathy, structure, and an urge to act.
        </p>
      </div>
    </section>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
      <nav aria-label="Selected work sections">
        <div class="inline-flex items-center rounded-full border border-accent-500/20 bg-accent-500/10 px-1 py-0.5 text-accent-600">
          <a
            v-for="anchor in workAnchors"
            :key="anchor.href"
            :href="anchor.href"
            class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-mono uppercase tracking-widest transition-colors"
            :class="anchor.href === '#consumer-apps' ? 'bg-white/80 text-accent-700 shadow-sm' : 'hover:text-accent-700'"
            @click.prevent="scrollToWorkAnchor(anchor.href)"
          >
            {{ anchor.label }}
          </a>
        </div>
      </nav>
    </div>

    <!-- ═══ DESIGNING & BUILDING — Carousel ═══ -->
    <section id="consumer-apps" class="pb-20 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div class="flex items-end justify-between">
          <div>
            <h2 class="font-display text-3xl lg:text-4xl font-bold tracking-tight text-light-text">
              Designing & Building
            </h2>
            <p class="mt-3 text-light-muted max-w-xl">
              Products I took from concept to launch — strategy, design, engineering and GTM.
            </p>
          </div>
          <!-- Desktop nav arrows -->
          <div class="hidden sm:flex items-center gap-2">
            <button
              v-for="(_, i) in projects"
              :key="i"
              class="w-2.5 h-2.5 rounded-full transition-all duration-300"
              :class="activeIndex === i ? 'bg-accent-600 scale-110' : 'bg-light-border hover:bg-accent-300'"
              @click="scrollToCard(i)"
            />
          </div>
        </div>
      </div>

      <!-- Carousel track -->
      <div
        ref="carouselRef"
        class="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mb-4 no-scrollbar"
        style="scroll-padding-left: max(calc((100vw - 80rem) / 2 + 1rem), 1rem);"
        :style="{ paddingLeft: 'max(calc((100vw - 80rem) / 2 + 1rem), 1rem)', paddingRight: '2rem' }"
        @scroll="onCarouselScroll"
      >

        <div
          v-for="(project, index) in projects"
          :key="project.name"
          class="carousel-card flex-shrink-0 snap-start w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[42rem] rounded-2xl border border-light-border overflow-hidden bg-light-surface transition-all duration-300"
          :class="activeIndex === index ? 'shadow-xl shadow-accent-500/5 border-accent-500/20' : 'shadow-sm'"
        >
          <div class="flex flex-col md:flex-row h-full">
            <!-- Visual -->
            <div
              class="md:w-2/5 aspect-[4/3] md:aspect-auto flex items-center justify-center flex-shrink-0 overflow-hidden"
              :class="`bg-gradient-to-br ${project.gradient}`"
            >
              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.name"
                :class="project.imageFill ? 'w-full h-full object-cover object-center' : 'h-40 w-40 md:h-48 md:w-48 object-contain'"
              />
            </div>

            <!-- Content -->
            <div class="flex-1 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 class="font-display text-2xl font-bold text-light-text mb-1">{{ project.name }}</h3>
                <p class="text-xs font-mono text-accent-600 tracking-wider mb-4">{{ project.tagline }}</p>
                <p class="text-sm text-light-muted leading-relaxed mb-5">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    v-for="tech in project.stack"
                    :key="tech"
                    class="text-xs px-2 py-0.5 rounded-full bg-light-bg text-light-muted border border-light-border"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              <div class="flex gap-4">
                <a
                  v-for="link in project.links"
                  :key="link.href"
                  :href="link.href"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-1.5 text-sm transition-colors"
                  :class="link.primary ? 'font-semibold text-accent-600 hover:text-accent-700' : 'text-light-muted hover:text-accent-600'"
                >
                  <Icon :name="link.icon" class="w-3.5 h-3.5" /> {{ link.label }}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Mobile dots -->
      <div class="flex sm:hidden justify-center gap-2 mt-4">
        <button
          v-for="(_, i) in projects"
          :key="i"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="activeIndex === i ? 'bg-accent-600 scale-110' : 'bg-light-border'"
          @click="scrollToCard(i)"
        />
      </div>
    </section>

    <!-- ═══ B2B CASE STUDIES ═══ -->
    <section id="enterprise-b2b-systems" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-8 scroll-mt-24">
      <div class="mb-12">
        <nav class="mb-8" aria-label="Selected work sections">
          <div class="inline-flex items-center rounded-full border border-accent-500/20 bg-accent-500/10 px-1 py-0.5 text-accent-600">
            <a
              v-for="anchor in workAnchors"
              :key="anchor.href"
              :href="anchor.href"
              class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-mono uppercase tracking-widest transition-colors"
              :class="anchor.href === '#enterprise-b2b-systems' ? 'bg-white/80 text-accent-700 shadow-sm' : 'hover:text-accent-700'"
              @click.prevent="scrollToWorkAnchor(anchor.href)"
            >
              {{ anchor.label }}
            </a>
          </div>
        </nav>
        <h2 class="font-display text-3xl lg:text-4xl font-bold tracking-tight text-light-text">
          Enterprise Product Design
        </h2>
        <p class="mt-3 text-light-muted max-w-xl">
          Case studies spanning product strategy, UX design, design systems, and user research across 7+ industries.
        </p>
      </div>

      <!-- Industry filter pills -->
      <div v-if="industries.length > 2" class="flex flex-wrap gap-2 mb-12">
        <button
          v-for="industry in industries"
          :key="industry"
          class="text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full border transition-all duration-200"
          :class="[
            activeFilter === industry
              ? 'bg-accent-600 text-white border-accent-600'
              : 'border-light-border text-light-muted hover:border-accent-500 hover:text-accent-600',
          ]"
          @click="activeFilter = industry"
        >
          {{ industry }}
        </button>
      </div>

      <!-- Case study grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CaseStudyCard
          v-for="cs in filtered"
          :key="cs.stem"
          :title="cs.title"
          :company="cs.company"
          :description="cs.description"
          :industry="cs.industry"
          :skills="cs.skills"
          :thumbnail="cs.thumbnail"
          :slug="cs.stem.replace(/^work\//, '')"
          theme="light"
        />
      </div>

      <div v-if="filtered?.length === 0" class="text-center py-16 text-light-muted">
        <p>No case studies match this filter.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
