import { countries } from "~/graphql/data/countries";
import { I18nLocale } from "./i18n";

export const DEFAULT_LOCALE: I18nLocale = Object.freeze({
    ...countries.default,
    pathPrefix: '',
  })