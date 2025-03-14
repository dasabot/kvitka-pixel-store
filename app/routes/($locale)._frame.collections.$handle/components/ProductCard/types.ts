import { MediaImage } from '@shopify/hydrogen/storefront-api-types'
import { MoneyFragment } from 'storefrontapi.generated'

export type ProductCardProps = {
  title: string
  price: { amount: string; currencyCode: string }
  image: any
}
