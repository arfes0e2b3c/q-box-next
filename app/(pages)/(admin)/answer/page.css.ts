import { style } from '@vanilla-extract/css'

export const page = style({
  width: '80%',
  margin: '0 auto',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const title = style({
  margin: '20px 0 0',
  textAlign: 'center',
  fontSize: '2.2rem',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '1.4rem',
    },
  },
})

export const pageInner = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0',
  margin: '10px 0 20px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})
