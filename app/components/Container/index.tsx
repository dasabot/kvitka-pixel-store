import clsx from 'clsx'
import { ContainerProps } from './types'

const Container = ({ children, className, style }: ContainerProps) => (
  <div
    style={style}
    className={clsx(
      'w-full max-w-[1300px] mx-auto px-[50px] lg:max-w-[1560px] lg:px-[10px] lg:my-[10px] md:px-0 sm:px-[10px] sm:my-[10px]',
      className,
    )}
  >
    {children}
  </div>
)
export default Container
