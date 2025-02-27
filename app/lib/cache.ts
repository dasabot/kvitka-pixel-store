import { Storefront } from '@shopify/hydrogen'

type CacheOptions = Parameters<Storefront['CacheCustom']>[0]

const makeCacheEdge = (storefront: Storefront, cacheOptions: CacheOptions) =>
  storefront.CacheCustom({ mode: 'public', sMaxAge: cacheOptions.maxAge, ...cacheOptions })

export const makeCacheShortEdge = (storefront: Storefront) =>
  makeCacheEdge(storefront, {
    maxAge: 1,
    staleWhileRevalidate: 9,
  })

export const makeCacheMediumEdge = (storefront: Storefront) =>
  makeCacheEdge(storefront, {
    maxAge: 60,
    staleWhileRevalidate: 3540,
  })

export const makeCacheLongEdge = (storefront: Storefront) =>
  makeCacheEdge(storefront, {
    maxAge: 3600,
    staleWhileRevalidate: 82800,
  })
