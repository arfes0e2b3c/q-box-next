import { style } from '@vanilla-extract/css'

export const header = style({
  position: 'fixed',
  top: '0',
  zIndex: '1000',
  display: 'grid',
  gridTemplateColumns: '20% 60% 20%',
  width: '100%',
  height: '70px',
  backgroundColor: 'white',
  boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.2)',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
      height: '60px',
    },
  },
})

export const linkToHome = style({
  display: 'grid',
  placeContent: 'center',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  color: '#333',
  textDecoration: 'none',
  userSelect: 'none',
  transition: '0.3s',
  ':hover': {
    backgroundColor: 'rgba(48, 48, 48, 1)',
    color: 'white',
  },
})

export const appTitleContainer = style({
  display: 'grid',
  placeContent: 'center',
  width: '100%',
  height: 'auto',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    },
  },
})

export const appTitle = style({
  margin: '0',
  cursor: 'pointer',
  userSelect: 'none',
})
