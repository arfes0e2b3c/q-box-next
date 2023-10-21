import { baseTransition } from '@/consts'
import { style } from '@vanilla-extract/css'

export const searchSection = style({
  width: '100%',
})

export const searchInput = style({
  width: '100%',
  height: '100%',
  paddingLeft: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  fontSize: '1.2em',
  border: 'none',
  outline: 'none',
  transition: baseTransition,
  zIndex: 100,
  ':focus': {
    backgroundColor: 'rgb(48, 48, 48)',
    color: 'white',
  },
})
