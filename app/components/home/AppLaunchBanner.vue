<script setup lang="ts">
const slides = [
  { name: 'MeerKatta', label: 'Now on iOS + macOS', headline: 'Your thoughts don’t arrive by keyboard.', description: 'Capture a thought. Reply to a message. Talk it into writing.', image: '/images/products/meerkatta-mascot.png', href: 'https://meerkatta.com', cta: 'Explore MeerKatta', theme: 'meerkatta' },
  { name: 'Ohlalarm', label: 'Public testing coming soon', headline: 'A little drama. A lot of care.', description: 'Meet Amélie, your friend for the must-dos. A wink, a nudge, or a well-timed yell.', image: '/images/products/amelie.png', href: 'https://ohlalarm.com', cta: 'Explore Ohlalarm', theme: 'ohlalarm' },
]
const active = ref(0)
const hovered = ref(false)
const focused = ref(false)
const paused = ref(false)
const reducedMotion = ref(true)
const visible = ref(false)
const canPlay = computed(() => visible.value && !hovered.value && !focused.value && !paused.value && !reducedMotion.value)
let timer: ReturnType<typeof setInterval> | undefined
let touchX = 0
let touchY = 0
function goTo(index: number) { active.value = (index + slides.length) % slides.length }
function onFocusOut(event: FocusEvent) {
  if (!(event.currentTarget as HTMLElement).contains(event.relatedTarget as Node | null)) focused.value = false
}
function onTouchEnd(event: TouchEvent) {
  const distance = touchX - event.changedTouches[0]!.clientX
  const verticalDistance = touchY - event.changedTouches[0]!.clientY
  if (Math.abs(distance) > 40 && Math.abs(distance) > Math.abs(verticalDistance)) goTo(active.value + (distance > 0 ? 1 : -1))
}
watch(canPlay, (play) => {
  clearInterval(timer)
  if (play) timer = setInterval(() => goTo(active.value + 1), 6500)
})
onMounted(() => {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)')
  const onMotion = () => { reducedMotion.value = media.matches }
  const onVisibility = () => { visible.value = !document.hidden }
  onMotion()
  onVisibility()
  media.addEventListener('change', onMotion)
  document.addEventListener('visibilitychange', onVisibility)
  onUnmounted(() => {
    clearInterval(timer)
    media.removeEventListener('change', onMotion)
    document.removeEventListener('visibilitychange', onVisibility)
  })
})
</script>

<template>
  <section aria-label="News from our studio" aria-roledescription="carousel"
    class="launch-news relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5"
    @mouseenter="hovered = true" @mouseleave="hovered = false" @focusin="focused = true" @focusout="onFocusOut">
    <div class="launch-frame">
      <div class="launch-window" @touchstart.passive="touchX = $event.touches[0]!.clientX; touchY = $event.touches[0]!.clientY" @touchend.passive="onTouchEnd">
        <div class="launch-track" :style="{ transform: `translateX(-${active * 100}%)` }" :aria-live="canPlay ? 'off' : 'polite'">
          <article v-for="(slide, index) in slides" :key="slide.name" class="launch-slide" :class="slide.theme"
            role="group" aria-roledescription="slide" :aria-label="`${index + 1} of ${slides.length}: ${slide.name}`"
            :aria-hidden="active !== index" :inert="active !== index">
            <div class="launch-art" aria-hidden="true">
              <div class="art-lines" />
              <span class="art-bracket bracket-one" /><span class="art-bracket bracket-two" />
              <img :src="slide.image" alt="" width="400" height="400" class="launch-character" :fetchpriority="index === 0 ? 'high' : 'auto'" draggable="false" />
            </div>
            <div class="launch-copy">
              <p class="launch-label">{{ slide.label }}</p>
              <p class="launch-name font-display">{{ slide.name }}</p>
              <h2 class="launch-heading font-display">{{ slide.headline }}</h2>
              <p class="launch-description">{{ slide.description }}</p>
              <a :href="slide.href" class="launch-cta">{{ slide.cta }} <Icon name="lucide:arrow-up-right" class="w-4 h-4" aria-hidden="true" /></a>
            </div>
          </article>
        </div>
      </div>
      <div class="launch-controls">
        <div class="launch-pagination" aria-label="Choose announcement">
          <button v-for="(slide, index) in slides" :key="slide.name" type="button" :aria-label="`Show ${slide.name} announcement`" :aria-pressed="active === index" :title="slide.name" @click="goTo(index)">
            <span class="pagination-dot" :class="{ selected: active === index }" />
          </button>
        </div>
        <div class="flex items-center">
          <button type="button" class="launch-control" :aria-label="paused ? 'Play announcements' : 'Pause announcements'" :title="paused ? 'Play announcements' : 'Pause announcements'" :aria-pressed="paused" @click="paused = !paused">
            <Icon :name="paused ? 'lucide:play' : 'lucide:pause'" class="w-4 h-4" aria-hidden="true" />
          </button>
          <button type="button" class="launch-control" aria-label="Previous announcement" title="Previous announcement" @click="goTo(active - 1)"><Icon name="lucide:chevron-left" class="w-5 h-5" aria-hidden="true" /></button>
          <button type="button" class="launch-control" aria-label="Next announcement" title="Next announcement" @click="goTo(active + 1)"><Icon name="lucide:chevron-right" class="w-5 h-5" aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.launch-news { --color-steel: var(--color-dai); --color-steel-light: var(--color-dai-light); --color-ember: var(--color-gold); --color-ember-light: var(--color-gold-light); }
.launch-frame { position: relative; border: 1px solid #ffffff14; border-radius: 8px; background: var(--color-dark-surface); box-shadow: 0 18px 34px #0007, 0 4px 8px #0004; }
.launch-window { overflow: hidden; border-radius: 8px; touch-action: pan-y; }
.launch-track { display: flex; transition: transform 600ms cubic-bezier(.22,.61,.36,1); }
.launch-slide { display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.7fr); flex: 0 0 100%; min-width: 0; height: 300px; }
.launch-art { position: relative; overflow: hidden; isolation: isolate; background: #dbe8e9; }
.ohlalarm .launch-art { background: #ede8e0; }
.art-lines { position: absolute; inset: -60%; transform: rotate(-32deg); background: repeating-linear-gradient(90deg, transparent 0 52px, #60859118 52px 53px, transparent 53px 104px); }
.art-lines::after { content: ''; position: absolute; inset: 0 42% 0 43%; background: #91aeb71f; border-inline: 1px solid #60859133; }
.art-bracket { position: absolute; width: 34px; height: 34px; border-color: #60859166; border-style: solid; z-index: 2; }
.bracket-one { left: 20px; top: 20px; border-width: 1px 0 0 1px; }
.bracket-two { right: 20px; bottom: 20px; border-width: 0 1px 1px 0; }
.launch-character { position: absolute; height: 100%; width: 100%; bottom: -2px; object-fit: contain; object-position: center bottom; }
.meerkatta .launch-character { mix-blend-mode: multiply; object-fit: cover; object-position: 50% 30%; height: 100%; }
.launch-copy { padding: 28px 40px 52px; align-self: center; min-width: 0; }
.launch-label { font-size: 12px; line-height: 1.5; font-weight: 600; color: var(--color-steel-light); margin-bottom: 8px; }
.ohlalarm .launch-label { color: var(--color-ember); }
.launch-name { color: white; font-weight: 700; font-size: 28px; line-height: 1.15; margin-bottom: 8px; }
.launch-heading { font-size: 18px; line-height: 1.4; color: var(--color-dark-text); font-weight: 500; }
.launch-description { font-size: 14px; line-height: 1.6; color: var(--color-dark-text); margin-top: 8px; max-width: 480px; }
.launch-cta { display: inline-flex; align-items: center; gap: 10px; min-height: 44px; padding: 8px 18px; margin-top: 16px; font-size: 14px; line-height: 1.5; font-weight: 600; white-space: nowrap; border-radius: 6px; background: var(--color-steel); color: var(--color-dark-bg); }
.launch-cta:hover { background: var(--color-steel-light); }
.ohlalarm .launch-cta { background: var(--color-ember); }
.ohlalarm .launch-cta:hover { background: var(--color-ember-light); }
.launch-controls { position: absolute; bottom: 5px; right: 14px; left: calc(32% + 40px); display: flex; justify-content: space-between; align-items: center; }
.launch-pagination { display: flex; }
.launch-pagination button { width: 32px; height: 36px; display: grid; place-items: center; cursor: pointer; }
.pagination-dot { width: 18px; height: 3px; background: #ffffff40; transition: background 160ms; }
.pagination-dot.selected { background: var(--color-steel-light); }
.launch-control { width: 36px; height: 36px; display: grid; place-items: center; color: var(--color-dark-text); cursor: pointer; border-radius: 4px; }
.launch-control:hover { background: #ffffff12; color: white; }
button:focus-visible, a:focus-visible { outline: 2px solid var(--color-steel-light); outline-offset: 3px; }
@media (max-width: 767px) {
  .launch-slide { grid-template-columns: minmax(0, 1fr); grid-template-rows: 130px 1fr; height: 420px; }
  .launch-character { height: 150%; width: 68%; right: 3%; bottom: -50%; }
  .meerkatta .launch-character { height: 150%; width: 68%; right: 3%; bottom: -50%; object-fit: contain; }
  .art-lines { inset: -160%; }
  .launch-copy { padding: 18px 20px 52px; align-self: start; }
  .launch-name { font-size: 24px; }
  .launch-heading { font-size: 16px; }
  .launch-description { margin-top: 6px; }
  .launch-cta { margin-top: 12px; }
  .launch-controls { left: 20px; right: 12px; }
}
@media (prefers-reduced-motion: reduce) { .launch-track, .pagination-dot { transition: none; } }
</style>
