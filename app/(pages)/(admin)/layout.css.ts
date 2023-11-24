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

export const loadingBody = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: `calc(100vh - ${pcHeaderHeight} - ${pcFooterHeight})`,
  '@media': {
    'screen and (max-width: 768px)': {
      minHeight: `calc(100vh - ${spHeaderHeight} - ${spFooterHeight})`,
    },
  },
})

export const isLoginText = style({
  fontSize: '1.5rem',
  margin: '10px 0',
})
