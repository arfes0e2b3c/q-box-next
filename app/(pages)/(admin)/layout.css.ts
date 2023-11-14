import { style } from '@vanilla-extract/css'

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
})

export const isLoginText = style({
  fontSize: '1.5rem',
  margin: '10px 0',
})
