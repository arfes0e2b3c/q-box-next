import { bgAnimation } from '@/consts/styles.css'
import { style } from '@vanilla-extract/css'

export const suspenseCard = style({
  position: 'relative',
  width: '100%',
  height: 'auto',
  aspectRatio: '40 / 21',
  background: '#ddd',
  marginTop: '10px',
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
