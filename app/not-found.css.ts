import { gray } from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const individualPage = style({
  maxWidth: '1080px',
  margin: '0 auto',
  paddingTop: '30px',
  '@media': {
    'screen and (max-width: 768px)': {
      paddingTop: '0',
    },
  },
})

export const qAContainer = style({
  width: '100%',
  margin: '0 auto',
  padding: '30px',
  boxShadow: `0 0 10px ${gray}`,
  borderRadius: '10px',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '20px 10px',
    },
  },
})
