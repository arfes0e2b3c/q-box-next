import { keyframes } from '@vanilla-extract/css'

export const baseTransition = '0.3s'
export const shortTransition = '0.1s'

export const pcHeaderHeight = '70px'
export const spHeaderHeight = '60px'

export const pcFooterHeight = '150px'
export const spFooterHeight = '100px'

export const bgAnimation = keyframes({
  '0%': { left: '-100%' },
  '50%': { left: '100%' },
  '100%': { left: '100%' },
})
