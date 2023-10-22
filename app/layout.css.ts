import { spHeaderHeight, spFooterHeight, pcFooterHeight, pcHeaderHeight } from '@/consts'
import { style } from '@vanilla-extract/css'

export const mainContainer = style({
  minHeight: `calc(100vh - ${pcHeaderHeight} - ${pcFooterHeight})`,
  '@media': {
    'screen and (max-width: 768px)': {
      minHeight: `calc(100vh - ${spHeaderHeight} - ${spFooterHeight})`,
    },
  },
})
