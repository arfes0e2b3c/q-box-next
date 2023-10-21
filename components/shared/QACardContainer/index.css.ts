import { baseTransition } from '@/consts'
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
  marginLeft: '10px',
  borderRadius: '5px',
  color: 'white',
  whiteSpace: 'nowrap',
})

export const answered = style({
  backgroundColor: 'rgb(0, 74, 169)',
  border: '2px solid rgba(0, 24, 85, 0.7)',
})

export const requirement = style({
  backgroundColor: 'rgb(255, 222, 103)',
  border: '2px solid rgba(0205, 172, 53, 0.7)',
  color: '#666',
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
})

export const repliesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',
})
