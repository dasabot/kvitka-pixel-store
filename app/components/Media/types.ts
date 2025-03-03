import { MediaFile } from '@shopify/hydrogen'
import { ComponentProps } from 'react'
import { Image } from '@shopify/hydrogen/storefront-api-types'

export type MediaProps = {
  className?: string
  data:
    | ComponentProps<typeof MediaFile>['data']
    | (Partial<Omit<Image, '__typename'>> & { __typename: 'Image' })
    | undefined
    | null
  mediaOptions?: ComponentProps<typeof MediaFile>['mediaOptions']
}
