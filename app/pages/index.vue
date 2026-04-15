<script setup lang="ts">
definePageMeta({ layout: 'home' })

useSeoMeta({
  title: 'Chelsea Huang — Product Strategist & Designer',
  description: '16+ years shaping enterprise products across SaaS, cybersecurity, commercial real estate, and manufacturing. Open to opportunities.',
})

const featuredWork = [
  {
    title: 'How "Who" Edged the Feature',
    company: 'Venafi',
    description: 'Pivoted an auditing feature into a real-time admin health dashboard by reframing who the actual user was.',
    industry: 'Cybersecurity',
    skills: ['Product Strategy', 'User Research', 'UX Design'],
    slug: 'venafi-cybersecurity',
    thumbnail: '/images/work/venafi-cybersecurity/03.png',
    order: 1,
  },
  {
    title: 'Design a Bridge to Trust and Action',
    company: 'Ten-X CRE',
    description: 'Redesigned buyer profiles for a $20B+ commercial real estate auction platform, building broker confidence across deal phases.',
    industry: 'Marketplace Operation',
    skills: ['Workshop Facilitation', 'UX Design', 'Product Strategy'],
    slug: 'ten-x-buyer-profile',
    thumbnail: '/images/work/ten-x-buyer-profile/08.png',
    order: 2,
  },
  {
    title: 'Infrastructure Components of a Design System',
    company: 'Apttus / Conga',
    description: 'Built the infrastructure layer of Nova 2.0 — layouts, containers, and navigation for a multi-product design system.',
    industry: 'Design System',
    skills: ['Design Systems', 'Information Architecture', 'Documentation'],
    slug: 'apttus-design-system',
    thumbnail: '/images/work/apttus-design-system/01.png',
    order: 3,
  },
  {
    title: 'Design for Billing: Structured & Unstructured',
    company: 'Apttus',
    description: 'Defined the UX framework for billing — when to minimize cognitive load vs. when to maximize decision support.',
    industry: 'Finance',
    skills: ['UX Design', 'User Research', 'Product Strategy'],
    slug: 'apttus-billing',
    thumbnail: '/images/work/apttus-billing/02.png',
    order: 4,
  },
]

const expertiseAreas = [
  { icon: 'lucide:compass', title: 'Product Strategy', description: 'Aligning user needs, business goals, and technical constraints into a coherent product direction.' },
  { icon: 'lucide:palette', title: 'UX Design', description: 'End-to-end experience design for complex enterprise workflows — from wireframes to high-fidelity.' },
  { icon: 'lucide:layers', title: 'Design Systems', description: 'Building scalable component libraries and infrastructure that enable consistent product experiences.' },
  { icon: 'lucide:users', title: 'User Research', description: 'Workshop facilitation, stakeholder interviews, and empathy-driven discovery that reframes problems.' },
]

const heroReady = ref(false)
const featuredRef = ref<HTMLElement>()
const expertiseRef = ref<HTMLElement>()

// Lenis smooth scroll
useLenis()

// GSAP scroll-triggered animations
const { gsap } = useGsapScrollTrigger()

onMounted(() => {
  // Trigger CSS hero entrance animation
  requestAnimationFrame(() => {
    heroReady.value = true
  })

  // Scroll-reveal using IntersectionObserver (more reliable than GSAP ScrollTrigger with Lenis)
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    revealObserver.observe(el)
  })
})
</script>

<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="relative min-h-screen flex items-center pt-16">
      <!-- Background glow blobs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-dai/5 rounded-full blur-3xl pointer-events-none" />
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <!-- Left: Text content -->
          <div class="lg:col-span-3 space-y-6">
            <div class="transition-all duration-700 ease-out" :class="heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
              <BadgePill label="Open to Opportunities" variant="gold" />
            </div>

            <h1
              class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] transition-all duration-700 ease-out delay-100"
              :class="heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            >
              Chelsea
              <span class="gradient-text">Huang</span>
            </h1>

            <p
              class="text-xl sm:text-2xl font-display font-medium text-dai-light transition-all duration-700 ease-out delay-200"
              :class="heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            >
              Product Strategist & Designer
            </p>

            <p
              class="text-lg text-dark-muted max-w-xl transition-all duration-700 ease-out delay-300"
              :class="heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            >
              16+ years shaping enterprise products across SaaS, cybersecurity, commercial real estate, and manufacturing. I turn complex business problems into clear, research-driven experiences.
            </p>

            <div
              class="flex flex-wrap gap-4 pt-2 transition-all duration-700 ease-out delay-[400ms]"
              :class="heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            >
              <ButtonPrimary to="/work" size="lg" variant="dark">
                View My Work
              </ButtonPrimary>
              <ButtonSecondary to="/about" size="lg">
                About Me
              </ButtonSecondary>
            </div>

            <!-- Monospace metadata -->
            <div
              class="flex flex-wrap gap-6 pt-4 transition-all duration-700 ease-out delay-500"
              :class="heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            >
              <span class="font-mono text-xs text-dark-muted/60 tracking-wider">
                7+ industries
              </span>
              <span class="font-mono text-xs text-dark-muted/60 tracking-wider">
                16+ years
              </span>
              <span class="font-mono text-xs text-dark-muted/60 tracking-wider">
                enterprise &times; consumer
              </span>
            </div>
          </div>

          <!-- Right: Abstract visual -->
          <div class="lg:col-span-2 hidden lg:flex items-center justify-center relative">
            <!-- Abstract gradient mesh -->
            <div class="relative w-full aspect-square max-w-md">
              <!-- Outer ring -->
              <div class="absolute inset-0 rounded-full border border-dai/10 animate-[spin_60s_linear_infinite]" />
              <div class="absolute inset-4 rounded-full border border-gold/8 animate-[spin_45s_linear_infinite_reverse]" />

              <!-- Gradient orbs -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-dai/20 to-gold/10 rounded-full blur-2xl" />
              <div class="absolute top-1/4 right-1/4 w-24 h-24 bg-dai-light/15 rounded-full blur-xl animate-pulse" />
              <div class="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gold/15 rounded-full blur-xl animate-pulse" style="animation-delay: 1.5s" />

              <!-- Center element -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-32 h-32 border border-dai/20 rotate-45 flex items-center justify-center">
                  <div class="w-20 h-20 border border-gold/20 -rotate-12">
                    <div class="w-full h-full bg-gradient-to-br from-dai/10 to-gold/10" />
                  </div>
                </div>
              </div>

              <!-- Floating annotations -->
              <FloatingAnnotation
                label="Strategy"
                class="top-8 -left-4"
                connector-direction="right"
              />
              <FloatingAnnotation
                label="Design"
                class="bottom-12 -right-4"
                connector-direction="left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ FEATURED WORK ═══ -->
    <section ref="featuredRef" class="relative py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio"
          title="Selected Work"
          subtitle="Case studies spanning enterprise SaaS, cybersecurity, commercial real estate, and design systems."
          theme="dark"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CaseStudyCard
            v-for="(project, index) in featuredWork"
            :key="project.slug"
            v-bind="project"
            theme="dark"
            class="scroll-reveal"
            :style="{ transitionDelay: `${index * 120}ms` }"
          />
        </div>

        <div class="text-center mt-12">
          <ButtonSecondary to="/work" size="md">
            View All Work
          </ButtonSecondary>
        </div>
      </div>
    </section>

    <!-- ═══ EXPERTISE ═══ -->
    <section ref="expertiseRef" class="relative py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Expertise"
          title="What I Bring"
          subtitle="Deep experience across the full product design lifecycle."
          theme="dark"
        />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <GlassCard v-for="(area, index) in expertiseAreas" :key="area.title" class="scroll-reveal" :style="{ transitionDelay: `${index * 100}ms` }">
            <Icon :name="area.icon" class="w-8 h-8 text-gold mb-4" />
            <h3 class="font-display text-lg font-bold text-white mb-2">{{ area.title }}</h3>
            <p class="text-sm text-dark-muted leading-relaxed">{{ area.description }}</p>
          </GlassCard>
        </div>
      </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="relative py-32">
      <div class="absolute inset-0 bg-gradient-to-b from-dai/5 via-transparent to-dark-bg pointer-events-none" />

      <div class="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <BadgePill label="Open to Opportunities" variant="gold" />

        <h2 class="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
          Let's build something
          <span class="gradient-text">meaningful</span>
        </h2>

        <p class="text-dark-muted text-lg">
          I'm looking for my next full-time role where I can bring strategic thinking
          and deep design craft to complex product challenges.
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <ButtonPrimary href="https://www.linkedin.com/in/huangqian/" size="lg" variant="dark">
            Connect on LinkedIn
          </ButtonPrimary>
        </div>

        <p class="font-mono text-xs text-dark-muted/70 tracking-wider">
          curiowls.com
        </p>
      </div>
    </section>
  </div>
</template>
