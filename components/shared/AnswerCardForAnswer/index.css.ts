import { style } from '@vanilla-extract/css'

export const answerCard = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  listStyle: 'none',
  padding: '20px',
  margin: '10px 0',
  boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.1)',
  overflowWrap: 'break-word',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '10px',
      margin: '10px 0',
      boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.1)',
    },
  },
})

export const createdAt = style({
  width: '120px',
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
      width: '100px',
      fontSize: '0.8rem',
    },
  },
})

export const box = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const button = style({
  width: '100px',
  height: '60px',
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
      width: '50px',
      height: '70px',
      margin: '5px 0',
    },
  },
})

export const question = style({
  width: '70%',
  margin: '10px 0 0',
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSize: '1rem',
  '@media': {
    'screen and (max-width: 768px)': {
      width: 'auto',
      fontSize: '1rem',
      maxWidth: 'calc(100% - 120px)',
    },
  },
})

export const toggleButton = style({
  ':hover': {
    backgroundColor: 'rgb(48,48,48)',
    borderColor: 'rgb(48,48,48)',
  },
})
