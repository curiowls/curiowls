<script setup lang="ts">
defineProps<{
  label: string
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  connectorDirection?: 'left' | 'right' | 'up' | 'down'
}>()
</script>

<template>
  <div class="absolute z-10 group" :class="position">
    <!-- Annotation box -->
    <div class="relative border border-white/10 bg-white/[0.02] px-3 py-1.5 backdrop-blur-sm">
      <!-- Corner squares (brutalist detail) -->
      <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border border-white/20 bg-dark-bg" />
      <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 border border-white/20 bg-dark-bg" />
      <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 border border-white/20 bg-dark-bg" />
      <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border border-white/20 bg-dark-bg" />

      <span class="font-mono text-xs tracking-widest uppercase text-white/50 group-hover:text-dai-light transition-colors">
        {{ label }}
      </span>
    </div>

    <!-- Connector line -->
    <div
      v-if="connectorDirection"
      class="absolute bg-white/[0.06]"
      :class="{
        'w-px h-8 left-1/2 -translate-x-1/2 -bottom-8': connectorDirection === 'down',
        'w-px h-8 left-1/2 -translate-x-1/2 -top-8': connectorDirection === 'up',
        'h-px w-8 top-1/2 -translate-y-1/2 -right-8': connectorDirection === 'right',
        'h-px w-8 top-1/2 -translate-y-1/2 -left-8': connectorDirection === 'left',
      }"
    />
  </div>
</template>
