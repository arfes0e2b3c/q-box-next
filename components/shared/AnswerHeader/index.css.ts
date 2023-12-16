import {
  pcHeaderHeight,
  spHeaderHeight,
  baseTransition,
  lightGray,
  gray,
  baseColor,
  baseColorRed,
} from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const header = style({
  position: 'fixed',
  top: '0',
  zIndex: '1000',
  display: 'grid',
  gridTemplateColumns: '20% 60% 20%',
  width: '100%',
  height: pcHeaderHeight,
  backgroundColor: 'white',
  boxShadow: `0 0 10px 5px ${gray}`,
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
      height: spHeaderHeight,
    },
  },
})

export const linkToHome = style({
  display: 'grid',
  placeContent: 'center',
  width: '100%',
  backgroundColor: lightGray,
  color: baseColor,
  textDecoration: 'none',
  userSelect: 'none',
  transition: baseTransition,
  ':hover': {
    backgroundColor: baseColor,
    color: 'white',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      borderRight: '1px solid #ccc',
    },
  },
})

export const appTitleContainer = style({
  display: 'grid',
  placeContent: 'center',
  width: '100%',
  height: 'auto',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    },
  },
})

export const appTitle = style({
  margin: '0',
  cursor: 'pointer',
  userSelect: 'none',
})

export const noBorder = style({
  '@media': {
    'screen and (max-width: 768px)': {
      border: 'none',
    },
  },
})

export const danger = style({
  color: baseColorRed,
  fontWeight: 'bold',
})
