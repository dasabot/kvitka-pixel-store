import { LinksFunction, LoaderFunctionArgs, defer } from '@shopify/remix-oxygen'
import { ROOT_LOCALIZATION_QUERY } from './graphql/layout'
import { LoaderData } from './types/remix'
import { Links, LiveReload, Meta, Outlet, Scripts, useLoaderData } from '@remix-run/react'
import { DEFAULT_LOCALE } from './lib/utils'

import { Seo, useNonce } from '@shopify/hydrogen'
import { cssBundleHref } from '@remix-run/css-bundle'
import './styles/app.css'
import appStyles from '~/styles/app.css?url'
import resetStyles from '~/styles/reset.css?url'
import tailwindStyles from '~/styles/tailwind.css?url'

export const links: LinksFunction = () => {
  const externalLinks = [
    { rel: 'stylesheet', href: appStyles },
    { rel: 'stylesheet', href: resetStyles },
    { rel: 'stylesheet', href: tailwindStyles },
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
  ]

  if (cssBundleHref) {
    externalLinks.unshift({ rel: 'stylesheet', href: cssBundleHref })
  }

  return externalLinks
}

export async function loader({ context: { storefront, session, env } }: LoaderFunctionArgs) {
  const { country, language } = storefront.i18n

  const fecthLocalization = storefront.query(ROOT_LOCALIZATION_QUERY, {
    variables: {
      country,
      language,
    },
    cache: storefront.CacheCustom({
      maxAge: 15,
      sMaxAge: 60 * 3,
      staleWhileRevalidate: 60 * 3,
    }),
  })

  const [{ localization, shop }] = await Promise.all([fecthLocalization])

  const data = {
    localization,
    session,
    selectedLocale: storefront.i18n,
    publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
  }

  return defer(data, {
    headers: {
      'Set-Cookie': await session.commit(),
    },
  })
}

const App = () => {
  const { selectedLocale } = useLoaderData() as LoaderData['root']
  const { language } = selectedLocale ?? DEFAULT_LOCALE

  const nonce = useNonce()

  return (
    <html lang={language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Links />
        <Meta />
      </head>
      <body>
        <Outlet />
        <div id="js-portal" />
        <Scripts nonce={nonce} />
      </body>
    </html>
  )
}

export default App
