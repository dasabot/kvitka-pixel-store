import {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import { SiteSettingsQuery } from 'storefrontapi.generated';
import { SITE_SETTINGS_QUERY } from '~/graphql/layout';

export async function loader({
  context: {storefront, session},
}: LoaderFunctionArgs) {
  const {country, language} = storefront.i18n;

  const siteSettingsQueryParams = {
    cache: storefront.CacheShort(),
    variables: {country, language},
    //https://github.com/Shopify/storefront-api-feedback/discussions/35
    storefrontApiVersion: 'unstable',
  };

  // const {localization} = await storefront.query<SiteSettingsQuery>(
  //   SITE_SETTINGS_QUERY,
  //   siteSettingsQueryParams,
  // );

  // const {
  //   headerMenu,
  //   // footerMenu
  // } = localization?.market?.regionalSettings?.reference ?? {};

  // console.log(headerMenu);

  return <>hello1</>
}
