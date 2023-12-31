import { keyframes } from '@vanilla-extract/css'

export const shortTransition = '0.1s'
export const baseTransition = '0.3s'
export const longTransition = '0.5s'

export const pcHeaderHeight = '70px'
export const spHeaderHeight = '60px'

export const pcFooterHeight = '150px'
export const spFooterHeight = '100px'

export const bgAnimation = keyframes({
  '0%': { left: '-100%' },
  '50%': { left: '100%' },
  '100%': { left: '100%' },
})

export const lightGray = 'rgba(0, 0, 0, 0.1)'
export const gray = 'rgba(0, 0, 0, 0.2)'

export const baseColor = '#333'
export const baseColorLight = '#ddd'
export const baseColorRed = '#ed1a3d'

export const fontXs = '0.8rem'
export const fontSm = '1rem'
export const fontMd = '1.2rem'
export const fontLg = '1.4rem'
export const fontXl = '2rem'
