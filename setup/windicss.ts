import { defineWindiSetup } from '@slidev/types'
import plugin from 'windicss/plugin'

function round(num) {
  return num.toFixed(2).replace(/0+$/, '').replace(/\.$/, '')
}

// extending the builtin windicss configurations
export default defineWindiSetup(() => {
  const bp = 45
  const gs = 100

  const spacing = {}
  const widths = {}
  const heights = {}
  const strokes = {}
  const lineHeights = {}
  const fontSizes = {}
  const gridAreas = {}
  const flexs = {}

  for (let i = 0; i <= 10; i += 0.05) {
    const key = round(i).replace('.', '_')
    spacing[`${key}bp`] = `${round(i * bp)}px`
    spacing[`${key}gs`] = `${round(i * gs)}px`
    widths[`${key}bp`] = `${round(i * bp)}px`
    widths[`${key}gs`] = `${round(i * gs)}px`
    heights[`${key}bp`] = `${round(i * bp)}px`
    heights[`${key}gs`] = `${round(i * gs)}px`
  }

  for (let i = 0; i <= 100; i++) {
    spacing[`${i}p`] = `${i}%`
    widths[`${i}p`] = `${i}%`
    heights[`${i}p`] = `${i}%`
  }

  for (let i = 0; i <= 5; i += 0.1) {
    const key = round(i).replace('.', '_')
    const value = i.toFixed(1)
    strokes[`.stroke-width-${key}`] = { 'stroke-width': value }
    lineHeights[`.line-height-${key}`] = { 'line-height': `${value}em` }
    fontSizes[`.font-size-${key}em`] = { 'font-size': `${value}em` }
  }

  for (let i = 1; i <= 10; i++) {
    flexs[i] = `${i} ${i} 0%`
  }

  for (let i = 0; i <= 25; i++) {
    const letter = String.fromCharCode(97 + i)

    gridAreas[`.grid-${letter}`] = { 'grid-area': letter }
  }

  for (let i = 0; i <= 500; i++) {
    fontSizes[`.font-size-${i}pt`] = { 'font-size': `${i}pt` }
  }

  return {
    theme: {
      extend: {
        spacing,
        width: widths,
        height: heights,
        flex: flexs,
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
    },
    plugins: [
      plugin(({ addUtilities }) => {
        addUtilities({
          ...gridAreas,
          ...strokes,
          ...lineHeights,
          ...fontSizes
        })
      })
    ]
  }
})
