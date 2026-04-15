<template>
  <div class="min-h-screen bg-dark-bg text-dark-text">
    <GridOverlay />
    <AppNavbar theme="dark" />
    <main>
      <slot />
    </main>
    <AppFooter theme="dark" />
  </div>
</template>
