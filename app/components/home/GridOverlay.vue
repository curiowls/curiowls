<template>
  <div class="fixed inset-0 pointer-events-none z-0 grid-overlay" aria-hidden="true">
    <!-- Corner crosshairs -->
    <div class="absolute top-8 left-8 crosshair w-3 h-3" />
    <div class="absolute top-8 right-8 crosshair w-3 h-3" />
    <div class="absolute bottom-8 left-8 crosshair w-3 h-3" />
    <div class="absolute bottom-8 right-8 crosshair w-3 h-3" />

    <!-- Decorative corner brackets -->
    <svg class="absolute top-6 left-6 w-8 h-8 text-white/[0.06]" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M0 12V0h12" />
    </svg>
    <svg class="absolute top-6 right-6 w-8 h-8 text-white/[0.06]" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M32 12V0H20" />
    </svg>
    <svg class="absolute bottom-6 left-6 w-8 h-8 text-white/[0.06]" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M0 20v12h12" />
    </svg>
    <svg class="absolute bottom-6 right-6 w-8 h-8 text-white/[0.06]" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M32 20v12H20" />
    </svg>
  </div>
</template>
