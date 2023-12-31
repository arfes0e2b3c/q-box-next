import { gray } from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const qAListContainer = style({
  width: '100%',
  padding: '0',
  marginBlock: '20px 0',
  '@media': {
    'screen and (max-width: 768px)': {
      marginBlock: '10px 0',
    },
  },
})

export const qAListItem = style({
  listStyle: 'none',
  padding: '20px 10px',
  marginTop: '20px',
  boxShadow: `0 0 5px 2px ${gray}`,
  borderRadius: '10px',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '10px 5px',
      margin: '10px auto 0',
      boxShadow: `0 0 3px 1px ${gray}`,
    },
  },
})
