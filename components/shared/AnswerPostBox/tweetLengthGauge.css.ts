import { baseColor, baseColorLight, baseColorRed } from '@/consts/styles.css'
import { createVar, style } from '@vanilla-extract/css'
export const strokePercent = createVar()
export const strokePercentWithPx = createVar()

const stroke = 3

export const gauge = style({
  position: 'relative',
  width: `calc(40px + ${stroke * 2}px)`,
  height: `calc(40px + ${stroke * 2}px)`,
  borderRadius: '50%',
  color: baseColor,
  transition: '.3s',
})

export const svg = style({
  width: '100%',
  height: '100%',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      height: 'auto',
      aspectRatio: '1',
    },
  },
})

export const circleBg = style({
  width: '100%',
  height: '100%',
  fill: 'none',
  stroke: baseColorLight,
  strokeWidth: `calc(${stroke}px * 2)`,
  transformOrigin: 'center',
  transform: `translate(${stroke}px, -${stroke}px) rotateZ(-90deg)`,
})

export const over = style({
  stroke: baseColorRed,
  color: baseColorRed,
})

export const circleMain = style({
  width: '100%',
  height: '100%',
  fill: 'none',
  strokeWidth: `calc(${stroke}px * 2)`,
  transformOrigin: 'center',
  transform: `translate(${stroke}px, -${stroke}px) rotateZ(-90deg)`,
  strokeDasharray: `calc(40 * ${Math.PI})`,
  strokeDashoffset: `calc(40 * ${Math.PI} * (100 - ${strokePercent}) / 100)`,
  stroke: baseColor,
  transition: '.3s',
  '@media': {
    'screen and (max-width: 768px)': {
      strokeDasharray: `calc(100% * ${Math.PI})`,
      strokeDashoffset: `calc(100% * ${Math.PI} * (100 - ${strokePercent}) / 100)`,
    },
  },
})

export const countText = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  margin: '0',
})
