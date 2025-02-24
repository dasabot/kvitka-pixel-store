import { Dispatch, SetStateAction } from 'react'
import { MenuItemFragment } from 'storefrontapi.generated'

export type NavLinkDropDownProps = {
  navItem: MenuItemFragment & {
    items: MenuItemFragment[]
  }
  activeMenuIndex: number | null
  setActiveMenuIndex: Dispatch<SetStateAction<number | null>>
  isMenuOpened: boolean
}
