import { bgAnimation } from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const suspenseCardWrapper = style({
  width: '100%',
  height: 'auto',
  aspectRatio: '40 / 21',
})

export const suspenseCard = style({
  position: 'relative',
  width: 'calc(100% / 1200 * 1160)',
  height: 'calc(100% / 630 * 564)',
  background: '#ddd',
  margin: '0 auto ',
  marginTop: 'calc(100% / 1200 * 25)',
  borderRadius: '15px',
  overflow: 'hidden',
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
})
