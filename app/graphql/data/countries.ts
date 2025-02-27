import {
  CountryCode,
  CurrencyCode,
  LanguageCode,
} from '@shopify/hydrogen/storefront-api-types';

export type Locale = {
  language: LanguageCode;
  country: CountryCode;
  label: string;
  currency: CurrencyCode;
};

export type Localizations = Record<string, Locale>;

export const countries: Localizations = {
  default: {
    label: 'United States',
    language: 'EN',
    country: 'US',
    currency: 'USD',
  },
  '/au': {
    label: 'Australia',
    language: 'EN',
    country: 'AU',
    currency: 'AUD',
  },
  '/ca': {
    label: 'Canada',
    language: 'EN',
    country: 'CA',
    currency: 'CAD',
  },
  '/eu': {
    label: 'EU',
    language: 'EN',
    country: 'NL',
    currency: 'EUR',
  },
  '/uk': {
    label: 'United Kingdom',
    language: 'EN',
    country: 'GB',
    currency: 'GBP',
  },
  '/nz': {
    label: 'New Zealand',
    language: 'EN',
    country: 'NZ',
    currency: 'NZD',
  },
};
