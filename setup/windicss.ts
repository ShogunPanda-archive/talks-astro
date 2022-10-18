import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  theme: {
    extend: {
      colors: {
        'nf-dark-grey': '#272d3a',
        'nf-light-grey': '#f2f2f0',
        'nf-darkest-blue': '#130048',
        'nf-brunch-pink': '#fb7a9c',
        'nf-midnight-blue': '#194caa',
        'nf-neon-blue': '#2165e3',
        'nf-orange-split': '#ecb22e'
      }
    }
  }
}))
