/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types'

export type HomepageQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>
}>

export type HomepageQuery = {
  localization: {
    market: {
      regionalSettings?: StorefrontAPI.Maybe<{
        reference?: StorefrontAPI.Maybe<{
          homepage?: StorefrontAPI.Maybe<{
            reference?: StorefrontAPI.Maybe<{
              seo?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Seo, 'title' | 'description'>>
              sections?: StorefrontAPI.Maybe<{
                references?: StorefrontAPI.Maybe<{
                  nodes: Array<Pick<StorefrontAPI.Metaobject, 'type' | 'id'>>
                }>
              }>
            }>
          }>
        }>
      }>
    }
  }
}

export type SectionHeroBannerQueryVariables = StorefrontAPI.Exact<{
  id: StorefrontAPI.Scalars['ID']['input']
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>
}>

export type SectionHeroBannerQuery = {
  metaobject?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Metaobject, 'id' | 'type'> & {
      title?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
      subtitle?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
      image?: StorefrontAPI.Maybe<{
        reference?: StorefrontAPI.Maybe<
          { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
              image?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
              >
            }
        >
      }>
      mobileImage?: StorefrontAPI.Maybe<{
        reference?: StorefrontAPI.Maybe<
          { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
              image?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
              >
            }
        >
      }>
      hideOnMobile?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
      textPosition?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
    }
  >
}

export type RegionalSettingsFragment = Pick<StorefrontAPI.Metaobject, 'id'> & {
  headerHandle?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
  footerHandle?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
}

export type SiteSettingsQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>
}>

export type SiteSettingsQuery = {
  localization: {
    market: Pick<StorefrontAPI.Market, 'id'> & {
      regionalSettings?: StorefrontAPI.Maybe<{
        reference?: StorefrontAPI.Maybe<{
          headerMenu?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
          footerMenu?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
        }>
      }>
    }
  }
}

export type RootLocalizationQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>
}>

export type RootLocalizationQuery = {
  shop: Pick<StorefrontAPI.Shop, 'id' | 'name' | 'description'> & {
    primaryDomain: Pick<StorefrontAPI.Domain, 'url'>
    brand?: StorefrontAPI.Maybe<{
      logo?: StorefrontAPI.Maybe<{ image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>> }>
    }>
  }
  localization: {
    market: Pick<StorefrontAPI.Market, 'id' | 'handle'> & {
      regionalSettings?: StorefrontAPI.Maybe<{
        reference?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Metaobject, 'id'> & {
            headerHandle?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
            footerHandle?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
          }
        >
      }>
      name?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>
    }
  }
}

export type ShopFragment = Pick<StorefrontAPI.Shop, 'id' | 'name' | 'description'> & {
  primaryDomain: Pick<StorefrontAPI.Domain, 'url'>
  brand?: StorefrontAPI.Maybe<{
    logo?: StorefrontAPI.Maybe<{ image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>> }>
  }>
}

export type MarketInfoFragment = Pick<StorefrontAPI.Market, 'id' | 'handle'> & {
  regionalSettings?: StorefrontAPI.Maybe<{
    reference?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Metaobject, 'id'> & {
        headerHandle?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
        footerHandle?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
      }
    >
  }>
  name?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>
}

export type LayoutQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>
  headerMenuHandle: StorefrontAPI.Scalars['String']['input']
}>

export type LayoutQuery = {
  shop: Pick<StorefrontAPI.Shop, 'name' | 'description'>
  localization: {
    country: Pick<StorefrontAPI.Country, 'name' | 'isoCode'> & {
      currency: Pick<StorefrontAPI.Currency, 'isoCode' | 'name' | 'symbol'>
    }
    language: Pick<StorefrontAPI.Language, 'name' | 'isoCode'>
  }
  headerMenu?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Menu, 'id'> & {
      items: Array<
        Pick<StorefrontAPI.MenuItem, 'id' | 'title' | 'type' | 'url'> & {
          items: Array<Pick<StorefrontAPI.MenuItem, 'id' | 'title' | 'type' | 'url'>>
        }
      >
    }
  >
}

export type MenuItemFragment = Pick<StorefrontAPI.MenuItem, 'id' | 'title' | 'type' | 'url'>

export type ProductVariantFragment = Pick<
  StorefrontAPI.ProductVariant,
  'availableForSale' | 'id' | 'sku' | 'title'
> & {
  compareAtPrice?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>>
  image?: StorefrontAPI.Maybe<
    { __typename: 'Image' } & Pick<
      StorefrontAPI.Image,
      'id' | 'url' | 'altText' | 'width' | 'height'
    >
  >
  price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
  product: Pick<StorefrontAPI.Product, 'title' | 'handle'>
  selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
  unitPrice?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>>
}

export type ProductFragment = Pick<
  StorefrontAPI.Product,
  | 'id'
  | 'title'
  | 'vendor'
  | 'handle'
  | 'descriptionHtml'
  | 'description'
  | 'encodedVariantExistence'
  | 'encodedVariantAvailability'
> & {
  options: Array<
    Pick<StorefrontAPI.ProductOption, 'name'> & {
      optionValues: Array<
        Pick<StorefrontAPI.ProductOptionValue, 'name'> & {
          firstSelectableVariant?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.ProductVariant, 'availableForSale' | 'id' | 'sku' | 'title'> & {
              compareAtPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              >
              image?: StorefrontAPI.Maybe<
                { __typename: 'Image' } & Pick<
                  StorefrontAPI.Image,
                  'id' | 'url' | 'altText' | 'width' | 'height'
                >
              >
              price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              product: Pick<StorefrontAPI.Product, 'title' | 'handle'>
              selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
              unitPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
              >
            }
          >
          swatch?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.ProductOptionValueSwatch, 'color'> & {
              image?: StorefrontAPI.Maybe<{
                previewImage?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>>
              }>
            }
          >
        }
      >
    }
  >
  selectedOrFirstAvailableVariant?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.ProductVariant, 'availableForSale' | 'id' | 'sku' | 'title'> & {
      compareAtPrice?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>>
      image?: StorefrontAPI.Maybe<
        { __typename: 'Image' } & Pick<
          StorefrontAPI.Image,
          'id' | 'url' | 'altText' | 'width' | 'height'
        >
      >
      price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      product: Pick<StorefrontAPI.Product, 'title' | 'handle'>
      selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
      unitPrice?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>>
    }
  >
  adjacentVariants: Array<
    Pick<StorefrontAPI.ProductVariant, 'availableForSale' | 'id' | 'sku' | 'title'> & {
      compareAtPrice?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>>
      image?: StorefrontAPI.Maybe<
        { __typename: 'Image' } & Pick<
          StorefrontAPI.Image,
          'id' | 'url' | 'altText' | 'width' | 'height'
        >
      >
      price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      product: Pick<StorefrontAPI.Product, 'title' | 'handle'>
      selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
      unitPrice?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>>
    }
  >
  seo: Pick<StorefrontAPI.Seo, 'description' | 'title'>
}

export type ProductQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>
  handle: StorefrontAPI.Scalars['String']['input']
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>
  selectedOptions: Array<StorefrontAPI.SelectedOptionInput> | StorefrontAPI.SelectedOptionInput
}>

export type ProductQuery = {
  product?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.Product,
      | 'id'
      | 'title'
      | 'vendor'
      | 'handle'
      | 'descriptionHtml'
      | 'description'
      | 'encodedVariantExistence'
      | 'encodedVariantAvailability'
    > & {
      options: Array<
        Pick<StorefrontAPI.ProductOption, 'name'> & {
          optionValues: Array<
            Pick<StorefrontAPI.ProductOptionValue, 'name'> & {
              firstSelectableVariant?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.ProductVariant, 'availableForSale' | 'id' | 'sku' | 'title'> & {
                  compareAtPrice?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                  >
                  image?: StorefrontAPI.Maybe<
                    { __typename: 'Image' } & Pick<
                      StorefrontAPI.Image,
                      'id' | 'url' | 'altText' | 'width' | 'height'
                    >
                  >
                  price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                  product: Pick<StorefrontAPI.Product, 'title' | 'handle'>
                  selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
                  unitPrice?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
                  >
                }
              >
              swatch?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.ProductOptionValueSwatch, 'color'> & {
                  image?: StorefrontAPI.Maybe<{
                    previewImage?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>>
                  }>
                }
              >
            }
          >
        }
      >
      selectedOrFirstAvailableVariant?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.ProductVariant, 'availableForSale' | 'id' | 'sku' | 'title'> & {
          compareAtPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >
          image?: StorefrontAPI.Maybe<
            { __typename: 'Image' } & Pick<
              StorefrontAPI.Image,
              'id' | 'url' | 'altText' | 'width' | 'height'
            >
          >
          price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          product: Pick<StorefrontAPI.Product, 'title' | 'handle'>
          selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
          unitPrice?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>>
        }
      >
      adjacentVariants: Array<
        Pick<StorefrontAPI.ProductVariant, 'availableForSale' | 'id' | 'sku' | 'title'> & {
          compareAtPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >
          image?: StorefrontAPI.Maybe<
            { __typename: 'Image' } & Pick<
              StorefrontAPI.Image,
              'id' | 'url' | 'altText' | 'width' | 'height'
            >
          >
          price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          product: Pick<StorefrontAPI.Product, 'title' | 'handle'>
          selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
          unitPrice?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>>
        }
      >
      seo: Pick<StorefrontAPI.Seo, 'description' | 'title'>
    }
  >
}

export type HeroBannerFragment = Pick<StorefrontAPI.Metaobject, 'id' | 'type'> & {
  title?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
  subtitle?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
  image?: StorefrontAPI.Maybe<{
    reference?: StorefrontAPI.Maybe<
      { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
          image?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
          >
        }
    >
  }>
  mobileImage?: StorefrontAPI.Maybe<{
    reference?: StorefrontAPI.Maybe<
      { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
          image?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
          >
        }
    >
  }>
  hideOnMobile?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
  textPosition?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MetaobjectField, 'value'>>
}

export type MediaImageFragment = { __typename: 'MediaImage' } & Pick<
  StorefrontAPI.MediaImage,
  'id'
> & {
    image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>>
  }

export type VideoFragment = { __typename: 'Video' } & {
  sources: Array<
    Pick<StorefrontAPI.VideoSource, 'url' | 'width' | 'height' | 'mimeType' | 'format'>
  >
  previewImage?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Image, 'altText' | 'height' | 'width' | 'url'>
  >
}

export type MoneyFragment = Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>

export type CartLineFragment = Pick<StorefrontAPI.CartLine, 'id' | 'quantity'> & {
  attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>
  cost: {
    totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    amountPerQuantity: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    >
  }
  merchandise: Pick<
    StorefrontAPI.ProductVariant,
    'id' | 'availableForSale' | 'requiresShipping' | 'title'
  > & {
    compareAtPrice?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>>
    price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    image?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
    >
    product: Pick<StorefrontAPI.Product, 'handle' | 'title' | 'id' | 'vendor'>
    selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
  }
}

export type CartLineComponentFragment = Pick<
  StorefrontAPI.ComponentizableCartLine,
  'id' | 'quantity'
> & {
  attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>
  cost: {
    totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    amountPerQuantity: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    >
  }
  merchandise: Pick<
    StorefrontAPI.ProductVariant,
    'id' | 'availableForSale' | 'requiresShipping' | 'title'
  > & {
    compareAtPrice?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>>
    price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    image?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
    >
    product: Pick<StorefrontAPI.Product, 'handle' | 'title' | 'id' | 'vendor'>
    selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
  }
}

export type CartApiQueryFragment = Pick<
  StorefrontAPI.Cart,
  'updatedAt' | 'id' | 'checkoutUrl' | 'totalQuantity' | 'note'
> & {
  appliedGiftCards: Array<
    Pick<StorefrontAPI.AppliedGiftCard, 'lastCharacters'> & {
      amountUsed: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    }
  >
  buyerIdentity: Pick<StorefrontAPI.CartBuyerIdentity, 'countryCode' | 'email' | 'phone'> & {
    customer?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Customer, 'id' | 'email' | 'firstName' | 'lastName' | 'displayName'>
    >
  }
  lines: {
    nodes: Array<
      | (Pick<StorefrontAPI.CartLine, 'id' | 'quantity'> & {
          attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>
          cost: {
            totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            amountPerQuantity: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            >
          }
          merchandise: Pick<
            StorefrontAPI.ProductVariant,
            'id' | 'availableForSale' | 'requiresShipping' | 'title'
          > & {
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            >
            price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            image?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
            >
            product: Pick<StorefrontAPI.Product, 'handle' | 'title' | 'id' | 'vendor'>
            selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
          }
        })
      | (Pick<StorefrontAPI.ComponentizableCartLine, 'id' | 'quantity'> & {
          attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>
          cost: {
            totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            amountPerQuantity: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            >
          }
          merchandise: Pick<
            StorefrontAPI.ProductVariant,
            'id' | 'availableForSale' | 'requiresShipping' | 'title'
          > & {
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            >
            price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            image?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
            >
            product: Pick<StorefrontAPI.Product, 'handle' | 'title' | 'id' | 'vendor'>
            selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
          }
        })
    >
  }
  cost: {
    subtotalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    totalDutyAmount?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>>
    totalTaxAmount?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>>
  }
  attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>
  discountCodes: Array<Pick<StorefrontAPI.CartDiscountCode, 'code' | 'applicable'>>
}

interface GeneratedQueryTypes {
  '#graphql\nquery Homepage(\n    $country: CountryCode\n    $language: LanguageCode\n) @inContext(country: $country, language: $language) {\n    localization {\n      market {\n        regionalSettings: metafield(namespace: "custom", key: "regional_settings") {\n          reference {\n            ... on Metaobject {\n                homepage:field(key:"homepage") {\n                    reference {\n                      ...on Page {\n                        seo {\n                          title\n                          description\n                        }\n                        sections: metafield(namespace: "custom", key: "sections") {\n                          references(first: 50) {\n                            nodes {\n                              ... on Metaobject {\n                                type\n                                id\n                              }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n              }\n          }\n        }\n      }\n    }\n  }\n': {
    return: HomepageQuery
    variables: HomepageQueryVariables
  }
  '#graphql\n  query SectionHeroBanner(\n    $id: ID!,\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    metaobject(id: $id) {\n      ...HeroBanner\n    }\n  }\n  #graphql\nfragment HeroBanner on Metaobject {\n    id\n    type\n    title: field(key: "title") {\n        value\n      }\n      subtitle: field(key: "subtitle") {\n        value\n      }\n      image: field(key: "image") {\n        reference {\n          ...MediaImage\n          }\n        }\n      mobileImage: field(key: "mobile_image") {\n        reference {\n          ...MediaImage\n        }\n      }\n      hideOnMobile: field(key: "hide_on_mobile") {\n        value\n      }\n      textPosition: field(key: "text_position") {\n        value\n      }\n}\n#graphql\n  fragment MediaImage on MediaImage {\n    __typename\n    id\n    image {\n      altText\n      height\n      url\n      width\n    }\n  }\n\n \n': {
    return: SectionHeroBannerQuery
    variables: SectionHeroBannerQueryVariables
  }
  '#graphql\n  query SiteSettings($country: CountryCode, $language: LanguageCode)\n  @inContext(country: $country, language: $language) {\n    localization {\n      market {\n        id\n        regionalSettings: metafield(namespace: "custom", key: "regional_settings") {\n          reference {\n            ... on Metaobject {\n              headerMenu: field(key: "header_menu_handle") {\n                value\n              }\n\n              footerMenu: field(key: "footer_menu_handle") {\n                value\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n': {
    return: SiteSettingsQuery
    variables: SiteSettingsQueryVariables
  }
  '#graphql\n  query RootLocalization(\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    shop {\n      ...Shop\n    }\n    localization {\n      market {\n        ...MarketInfo\n      }\n    }\n  }\n\n  fragment Shop on Shop {\n    id\n    name\n    description\n    primaryDomain {\n      url\n    }\n    brand {\n      logo {\n        image {\n          url\n        }\n      }\n    }\n  }\n\n  fragment MarketInfo on Market {\n    id\n    handle\n    regionalSettings: metafield(namespace: "custom", key: "regional_settings") {\n      reference {\n        ...RegionalSettings\n      }\n    }\n    name: metafield(namespace: "custom", key: "market_display_name"){\n      value\n    }\n  }\n  #graphql\nfragment RegionalSettings on Metaobject {\n  id\n  headerHandle: field(key: "header_menu_handle") {\n    value\n  }\n  footerHandle: field(key: "footer_menu_handle") {\n    value\n  }\n}\n': {
    return: RootLocalizationQuery
    variables: RootLocalizationQueryVariables
  }
  '#graphql\n  query Layout (\n    $country: CountryCode\n    $language: LanguageCode\n    $headerMenuHandle: String!\n  ) @inContext(country: $country, language: $language) {\n    shop {\n      name\n      description\n    }\n    localization {\n      country {\n        name\n        isoCode\n        currency {\n          isoCode\n          name\n          symbol\n        }\n      }\n      language {\n        name\n        isoCode\n      }\n    }\n    headerMenu: menu(handle: $headerMenuHandle) {\n      id\n      items {\n        ...MenuItem\n        items {\n          ...MenuItem\n        }\n      }\n    }\n  }\n\n  fragment MenuItem on MenuItem {\n    id\n    title\n    type\n    url\n  }\n': {
    return: LayoutQuery
    variables: LayoutQueryVariables
  }
  '#graphql\n  query Product(\n    $country: CountryCode\n    $handle: String!\n    $language: LanguageCode\n    $selectedOptions: [SelectedOptionInput!]!\n  ) @inContext(country: $country, language: $language) {\n    product(handle: $handle) {\n      ...Product\n    }\n  }\n  #graphql\n  fragment Product on Product {\n    id\n    title\n    vendor\n    handle\n    descriptionHtml\n    description\n    encodedVariantExistence\n    encodedVariantAvailability\n    options {\n      name\n      optionValues {\n        name\n        firstSelectableVariant {\n          ...ProductVariant\n        }\n        swatch {\n          color\n          image {\n            previewImage {\n              url\n            }\n          }\n        }\n      }\n    }\n    selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {\n      ...ProductVariant\n    }\n    adjacentVariants (selectedOptions: $selectedOptions) {\n      ...ProductVariant\n    }\n    seo {\n      description\n      title\n    }\n  }\n  #graphql\n  fragment ProductVariant on ProductVariant {\n    availableForSale\n    compareAtPrice {\n      amount\n      currencyCode\n    }\n    id\n    image {\n      __typename\n      id\n      url\n      altText\n      width\n      height\n    }\n    price {\n      amount\n      currencyCode\n    }\n    product {\n      title\n      handle\n    }\n    selectedOptions {\n      name\n      value\n    }\n    sku\n    title\n    unitPrice {\n      amount\n      currencyCode\n    }\n  }\n\n\n': {
    return: ProductQuery
    variables: ProductQueryVariables
  }
}

interface GeneratedMutationTypes {}

declare module '@shopify/hydrogen' {
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
