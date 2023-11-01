import { globalStyle, style } from '@vanilla-extract/css'

export const loginContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 221px)',
})

export const form = style({
  width: '700px',
  height: '400px',
  margin: '0 auto',
  boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.1)',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      height: '350px',
      boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.1)',
    },
  },
})

export const formInner = style({
  padding: '50px 100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '30px',
    },
  },
})

export const formTitle = style({
  margin: '10px 0',
  fontSize: '28px',
  '@media': {
    'screen and (max-width: 768px)': {
      margin: '10px 0',
      fontSize: '24px',
    },
  },
})

export const formInput = style({
  width: '100%',
  padding: '10px',
  margin: '20px 0',
  boxSizing: 'border-box',
  color: '#333',
  border: 'none',
  borderBottom: '2px solid rgba(0, 0, 0, 0.15)',
  borderRadius: '0',
  transition: '0.2s',
  outline: 'none',
  textAlign: 'center',
  fontSize: '18px',
  ':focus': {
    borderColor: 'rgba(0, 0, 0, 0.7)',
  },
})

export const submitButton = style({
  position: 'relative',
  width: '200px',
  height: '60px',
  marginTop: '20px',
  backgroundColor: '#333',
  color: 'white',
  border: 'none',
  borderRadius: '1px',
  transition: '0.2s',
  cursor: 'pointer',
  overflow: 'hidden',
  ':before': {
    content: '',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '0',
    height: '0',
    backgroundColor: 'white',
    opacity: '0.2',
    transition: '0.3s',
  },
})

globalStyle(`${submitButton}:hover:before`, {
  width: '100%',
  height: '100%',
})
