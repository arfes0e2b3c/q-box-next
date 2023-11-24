import { baseTransition, lightGray } from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const searchSection = style({
  width: '100%',
})

export const searchInput = style({
  width: '100%',
  height: '100%',
  paddingLeft: '10px',
  backgroundColor: lightGray,
  color: '#666',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '0',
  outline: 'none',
  transition: baseTransition,
  zIndex: 100,
  ':focus': {
    backgroundColor: 'rgb(48, 48, 48)',
    color: 'white',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      textAlign: 'center',
    },
  },
})
