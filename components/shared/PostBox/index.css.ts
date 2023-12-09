import {
  baseColor,
  baseTransition,
  fontLg,
  fontMd,
  fontSm,
  fontXs,
  gray,
  shortTransition,
} from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const postBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  marginBottom: '10px',
  overflow: 'hidden',
  '@media': {
    'screen and (max-width: 768px)': {
      marginTop: '10px',
    },
  },
})

export const postBoxTitle = style({
  margin: '0px auto',
  fontSize: fontLg,
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: fontMd,
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
  fontSize: fontSm,
  transition: baseTransition,
  ':focus': {
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      height: '60px',
      padding: '10px 20px',
      fontSize: fontXs,
    },
  },
})

export const noticeMessage = style({
  margin: '0',
  marginTop: '10px',
  fontSize: fontSm,
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: fontXs,
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
      fontSize: fontXs,
    },
  },
})

export const disabled = style({
  cursor: 'not-allowed',
})
