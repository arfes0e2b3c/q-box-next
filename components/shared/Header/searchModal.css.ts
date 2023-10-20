import { style } from '@vanilla-extract/css'

export const searchModal = style({
  position: 'absolute',
  top: '100%',
  left: '0',
  zIndex: 0,
  width: '100%',
  height: '100vh',
})

export const searchModalInner = style({
  maxHeight: '200px',
  padding: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  overflow: 'scroll',
  boxShadow: '0px 10px 10px 1px rgba(0, 0, 0, 0.2)',
  transformOrigin: 'center center',
  color: 'white',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '20px 10px',
    },
  },
})

export const searchModalTitle = style({
  margin: '0',
  fontSize: '1.4rem',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '1.2rem',
    },
  },
})

export const searchModalList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  width: '100%',
  margin: '0',
  marginTop: '10px',
  padding: '0',
  '@media': {
    'screen and (max-width: 768px)': {
      gap: '5px',
    },
  },
})

export const searchModalItem = style({
  listStyle: 'none',
  width: '11%',
  minWidth: '100px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid white',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: '0.3s',
  overflow: 'hidden',
  ':hover': {
    backgroundColor: 'white',
    color: '#333',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      width: '30%',
      minWidth: '70px',
    },
  },
})
