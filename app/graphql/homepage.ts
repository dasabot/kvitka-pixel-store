import { HERO_BANNER_FRAGMENT } from "./sections"

export const HOMEPAGE_QUERY = `#graphql
query Homepage(
    $country: CountryCode
    $language: LanguageCode
) @inContext(country: $country, language: $language) {
    localization {
      market {
        regionalSettings: metafield(namespace: "custom", key: "regional_settings") {
          reference {
            ... on Metaobject {
                homepage:field(key:"homepage") {
                    reference {
                      ...on Page {
                        seo {
                          title
                          description
                        }
                        sections: metafield(namespace: "custom", key: "sections") {
                          references(first: 50) {
                            nodes {
                              ... on Metaobject {
                                type
                                id
                              }
                            }
                          }
                        }
                      }
                    }
                  }
              }
          }
        }
      }
    }
  }
` as const

export const SECTION_HERO_BANNER_QUERY = `#graphql
  query SectionHeroBanner(
    $id: ID!,
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    metaobject(id: $id) {
      ...HeroBanner
    }
  }
  ${HERO_BANNER_FRAGMENT}
` as const
