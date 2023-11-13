import { assignInlineVars } from '@vanilla-extract/dynamic'

import { displayCount, isDisplayedRed } from '@/lib'
import {
  gauge,
  svg,
  strokePercent,
  strokePercentWithPx,
  circleBg,
  over,
  circleMain,
  countText,
} from './tweetLengthGauge.css'
import { twitterMaxLength } from '@/consts'

export const TweetLengthGauge = (props: { count: number }) => {
  const count = props.count
  const circleR = 20

  return (
    <div className={gauge}>
      <svg
        className={svg}
        style={assignInlineVars({
          [strokePercent]: `${(count / twitterMaxLength) * 100}`,
          [strokePercentWithPx]: `${(count / twitterMaxLength) * 100}px`,
        })}
      >
        <circle
          className={[circleBg, count > twitterMaxLength && over].join(' ')}
          cx={circleR}
          cy={circleR}
          r={circleR}
        ></circle>
        <circle className={circleMain} cx={circleR} cy={circleR} r={circleR}></circle>
      </svg>
      <p className={[countText, isDisplayedRed(count) && over].join(' ')}>{displayCount(count)}</p>
    </div>
  )
}
