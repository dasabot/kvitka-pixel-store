import type {IGraphQLConfig} from 'graphql-config';
import {getSchema} from '@shopify/hydrogen-codegen';

/**
 * GraphQL Config
 * @see https://the-guild.dev/graphql/config/docs/user/usage
 * @type {IGraphQLConfig}
 */
export default {
  projects: {
    default: {
      schema: 'node_modules/@shopify/hydrogen-react/storefront.schema.json',
      documents: [
        './*.{ts,tsx,js,jsx}',
        './app/**/*.{ts,tsx,js,jsx}',
      ],
    },

    // Add your own GraphQL projects here for CMS, Shopify Admin API, etc.
  },
} as IGraphQLConfig;



// import type {CodegenConfig} from '@graphql-codegen/cli';
// import {preset as storefrontPreset} from '@shopify/hydrogen-codegen';

// export default {
//   hooks: {afterOneFileWrite: ['prettier --write']},
//   overwrite: true,
//   generates: {
//     // eslint-disable-next-line @typescript-eslint/naming-convention
//     'storefrontapi.generated.d.ts': {
//       preset: storefrontPreset,
//       schema: 'node_modules/@shopify/hydrogen-react/storefront.schema.json',
//       documents: [
//         './*.{ts,tsx,js,jsx}',
//         './app/**/*.{ts,tsx,js,jsx}',
//       ],
//     },
//   },
// } as CodegenConfig;
