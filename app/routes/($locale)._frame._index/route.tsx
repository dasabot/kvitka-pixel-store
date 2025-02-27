import { useLoaderData } from '@remix-run/react'
import { Metaobject } from '@shopify/hydrogen/storefront-api-types'
import { LoaderFunctionArgs } from '@shopify/remix-oxygen'
import { countries } from '~/graphql/data/countries'
import { HOMEPAGE_QUERY } from '~/graphql/homepage'
import { RenderSections, fetchSectionData } from '~/helpers/sections'
import { makeCacheShortEdge } from '~/lib/cache'

export async function loader({
  context: { storefront },
  params: { lang },
  request: { url },
}: LoaderFunctionArgs) {
  const { pathname } = new URL(url)
  const isLangInvalid = lang && !Object.keys(countries).includes(`/${lang}`)

  if (isLangInvalid) {
    throw new Response(`${pathname} not found`, {
      status: 404,
    })
  }

  const { country, language } = storefront.i18n
  const queryParams = {
    cache: makeCacheShortEdge(storefront),
    variables: { country, language },
  }
  const {
    localization: { market },
  } = await storefront.query(HOMEPAGE_QUERY, queryParams)

  let homepage = market?.regionalSettings?.reference?.homepage?.reference
  const sectionTypes = homepage?.sections?.references?.nodes

  const sections = sectionTypes
    ? await Promise.all(sectionTypes?.map((section) => fetchSectionData(storefront, section)))
    : null

  return {
    sections,
  }
}

export default function Homepage() {
  const { sections } = useLoaderData<typeof loader>()
  
  return (
    <>
      {sections?.map((section) =>
        section ? (
          <RenderSections key={section.metaobject?.id} sectionData={section.metaobject} />
        ) : null,
      )}
    </>
  )
}
