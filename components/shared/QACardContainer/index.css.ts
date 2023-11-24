import { baseColor, baseTransition } from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const qaCardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
})

export const mainPost = style({
  width: '100%',
  textAlign: 'center',
})

export const createdAt = style({
  width: '120px',
  padding: '3px 10px',
  margin: '0',
  marginLeft: '3%',
  borderRadius: '5px',
  color: 'white',
  whiteSpace: 'nowrap',
  fontSize: '1rem',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100px',
      fontSize: '0.8rem',
    },
  },
})

export const answered = style({
  backgroundColor: 'rgb(0, 74, 169)',
  border: '2px solid rgba(0, 24, 85, 0.7)',
})

export const requirement = style({
  backgroundColor: 'rgb(255, 222, 103)',
  border: '2px solid rgba(205, 172, 53, 0.7)',
  color: '#666',
})

export const old = style({
  backgroundColor: 'rgb(255, 141, 198)',
  border: '2px solid rgba(205, 91, 148, 0.7)',
  color: 'white',
})

export const noResult = style({
  backgroundColor: baseColor,
  border: '2px solid #333',
  color: 'white',
})

export const cardButton = style({
  transition: baseTransition,
  cursor: 'pointer',
  ':hover': {
    opacity: '0.7',
  },
})

export const answer = style({
  width: '90%',
  margin: '0 auto',
  fontSize: '1.2rem',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '0.8rem',
    },
  },
})

export const repliesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',
  marginTop: '10px',
  '@media': {
    'screen and (max-width: 768px)': {},
  },
})
