import Container from '~/components/Container'
import { HeaderProps } from './types'
import NavLinkDropDown from './components/NavLinkDropDown'
import { useState } from 'react'
import searchIcon from 'app/assets/search-icon1.png'
import accountIcon from 'app/assets/account-icon1.png'
import emptyCartIcon from 'app/assets/shopping-cart-empty1.png'

const Header = ({ menu }: HeaderProps) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null)
  const isMenuOpened = typeof activeMenuIndex === 'number'

  return (
    <div className="sticky top-0 left-0 bg-white/50  shadow-[2px_-2px_10px_rgba(3,3,3,0.3)] h-[84px] max-h-[84px] flex items-center justify-start">
      <Container className="flex items-center justify-between">
        <a className="w-[100px] h-[50px] bg-amber-200 block">logo</a>
        <nav className="flex items-center justify-center">
          <ul className="flex justify-center items-center gap-8">
            {menu?.items.map((item, index) => (
              //Розібратись з індексами, вони є у кожного елемента в масиві, тобто на кодний меп є свої індекси і їх треба правильно прокидувати в взалежності від того яке меню відкрите
              <NavLinkDropDown
                navItem={item}
                activeMenuIndex={activeMenuIndex}
                setActiveMenuIndex={setActiveMenuIndex}
                isMenuOpened={isMenuOpened}
              ></NavLinkDropDown>
            ))}
          </ul>
        </nav>
        <ul className="flex gap-[12px]">
          <li>
            <button className="size-[28px] px-[3px] hover:bg-[rgba(232,232,232,0.59)]">
              <img src={searchIcon} className="size-full" />
            </button>
          </li>
          <li>
            <button className="size-[28px] px-[3px] hover:bg-[rgba(232,232,232,0.59)]">
              <img src={accountIcon} className="size-full" />
            </button>
          </li>
          <li>
            <button className="size-[28px] px-[3px] hover:bg-[rgba(232,232,232,0.59)]">
              <img src={emptyCartIcon} className="size-full" />
            </button>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default Header
