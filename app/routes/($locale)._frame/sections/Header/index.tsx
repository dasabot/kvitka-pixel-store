import { HeaderProps } from './types'


const Header = ({ menu }: HeaderProps) => {
  console.log(menu)
  return <h1 className='text-3xl font-bold underline'>my header</h1>
}

export default Header
