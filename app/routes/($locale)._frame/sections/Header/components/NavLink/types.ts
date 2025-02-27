import { MenuItemFragment } from 'storefrontapi.generated'

export type NavLinkProps = {
  navItem: MenuItemFragment & {
    items: MenuItemFragment[]
  }
}
