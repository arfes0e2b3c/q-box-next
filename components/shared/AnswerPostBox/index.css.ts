import {
  baseColor,
  baseColorRed,
  baseTransition,
  fontSm,
  fontXs,
  lightGray,
  longTransition,
} from '@/consts/styles.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const answerPostBox = style({
  width: '100%',
  height: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '0',
  marginTop: '0',
  transition: baseTransition,
  overflow: 'hidden',
})

globalStyle(`${answerPostBox}.fade-enter`, {
  opacity: '0',
  height: '0',
  marginTop: '0',
})
globalStyle(`${answerPostBox}.fade-enter-active`, {
  opacity: '0',
  height: '0',
  marginTop: '10px',
})
globalStyle(`${answerPostBox}.fade-enter-done`, {
  opacity: '1',
  height: '150px',
  marginTop: '10px',
})
globalStyle(`${answerPostBox}.fade-exit-active`, {
  opacity: '1',
  height: '150px',
})
globalStyle(`${answerPostBox}.fade-exit-done`, {
  opacity: '0',
  height: '0',
})

export const textInput = style({
  resize: 'none',
  width: '80%',
  height: '70px',
  padding: '10px',
  outline: 'none',
  borderColor: lightGray,
  borderWidth: '2px',
  borderRadius: '10px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const alertText = style({
  color: baseColorRed,
  fontSize: fontSm,
  margin: '5px 0',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: fontXs,
    },
  },
})

export const buttonContainer = style({
  display: 'grid',
  gridTemplateColumns: '46px 1fr 1fr',
  alignItems: 'center',
  gap: '20px',
  '@media': {
    'screen and (max-width: 768px)': {
      gap: '10px',
    },
  },
})

export const button = style({
  display: 'grid',
  placeContent: 'center',
  width: '180px',
  height: '40px',
  border: 'none',
  color: 'white',
  transition: longTransition,
  cursor: 'pointer',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      fontSize: fontXs,
    },
  },
})

export const answered = style({
  backgroundColor: 'rgba(0, 74, 166, 1)',
  ':hover': {
    backgroundColor: 'rgba(0, 74, 166, 0.8)',
  },
})

export const requirement = style({
  color: baseColor,
  backgroundColor: 'rgba(255, 222, 103, 1)',
  ':hover': {
    backgroundColor: 'rgba(255, 222, 103, 0.8)',
  },
})
