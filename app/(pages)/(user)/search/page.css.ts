import { gray } from '@/consts/styles.css'
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
  marginLeft: '20px',
  fontSize: '2rem',
  '@media': {
    'screen and (max-width: 768px)': {
      margin: '10px 20px',
      fontSize: '1.5rem',
    },
  },
})

export const noResult = style({
  listStyle: 'none',
  padding: '20px 10px',
  marginTop: '20px',
  boxShadow: `0 0 5px 2px ${gray}`,
  borderRadius: '10px',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '10px 5px',
      margin: '10px auto 0',
      boxShadow: `0 0 3px 1px ${gray}`,
    },
  },
})
