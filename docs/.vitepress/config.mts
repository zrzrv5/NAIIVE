import { defineConfig } from 'vitepress'
import { readdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve, join } from 'node:path'

// Auto-generate Updates sidebar from files in docs/updates/
// Add a new versioned .md file there and it appears automatically.
function getUpdatesSidebar() {
  const dir = resolve(fileURLToPath(new URL('.', import.meta.url)), '../updates')
  return readdirSync(dir)
    .filter((f: string) => f.endsWith('.md') && f !== 'index.md')
    .sort((a: string, b: string) => b.localeCompare(a, undefined, { numeric: true, sensitivity: 'base' }))
    .map((f: string) => {
      const slug = f.replace('.md', '')
      // Read frontmatter title if present, otherwise use the slug
      const raw = readFileSync(join(dir, f), 'utf-8')
      const match = raw.match(/^---[\s\S]*?^title:\s*["']?(.+?)["']?\s*$/m)
      const label = match ? match[1] : slug
      return { text: label, link: `/updates/${slug}` }
    })
}

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
      { text: 'Updates', link: '/updates/' },
      { text: 'Privacy', link: '/privacy' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          // { text: 'Core Concepts', link: '/guide/core-concepts' },
          { text: 'UI', link: '/guide/ui-overview' },
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
      },
      {
        text: 'Updates',
        link: '/updates/',
        items: getUpdatesSidebar()
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zrzrv5/naiive' }
    ]
  }
})
