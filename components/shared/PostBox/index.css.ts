import { baseColor, baseTransition, gray, shortTransition } from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const postBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  marginBottom: '10px',
  overflow: 'hidden',
  transition: baseTransition,
  '@media': {
    'screen and (max-width: 768px)': {
      marginTop: '10px',
    },
  },
})

export const postBoxTitle = style({
  margin: '0px auto',
  fontSize: '1.4rem',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '1.2rem',
    },
  },
})

export const postBoxInput = style({
  resize: 'none',
  width: '100%',
  height: '80px',
  padding: '20px',
  outline: 'none',
  border: 'none',
  borderBottom: `2px solid ${baseColor}`,
  borderColor: gray,
  borderWidth: '2px',
  borderRadius: '0',
  fontSize: '1rem',
  transition: baseTransition,
  ':focus': {
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      height: '60px',
      padding: '10px 20px',
      fontSize: '0.8rem',
    },
  },
})

export const noticeMessage = style({
  margin: '0',
  marginTop: '10px',
  fontSize: '1rem',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '0.8rem',
    },
  },
})

export const submitButton = style({
  display: 'grid',
  placeContent: 'center',
  width: '120px',
  height: '40px',
  marginTop: '20px',
  backgroundColor: baseColor,
  color: 'white',
  border: 'none',
  borderRadius: '3px',
  transition: shortTransition,
  cursor: 'pointer',
  '@media': {
    'screen and (max-width: 768px)': {
      height: '35px',
      marginTop: '10px',
      fontSize: '0.8rem',
    },
  },
})

export const disabled = style({
  cursor: 'not-allowed',
})
