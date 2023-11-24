import { baseColorLight, bgAnimation } from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const suspenseCardContainer = style({
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
  position: 'relative',
  width: '120px',
  padding: '3px 10px',
  overflow: 'hidden',
  margin: '0',
  marginLeft: '3%',
  borderRadius: '5px',
  fontSize: '1rem',
  backgroundColor: baseColorLight,
  border: `2px solid ${baseColorLight}`,
  ':after': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(135deg, transparent,20%, transparent, 40%, #e3e3e3,60%,transparent, 80%, transparent)',
    backgroundRepeat: 'no-repeat',
    animation: `${bgAnimation} 2s ease infinite`,
  },
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100px',
      fontSize: '0.8rem',
    },
  },
})

export const suspenseSentenceContainer = style({
  width: '90%',
  margin: '10px auto',
  fontSize: '1.2rem',
})

export const suspenseSentence = style({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '16px',
  marginTop: '8px',
  backgroundColor: baseColorLight,
  borderRadius: '8px',
  ':after': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(135deg, transparent,20%, transparent, 40%, #e3e3e3,60%,transparent, 80%, transparent)',
    backgroundRepeat: 'no-repeat',
    animation: `${bgAnimation} 2s ease infinite`,
  },
  '@media': {
    'screen and (max-width: 768px)': {
      height: '10px',
    },
  },
})
