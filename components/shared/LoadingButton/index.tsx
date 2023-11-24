import { baseFont } from '@/consts/fonts'
import { baseColor } from '@/consts/styles.css'
import { Oval } from 'react-loader-spinner'

export const LoadingButton = ({
  children,
  isLoading,
  onClick,
  style,
}: {
  children: React.ReactNode
  isLoading: boolean
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined) => void
  style: string
}) => {
  return (
    <button
      className={[style, baseFont.className].join(' ')}
      disabled={isLoading}
      onClick={() => onClick()}
    >
      {isLoading ? (
        <Oval
          strokeWidth={'5'}
          height='25'
          width='25'
          ariaLabel='loading'
          color='white'
          secondaryColor={baseColor}
          wrapperStyle={{ cursor: 'not-allowed' }}
        />
      ) : (
        children
      )}
    </button>
  )
}
