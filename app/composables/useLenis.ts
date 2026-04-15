import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export function useLenis() {
  const isActive = ref(false)

  onMounted(() => {
    if (lenisInstance) return

    lenisInstance = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    const raf = (time: number) => {
      lenisInstance?.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    isActive.value = true
  })

  onUnmounted(() => {
    lenisInstance?.destroy()
    lenisInstance = null
    isActive.value = false
  })

  return {
    lenis: computed(() => lenisInstance),
    isActive,
  }
}
