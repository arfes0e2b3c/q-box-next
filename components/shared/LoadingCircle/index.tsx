import { Oval } from 'react-loader-spinner'
import { loadingCircleContainer } from './index.css'

export const LoadingCircle = () => {
  return (
    <div className={loadingCircleContainer}>
      <Oval
        strokeWidth={5}
        width={60}
        height={60}
        color='#888'
        secondaryColor='#ddd'
        ariaLabel='loading'
      />
    </div>
  )
}
