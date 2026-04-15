import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

export function useGsapScrollTrigger() {
  if (!registered && import.meta.client) {
    gsap.registerPlugin(ScrollTrigger)
    registered = true
  }

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill())
  })

  return { gsap, ScrollTrigger }
}
