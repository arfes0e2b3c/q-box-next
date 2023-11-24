import { baseColor, baseTransition, gray } from '@/consts/styles.css'
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
  color: baseColor,
  borderRadius: '5px',
  textDecoration: 'none',
  boxShadow: `0 0 5px 2px ${gray}`,
  transition: baseTransition,
  ':hover': {
    backgroundColor: baseColor,
    color: 'white',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      ':hover': {
        backgroundColor: 'transparent',
        color: baseColor,
      },
    },
  },
})
