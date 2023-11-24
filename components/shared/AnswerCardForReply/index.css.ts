import { gray, lightGray } from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const answerCardForReply = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  listStyle: 'none',
  padding: '20px',
  margin: '10px 0',
  boxShadow: `0 0 5px 5px ${lightGray}`,
  overflowWrap: 'break-word',
  textAlign: 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '10px',
      margin: '10px 0',
      boxShadow: `0 0 3px 3px ${lightGray}`,
    },
  },
})

export const question = style({
  width: '70%',
  paddingBottom: '16px',
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSize: '1rem',
  borderBottom: `3px dashed ${gray}`,
  '@media': {
    'screen and (max-width: 768px)': {
      width: '90%',
      margin: '5px 0 0',
      fontSize: '1rem',
    },
  },
})

export const answer = style({
  width: '70%',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '90%',
      margin: '16px 0 5px',
    },
  },
})
