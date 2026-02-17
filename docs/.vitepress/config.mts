import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Naiive",
  description: "Experimental node-based visualization studio built with Swift & Metal.",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Privacy', link: '/privacy' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Core Concepts', link: '/guide/core-concepts' },
          {
            text: 'Settings',
            items: [
              { text: 'Overview', link: '/guide/settings' },
              { text: 'Display & Palettes', link: '/guide/settings/display-and-palettes' },
              { text: 'Viewport & Cursor', link: '/guide/settings/viewport-and-cursor' },
              { text: 'Inspector Formatting', link: '/guide/settings/inspector' },
              { text: 'Playback', link: '/guide/settings/playback' },
              { text: 'Rendering', link: '/guide/settings/rendering' },
              { text: 'Spatial', link: '/guide/settings/spatial' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zrzrv5/naiive' }
    ]
  }
})
