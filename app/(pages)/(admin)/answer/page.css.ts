import { fontXl, fontLg, fontMd, fontSm, baseColorRed } from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const page = style({
  width: '80%',
  paddingTop: '20px',
  margin: '0 auto',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const title = style({
  margin: '20px 0 0',
  textAlign: 'center',
  fontSize: fontXl,
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: fontLg,
    },
  },
})

export const twitterApiRequestCount = style({
  margin: '10px 0 0',
  textAlign: 'center',
  fontSize: fontMd,
  color: '#666',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: fontSm,
    },
  },
})

export const limit = style({
  color: baseColorRed,
})

export const pageInner = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0',
  margin: '10px 0 20px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const noMoreResult = style({
  textAlign: 'center',
})
