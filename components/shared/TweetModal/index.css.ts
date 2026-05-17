import { style } from '@vanilla-extract/css'
import { baseColor, fontSm, fontXs, gray, lightGray, longTransition } from '@/consts/styles.css'

export const modal = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  padding: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.45)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '10px',
    },
  },
})

export const modalContent = style({
  backgroundColor: 'white',
  width: '90%',
  maxWidth: '600px',
  maxHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  boxShadow: `0 0 5px 5px ${lightGray}`,
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      maxHeight: '90vh',
      boxShadow: `0 0 3px 3px ${lightGray}`,
    },
  },
})

export const modalHeader = style({
  padding: '16px',
  borderBottom: `1px solid ${gray}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const modalTitle = style({
  margin: 0,
  color: baseColor,
  fontSize: fontSm,
})

export const modalBody = style({
  padding: '16px',
  overflowY: 'auto',
  flex: 1,
})

export const modalFooter = style({
  padding: '16px',
  borderTop: `1px solid ${gray}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px',
  '@media': {
    'screen and (max-width: 768px)': {
      alignItems: 'stretch',
      flexDirection: 'column',
      gap: '10px',
    },
  },
})

export const footerText = style({
  margin: 0,
  color: baseColor,
  fontSize: fontXs,
})

export const closeButton = style({
  background: 'none',
  border: `1px solid ${gray}`,
  borderRadius: '5px',
  width: '32px',
  height: '32px',
  color: baseColor,
  fontSize: '20px',
  lineHeight: 1,
  cursor: 'pointer',
  transition: longTransition,
  ':hover': {
    backgroundColor: baseColor,
    borderColor: baseColor,
    color: 'white',
  },
})

export const tweetText = style({
  width: '100%',
  margin: 0,
  padding: '12px',
  border: `2px solid ${lightGray}`,
  borderRadius: '5px',
  color: baseColor,
  fontSize: fontSm,
  whiteSpace: 'pre-wrap',
  overflowWrap: 'break-word',
})

export const copyButton = style({
  display: 'grid',
  placeContent: 'center',
  flexShrink: 0,
  width: '100px',
  height: '40px',
  background: 'none',
  color: baseColor,
  border: `1px solid ${gray}`,
  borderRadius: '5px',
  cursor: 'pointer',
  transition: longTransition,
  ':hover': {
    backgroundColor: baseColor,
    borderColor: baseColor,
    color: 'white',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const openXButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '100px',
  height: '40px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: baseColor,
  color: 'white',
  textDecoration: 'none',
  transition: longTransition,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'rgba(51, 51, 51, 0.8)',
    color: 'white',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const tweetItem = style({
  display: 'grid',
  gridTemplateColumns: '1fr 100px',
  alignItems: 'flex-start',
  gap: '12px',
  marginBottom: '16px',
  ':last-child': {
    marginBottom: 0,
  },
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '8px',
    },
  },
})

export const tweetActions = style({
  display: 'grid',
  gap: '8px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const footerButton = style({
  display: 'grid',
  placeContent: 'center',
  width: '100px',
  height: '40px',
  border: `1px solid ${gray}`,
  borderRadius: '5px',
  background: 'none',
  color: baseColor,
  transition: longTransition,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: baseColor,
    borderColor: baseColor,
    color: 'white',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})
