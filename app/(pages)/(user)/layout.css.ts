import { pcHeaderHeight, pcFooterHeight, spHeaderHeight, spFooterHeight } from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const mainContainer = style({
  minHeight: `calc(100vh - ${pcHeaderHeight} - ${pcFooterHeight})`,
  '@media': {
    'screen and (max-width: 768px)': {
      minHeight: `calc(100vh - ${spHeaderHeight} - ${spFooterHeight})`,
    },
  },
})
