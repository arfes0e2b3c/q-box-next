import { style } from '@vanilla-extract/css'

export const topPage = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',
})

export const formContainer = style({
  width: '80%',
  marginTop: '20px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      padding: '0 10px',
      marginTop: '10px',
    },
  },
})
