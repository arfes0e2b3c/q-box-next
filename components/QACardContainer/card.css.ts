import { keyframes, style } from '@vanilla-extract/css'

const animate = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
})

export const qACard = style({
  width: '100%',
  height: 'auto',
  aspectRatio: '40 / 21',
  margin: '0 auto',
  animation: `${animate} 0.2s ease-out forwards`,
  opacity: '0',
})
