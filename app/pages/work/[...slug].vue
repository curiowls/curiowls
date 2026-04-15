<script setup lang="ts">
const route = useRoute()

const { data: caseStudy } = await useAsyncData(`work-${route.path}`, () =>
  queryCollection('work').path(route.path).first()
)

if (!caseStudy.value) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
}

useSeoMeta({
  title: `${caseStudy.value.title} — Chelsea Huang`,
  description: caseStudy.value.description,
})
</script>

<template>
  <div class="pt-24 pb-16">
    <article class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <!-- Back link -->
      <NuxtLink
        to="/work"
        class="inline-flex items-center gap-2 text-sm text-light-muted hover:text-accent-600 transition-colors mb-8"
      >
        <Icon name="lucide:arrow-left" class="w-4 h-4" />
        Back to Work
      </NuxtLink>

      <!-- Header -->
      <header class="mb-12 pb-8 border-b border-light-border">
        <div class="flex flex-wrap items-center gap-3 mb-5">
          <BadgePill :label="caseStudy.industry" theme="light" />
          <span class="text-xs font-mono text-light-muted tracking-wider">
            {{ caseStudy.company }}
          </span>
          <span class="text-xs text-light-muted">&bull;</span>
          <span class="text-xs font-mono text-light-muted tracking-wider">
            {{ caseStudy.role }}
          </span>
        </div>

        <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-light-text leading-tight mb-5">
          {{ caseStudy.title }}
        </h1>

        <p class="text-lg text-light-muted leading-relaxed">
          {{ caseStudy.description }}
        </p>

        <!-- Skills tags -->
        <div v-if="caseStudy.skills?.length" class="flex flex-wrap gap-2 mt-6">
          <span
            v-for="skill in caseStudy.skills"
            :key="skill"
            class="text-xs font-mono tracking-wider px-2.5 py-1 rounded-full bg-accent-50 text-accent-600 border border-accent-500/10"
          >
            {{ skill }}
          </span>
        </div>
      </header>

      <!-- Content -->
      <div class="case-study-content prose prose-lg max-w-none
        prose-headings:font-display prose-headings:text-light-text prose-headings:tracking-tight
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-light-muted prose-p:leading-relaxed
        prose-a:text-accent-500 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-light-text prose-strong:font-semibold
        prose-li:text-light-muted
        prose-ol:text-light-muted prose-ul:text-light-muted
        prose-blockquote:border-accent-500/30 prose-blockquote:text-light-muted prose-blockquote:not-italic
        prose-img:rounded-xl prose-img:shadow-md prose-img:border prose-img:border-light-border
        prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-light-muted/70
      ">
        <ContentRenderer :value="caseStudy" />
      </div>

      <!-- Back to work -->
      <div class="mt-16 pt-8 border-t border-light-border">
        <NuxtLink
          to="/work"
          class="inline-flex items-center gap-2 text-sm text-light-muted hover:text-accent-600 transition-colors"
        >
          <Icon name="lucide:arrow-left" class="w-4 h-4" />
          Back to all work
        </NuxtLink>
      </div>
    </article>
  </div>
</template>
