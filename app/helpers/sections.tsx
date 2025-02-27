import { Storefront } from '@shopify/hydrogen'
import { Metaobject } from '@shopify/hydrogen/storefront-api-types'
import { SECTION_HERO_BANNER_QUERY } from '~/graphql/homepage'
import { makeCacheShortEdge } from '~/lib/cache'
import HeroBanner from '~/sections/HeroBanner'
import { SectionsQueries, SectionsTypes } from '~/types/sections'

export const fetchSectionData = (storefront: Storefront, section: Partial<Metaobject>) => {
  const { id, type = '' } = section
  const { country, language } = storefront.i18n
  const queryParams = {
    cache: makeCacheShortEdge(storefront),
    variables: { id, country, language },
  }
console.log('fetch section', section)
  const query = {
    HERO_BANNER_SECTION_: SECTION_HERO_BANNER_QUERY,
  }[type.toUpperCase()]

  if (!query) return Promise.resolve()

  return storefront.query<SectionsQueries>(query, queryParams)
}

export const RenderSections = ({ sectionData }: SectionsTypes) => {
  switch (sectionData?.type) {
    case 'hero_banner_section_':
      return <HeroBanner {...sectionData} />
    default:
      return <></>
  }
}
