import { AlgoliaSearchIndex } from '@ircsignpost/signpost-base/dist/src/search-common';

export const SITE_TITLE = 'Tubulire';

// Cache statically generated pages for 1 hour. The timeout was chosen
// arbitrarily. Our website has static, non-urgent resources, so we probably do
// not need to serve content faster.
export const REVALIDATION_TIMEOUT_SECONDS: number = 1 * 60 * 60;

// The "about us" article ID.
//
// TODO
export const ABOUT_US_ARTICLE_ID: number = 13564343792669;
export const USE_RECENT_ARTICLES = false;

// The information hierary of the website.
// Set to true for the category -> section -> article hierarchy, similar to that of United for Ukraine.
// Set to false for the "information" -> category -> article hierarchy, similar to that of Beporsed.
//
// TODO
export const USE_CAT_SEC_ART_CONTENT_STRUCTURE = true;

// A mapping from category ID to a Material icon for that category.
export const CATEGORY_ICON_NAMES: { [key: string]: string } = {
  '13564259168285': 'groups',
  '13555839397917': 'home',
  '13564311729181': 'home',
};

// A mapping from section ID to a Material icon for that section.
export const SECTION_ICON_NAMES: { [key: string]: string } = {
  '13556218925725': 'school',
  '13556179154077': 'family_restroom',
  '13556157547805': 'health_and_safety',
  '13556079737245': 'gavel',
  '13556092276253': 'history_edu',
  '13556031706141': 'attach_money',
  '13555945431965': 'work',
  '13555969057181': 'how_to_reg',
};

// A list of category IDs that the site should not display.
export const CATEGORIES_TO_HIDE: number[] = [13564259168285, 13564213154333];

export const MENU_CATEGORIES_TO_HIDE: number[] = [13564213154333];

// A map from a locale code to Zendesk locale id used for dynamic content translations.
// https://developer.zendesk.com/api-reference/ticketing/account-configuration/locales/
// Keep in sync with locales configured in /next.config.js.
export const DYNAMIC_CONTENT_LOCALES: { [key: string]: number } = {
  'en-us': 1,
  ar: 66,
  fr: 16,
  so: 1403,
  sw: 1362,
  ln: 1637,
};

export const ZENDESK_AUTH_HEADER = {
  Authorization: 'Bearer ' + process.env.ZENDESK_OAUTH_TOKEN,
};

// TODO: Add your app's google analytics ids as local and server environment variables,
// and then add to this list. You may have two IDs, for example, during the migration
// from Universal Analytics to Google Analytics 4. See README.md for more details.
export const GOOGLE_ANALYTICS_IDS = [
  process.env.NEXT_PUBLIC_GA_ID ?? '',
  process.env.NEXT_PUBLIC_GA4_ID ?? '',
];

// Algolia search app ID, Search API key and search index name:
// https://www.algolia.com/account/api-keys/
export const ALGOLIA_SEARCH_APP_ID = 'BWATZIXLX6';
export const ALGOLIA_SEARCH_API_KEY = '0d9093280e7b2bc2b6ca12ed4180fd0a';
export const ALGOLIA_SEARCH_API_KEY_WRITE =
  process.env.ALGOLIA_SEARCH_API_KEY_WRITE ?? '';

// TODO: create Algolia indexes for Articles and Queries and replace the names here.
// See README for more info on how to create indexes.
export const ALGOLIA_ARTICLE_INDEX_NAME = 'zendesk_signpost-uganda_articles';
export const ALGOLIA_QUERY_INDEX_NAME =
  'zendesk_signpost-uganda_articles_query_suggestions';

export const SEARCH_BAR_INDEX: AlgoliaSearchIndex = {
  appId: ALGOLIA_SEARCH_APP_ID,
  publicApiKey: ALGOLIA_SEARCH_API_KEY,
  indexName: ALGOLIA_QUERY_INDEX_NAME,
};

export const SEARCH_RESULTS_PAGE_INDEX: AlgoliaSearchIndex = {
  appId: ALGOLIA_SEARCH_APP_ID,
  publicApiKey: ALGOLIA_SEARCH_API_KEY,
  indexName: ALGOLIA_ARTICLE_INDEX_NAME,
};

export const DIRECTUS_AUTH_TOKEN = process.env.DIRECTUS_TOKEN ?? '';
export const DIRECTUS_COUNTRY_ID = 24;
export const DIRECTUS_INSTANCE = 'https://directus-irc.azurewebsites.net/';
