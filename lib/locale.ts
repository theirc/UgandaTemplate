// This module contains utilities for handling the site's locale.
import type { Locale } from '@ircsignpost/signpost-base/dist/src/locale';

import { DYNAMIC_CONTENT_LOCALES } from './constants';

export { Locale };

// Keep LOCALES and 'getLocaleFromCode' in sync with locales configured in /next.config.js.
export const LOCALES: { [key: string]: Locale } = {
  'en-us': {
    url: 'en-us',
    direction: 'ltr',
    name: 'English',
    directus: 'en-US',
  },
  ar: { url: 'ar', direction: 'rtl', name: 'العربية', directus: 'ar-SA' },
  fr: { url: 'fr', direction: 'ltr', name: 'Français', directus: 'fr-FR' },
  so: { url: 'so', direction: 'ltr', name: 'Soomali', directus: 'so-SO' },
  sw: { url: 'sw', direction: 'ltr', name: 'Kiswahili', directus: 'sw-SW' },
  ln: { url: 'ln', direction: 'ltr', name: 'Lingála', directus: 'ln-LN' },
};

export const LOCALE_CODES_TO_CANONICAL_LOCALE_CODES: { [key: string]: string } =
  {
    en: 'en-us',
    'en-us': 'en-us',
    ar: 'ar',
    fr: 'fr',
    so: 'so',
    sw: 'sw',
    ln: 'ln',
  };

// Returns the effective locale given locale code.
//
// This function defaults to en-us in case we ended up in a situation where the locale is not recognized. It's defensive programming as this shouldn't happen.
export function getLocaleFromCode(code: string): Locale {
  return LOCALES[code] ?? LOCALES['en-us'];
}

/* Returns a Zendesk locale id for the current locale.
 If there is no mapping for the requested locale, return the deafault id 
 for en-us locale. */
export const getZendeskLocaleId = (currentLocale: Locale): number => {
  return DYNAMIC_CONTENT_LOCALES[currentLocale.url] || 1;
};
