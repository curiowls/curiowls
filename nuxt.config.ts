import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/seo',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-light-32.png', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-light-16.png', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-dark-32.png', media: '(prefers-color-scheme: dark)' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-dark-16.png', media: '(prefers-color-scheme: dark)' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon-light.svg', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon-dark.svg', media: '(prefers-color-scheme: dark)' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },

  site: {
    url: 'https://curiowls.com',
    name: 'Chelsea Huang — Product Strategist & Designer | Curiowls',
    description: 'Product strategist and designer with 16+ years of experience across enterprise SaaS, cybersecurity, commercial real estate, and manufacturing.',
    defaultLocale: 'en',
  },

  ogImage: {
    enabled: false,
  },

  nitro: {
    storage: {
      cache: { driver: 'memory' },
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/work': { prerender: true },
    '/about': { prerender: true },
    '/resume': { prerender: true },
    '/work/**': { prerender: true },
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Plus Jakarta Sans', provider: 'google' },
      { name: 'Bruno Ace', provider: 'google' },
    ],
  },
})
