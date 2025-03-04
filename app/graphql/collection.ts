import { PRODUCT_FRAGMENT } from './product'
import { HERO_BANNER_FRAGMENT } from './sections'
export const COLLECTION_FRAGMENT = `#graphql
fragment Collection on Collection {
  id
  handle
  seo {
    title
    description
  }
  title
  description
  descriptionHtml
  image {
    url
    altText
    width
    height
  }
  sections:metafield(namespace:"custom",key:"sections"){
    references(first: 50) {
      nodes {
        ... on Metaobject {
          type
          id
        }
      }
    }
  }
  products(first: 250) {
    nodes {
      ...Product
    }
  }
  collectionHero:metafield(namespace:"custom",key:"collection_hero") {
    reference {
      ...HeroBanner
    }
  }
}
${HERO_BANNER_FRAGMENT}
${PRODUCT_FRAGMENT}
` as const

export const COLLECTION_QUERY = `#graphql
query Collection(
    $handle: String!,
    $country: CountryCode,
    $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      ...Collection
    }
  }
  ${COLLECTION_FRAGMENT}
` as const
