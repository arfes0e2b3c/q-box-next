import { Oval } from 'react-loader-spinner'
import { loadingCircleContainer } from './index.css'
import { baseColorLight } from '@/consts/styles.css'

export const LoadingCircle = () => {
  return (
    <div className={loadingCircleContainer}>
      <Oval
        strokeWidth={5}
        width={60}
        height={60}
        color='#888'
        secondaryColor={baseColorLight}
        ariaLabel='loading'
      />
    </div>
  )
}
