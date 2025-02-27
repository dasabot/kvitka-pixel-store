export const REGIONAL_SETTINGS = `#graphql
fragment RegionalSettings on Metaobject {
  id
  headerHandle: field(key: "header_menu_handle") {
    value
  }
  footerHandle: field(key: "footer_menu_handle") {
    value
  }
}` as const

export const SITE_SETTINGS_QUERY = `#graphql
  query SiteSettings($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    localization {
      market {
        id
        regionalSettings: metafield(namespace: "custom", key: "regional_settings") {
          reference {
            ... on Metaobject {
              headerMenu: field(key: "header_menu_handle") {
                value
              }

              footerMenu: field(key: "footer_menu_handle") {
                value
              }
            }
          }
        }
      }
    }
  }
` as const

export const ROOT_LOCALIZATION_QUERY = `#graphql
  query RootLocalization(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    shop {
      ...Shop
    }
    localization {
      market {
        ...MarketInfo
      }
    }
  }

  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }

  fragment MarketInfo on Market {
    id
    handle
    regionalSettings: metafield(namespace: "custom", key: "regional_settings") {
      reference {
        ...RegionalSettings
      }
    }
    name: metafield(namespace: "custom", key: "market_display_name"){
      value
    }
  }
  ${REGIONAL_SETTINGS}
` as const

export const LAYOUT_QUERY = `#graphql
  query Layout (
    $country: CountryCode
    $language: LanguageCode
    $headerMenuHandle: String!
  ) @inContext(country: $country, language: $language) {
    shop {
      name
      description
    }
    localization {
      country {
        name
        isoCode
        currency {
          isoCode
          name
          symbol
        }
      }
      language {
        name
        isoCode
      }
    }
    headerMenu: menu(handle: $headerMenuHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
        }
      }
    }
  }

  fragment MenuItem on MenuItem {
    id
    title
    type
    url
  }
` as const

// export const HOMEPAGE_QUERY = `#graphql
//   query Homepage (
//     $country: CountryCode
//     $language: LanguageCode
//   ) @inContext(country: $country, language: $language) {
//     localization {
//       country {
//         name
//         isoCode
//         currency {
//           isoCode
//           name
//           symbol
//         }
//       }
//     }
//   }
// }` as const
