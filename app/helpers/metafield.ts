import { ParsedMetafields, parseMetafield } from '@shopify/hydrogen'
import {
  Metafield as MetafieldBaseType,
  MetaobjectField,
} from '@shopify/hydrogen/storefront-api-types'
import { PartialDeep } from 'type-fest'

type metafieldType = PartialDeep<MetaobjectField | MetafieldBaseType> | undefined | null

export const booleanMetafield = (metafield: metafieldType) => {
  if (metafield == null) return undefined

  const { value, type } = metafield

  const { parsedValue } = parseMetafield<ParsedMetafields['boolean']>({
    value: value ?? undefined,
    type: type ?? 'boolean',
  })

  return parsedValue ? true : false
}
