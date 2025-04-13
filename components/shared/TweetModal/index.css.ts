import { style } from '@vanilla-extract/css'

export const modal = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
})

export const modalContent = style({
  backgroundColor: 'white',
  borderRadius: '8px',
  width: '90%',
  maxWidth: '600px',
  maxHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
})

export const modalHeader = style({
  padding: '16px',
  borderBottom: '1px solid #eee',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const modalBody = style({
  padding: '16px',
  overflowY: 'auto',
  flex: 1,
})

export const modalFooter = style({
  padding: '16px',
  borderTop: '1px solid #eee',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const closeButton = style({
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
})

export const tweetText = style({
  margin: '0 0 8px 0',
  padding: '12px',
  backgroundColor: '#f5f8fa',
  borderRadius: '4px',
  border: '1px solid #e1e8ed',
})

export const copyButton = style({
  padding: '4px 12px',
  backgroundColor: '#1da1f2',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginBottom: '16px',
  ':hover': {
    backgroundColor: '#0c85d0',
  },
})

export const copiedButton = style({
  padding: '4px 12px',
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginBottom: '16px',
  ':hover': {
    backgroundColor: '#388e3c',
  },
})

export const tweetItem = style({
  marginBottom: '16px',
})
