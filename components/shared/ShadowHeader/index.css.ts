import { pcHeaderHeight, spHeaderHeight } from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const shadowHeader = style({
  height: pcHeaderHeight,
  width: '100%',
  '@media': {
    'screen and (max-width: 768px)': {
      height: spHeaderHeight,
    },
  },
})
