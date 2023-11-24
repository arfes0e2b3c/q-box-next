import { fontXl, fontLg } from '@/consts/styles.css'
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

export const mainContainer = style({
  width: '100%',
})

export const qAListTitle = style({
  margin: '0',
  marginLeft: '20px',
  fontSize: fontXl,
  '@media': {
    'screen and (max-width: 768px)': {
      margin: '10px 20px',
      fontSize: fontLg,
    },
  },
})
