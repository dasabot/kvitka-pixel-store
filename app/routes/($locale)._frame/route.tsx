import { LoaderFunctionArgs } from '@shopify/remix-oxygen'
import { SiteSettingsQuery } from 'storefrontapi.generated'
import { LAYOUT_QUERY, SITE_SETTINGS_QUERY } from '~/graphql/layout'
import FrameLayout from './sections/FrameLayout'
import { Outlet } from '@remix-run/react'

export async function loader({ context: { storefront } }: LoaderFunctionArgs) {
  const { country, language } = storefront.i18n

  const siteSettingsQueryParams = {
    cache: storefront.CacheShort(),
    variables: { country, language },
    //https://github.com/Shopify/storefront-api-feedback/discussions/35
    storefrontApiVersion: 'unstable',
  }

  const { localization } = await storefront.query<SiteSettingsQuery>(
    SITE_SETTINGS_QUERY,
    siteSettingsQueryParams,
  )

  const {
    headerMenu,
    // footerMenu
  } = localization?.market.regionalSettings?.reference ?? {}

  const layoutQueryParams = {
    cache: storefront.CacheShort(),
    variables: {
      country,
      language,
      headerMenuHandle: headerMenu?.value ?? '',
    },
  }

  const layout = await storefront.query(LAYOUT_QUERY, layoutQueryParams)

  console.log('layout1:', layout)
  return {
    layout,
  }
}

const MainFrame = () => (
  <FrameLayout>
    <Outlet />
  </FrameLayout>
)

export default MainFrame