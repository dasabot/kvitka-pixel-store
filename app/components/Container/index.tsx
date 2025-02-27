import clsx from 'clsx'
import { ContainerProps } from './types'

const Container = ({ children, className, style }: ContainerProps) => (
  <div style={style} className={clsx(className, 'w-full py-0 px-[50px]')}>{children}</div>
)
export default Container
