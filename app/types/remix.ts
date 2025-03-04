import { ShouldRevalidateFunction } from '@remix-run/react'
import { TypedDeferredData } from '@remix-run/server-runtime'
import { TypedResponse } from '@shopify/remix-oxygen'
// import { JsonifyObject } from 'type-fest/source/jsonify'

import { loader as rootLoader } from '~/root'
import { loader as frameLoader } from '~/routes/($locale)._frame/route'
import { loader as collectionLoader } from '~/routes/($locale)._frame.collections.$handle/route'

export type ExtractDeferredLoaderDataType<
  T extends (P: any) => Promise<Pick<TypedDeferredData<{ [K: string]: any }>, 'data'>>,
> = Pick<Awaited<ReturnType<T>>, 'data'>['data']

export type ExtractJSONLoaderDataType<
  T extends (P: any) => Promise<TypedResponse<{ [K: string]: any }>>,
> = Awaited<ReturnType<Pick<Awaited<ReturnType<T>>, 'json'>['json']>>

export type LoaderData = {
  root: ExtractDeferredLoaderDataType<typeof rootLoader>
  frame: ExtractJSONLoaderDataType<typeof frameLoader>
  collection: ExtractJSONLoaderDataType<typeof collectionLoader>
}

export type ShouldRevalidateFunctionArgs = Parameters<ShouldRevalidateFunction>[0]

/**
 * We need this type because `JsonifyObject<SeoConfig>` is incompatible with `getSeoMeta` which expects `SeoConfig`
 * It's unclear which party should fix this (`getSeoMeta`, `JsonifyObject` or `Typescript`... probably `getSeoMeta`)
 * but right now types are broken because of this. Even the hydrogen-demo-store is not typing this correctly:
 * https://github.com/search?q=repo%3AShopify/hydrogen-demo-store%20getSeoMeta&type=code
 * What this solution allows is for us to cast `data.seo` to `SeoConfig` without explicitly doing so,
 * which is better than the alternatives (casting to SeoConfig or any).
 */
// export type ExtractJsonifyType<T> = T extends JsonifyObject<infer U> ? U : never
