import { style } from '@vanilla-extract/css'

export const replyContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '90%',
  padding: '20px',
  margin: '10px 0',
  boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.1)',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      padding: '10px',
      boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.1)',
    },
  },
})

export const createdAt = style({
  width: '140px',
  padding: '3px 10px',
  margin: '0',
  borderRadius: '5px',
  color: 'white',
  backgroundColor: '#333',
  border: '2px solid rgba(0, 0, 0, 1)',
  whiteSpace: 'nowrap',
  fontSize: '1rem',
  textAlign: 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '120px',
      fontSize: '0.8rem',
    },
  },
})

export const box = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '20% 60% 20%',
  alignItems: 'center',
  marginTop: '10px',
})

export const button = style({
  display: 'grid',
  placeContent: 'center',
  width: '100px',
  height: '30px',
  margin: '0 auto',
  border: '1px solid rgba(0, 0, 0, 0.3)',
  borderRadius: '5px',
  background: 'none',
  transition: '0.5s',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#d77',
    border: '1px solid rgb(200, 0, 0)',
    color: 'white',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      height: '70px',
      margin: '5px auto',
    },
  },
})

export const replySentence = style({
  margin: '0',
  textAlign: 'center',
})

export const toggleButton = style({
  ':hover': {
    backgroundColor: 'rgb(48,48,48)',
    borderColor: 'rgb(48,48,48)',
  },
})

export const registerButton = style({
  width: '180px',
  height: '40px',
  marginTop: '10px',
  border: 'none',
  color: 'white',
  transition: '0.5s',
  cursor: 'pointer',
})

export const answered = style({
  backgroundColor: 'rgba(0, 74, 166, 1)',
  ':hover': {
    backgroundColor: 'rgba(0, 74, 166, 0.8)',
  },
})
