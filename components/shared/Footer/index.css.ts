import { lightGray, pcFooterHeight, spFooterHeight } from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const footer = style({
  width: '100%',
  height: pcFooterHeight,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  borderTop: `1px solid ${lightGray}`,
  '@media': {
    'screen and (max-width: 768px)': {
      height: spFooterHeight,
    },
  },
})

export const footerImageSection = style({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  overflow: 'hidden',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '70px',
      height: '70px',
    },
  },
})

export const footerTextSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px',
})

export const footerTitle = style({
  margin: '0',
  fontSize: '1.5rem',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '1.2rem',
    },
  },
})

export const footerRightsText = style({
  margin: '0',
  fontSize: '1rem',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '0.8rem',
    },
  },
})
