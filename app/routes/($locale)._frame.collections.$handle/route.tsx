import { useLoaderData } from '@remix-run/react'
import { Metaobject } from '@shopify/hydrogen/storefront-api-types'
import { LoaderFunctionArgs, json } from '@shopify/remix-oxygen'
import { COLLECTION_QUERY } from '~/graphql/collection'
import { RenderSections, fetchSectionData } from '~/helpers/sections'
import { makeCacheShortEdge } from '~/lib/cache'
import Collection from '~/sections/Collection'
import { CollectionProps } from '~/sections/Collection/types'
import HeroBanner from '~/sections/HeroBanner'
import { LoaderData } from '~/types/remix'

export async function loader({
  params: { handle, lang },
  context: { storefront, admin, session, customerAccount },
  request: { url },
}: LoaderFunctionArgs) {
  const { country, language } = storefront.i18n
  const queryParams = {
    cache: makeCacheShortEdge(storefront),
    variables: { country, language, handle: handle || '' },
  }

  const { collection } = await storefront.query(COLLECTION_QUERY, queryParams)

  // if (!collection) {
  //   throw new Response('Collection not found', { status: 404 })
  // }

  const sectionTypes = collection?.sections?.references?.nodes as Partial<Metaobject>[]

  const sections = sectionTypes
    ? await Promise.all(sectionTypes?.map((section) => fetchSectionData(storefront, section)))
    : null

  return json({ collection, sections })
}

const CollectionPage = () => {
  const { collection, sections } = useLoaderData() as LoaderData['collection']
  const heroBanner = collection?.collectionHero?.reference || null
  console.log('collection', collection)
  return (
    <>
      {heroBanner ? <HeroBanner {...heroBanner} /> : null}
      <Collection {...(collection as Required<CollectionProps>)} />

      {sections?.map((section) => (
        <RenderSections key={section?.metaobject?.id} sectionData={section?.metaobject} />
      ))}
    </>
  )
}

export default CollectionPage
