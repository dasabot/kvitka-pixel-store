import { HERO_BANNER_FRAGMENT } from './sections'

export const COLLECTION_PRODUCT_VARIANT_FRAGMENT = `#graphql
fragment CollectionProductVariant on ProductVariant {
  id
  title
  price {
    currencyCode
    amount
  }
  compareAtPrice {
    currencyCode
    amount
  }

}
` as const

export const COLLECTION_PRODUCT_CARD_FRAGMENT = `#graphql
fragment CollectionProductCard on Product {
  id
  title
  handle
  productType
  featuredImage {
    __typename
    url
    height
    width
    altText
  }
  images (first: 10) {
      nodes  {
        __typename
        altText
        height
        width
        url
      }
  }
  variants(first: 20) {
    nodes {
      ...CollectionProductVariant
    }
  }
}
${COLLECTION_PRODUCT_VARIANT_FRAGMENT}
` as const

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
    __typename
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
      ...CollectionProductCard
    }
  }
  collectionHero:metafield(namespace:"custom",key:"collection_hero") {
    reference {
      ...HeroBanner
    }
  }
}
${HERO_BANNER_FRAGMENT}
${COLLECTION_PRODUCT_CARD_FRAGMENT}
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
