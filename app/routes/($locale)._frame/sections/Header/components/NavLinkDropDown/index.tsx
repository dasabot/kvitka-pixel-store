import { Link } from '@remix-run/react'
import { NavLinkDropDownProps } from './types'
import { MenuItemFragment } from 'storefrontapi.generated'

const NavLinkDropDown = ({
  navItem,
  activeMenuIndex,
  setActiveMenuIndex,
  isMenuOpened,
}: NavLinkDropDownProps) => {
  const { title, url, items } = navItem
  return (
    <div className="relative group">
      <Link className="block py-[4px]" to={url || '/'}>
        {title}
      </Link>
      {items.length ? (
        <ul className="hidden absolute top-8 bg-white border border-[#030303] shadow-[2px_2px_0px_rgba(0,0,0,0.8)] min-w-[100px] w-fit px-2 py-2 group-hover:block">
          {items.map(({ url, title }: MenuItemFragment) => (
            <li className="px-2 py-0 hover:bg-[rgba(232,232,232,0.59)]">
              <Link className="whitespace-nowrap cursor-pointer py-[3px] " to={url || ''}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default NavLinkDropDown
