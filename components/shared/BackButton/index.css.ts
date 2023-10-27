import { baseTransition } from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const backButtonWrapper = style({
  width: '100px',
  textAlign: 'center',
  marginBottom: '20px',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    },
  },
})

export const backButton = style({
  display: 'block',
  width: '100%',
  height: '100%',
  padding: '8px',
  color: '#333',
  borderRadius: '5px',
  textDecoration: 'none',
  boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)',
  transition: baseTransition,
  ':hover': {
    backgroundColor: 'rgba(48, 48, 48, 1)',
    color: 'white',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      ':hover': {
        backgroundColor: 'transparent',
        color: '#333',
      },
    },
  },
})
