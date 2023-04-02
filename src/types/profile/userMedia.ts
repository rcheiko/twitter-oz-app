// fetch("https://twitter.com/i/api/graphql/d_ONZLUHGCsErBCriRsLXg/UserMedia?variables=%7B%22userId%22%3A%22843157717611089920%22%2C%22count%22%3A20%2C%22includePromotedContent%22%3Afalse%2C%22withDownvotePerspective%22%3Afalse%2C%22withReactionsMetadata%22%3Afalse%2C%22withReactionsPerspective%22%3Afalse%2C%22withClientEventToken%22%3Afalse%2C%22withBirdwatchNotes%22%3Afalse%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22blue_business_profile_image_shape_enabled%22%3Afalse%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22vibe_api_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Afalse%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Afalse%2C%22interactive_text_enabled%22%3Atrue%2C%22responsive_web_text_conversations_enabled%22%3Afalse%2C%22longform_notetweets_richtext_consumption_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
//     "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
//     "content-type": "application/json",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-csrf-token": "03ce76555f4e96d5b21a7fd41af25c1659ab4ce14f0c1c7b172eddb9027fbe96d020efb8ac32f7cb3774a14fac0407d6dcb3f2239d86b7ef668387328db2f0759a433dfb060bf883ba43d17b4b59ace1",
//     "x-twitter-active-user": "yes",
//     "x-twitter-auth-type": "OAuth2Session",
//     "x-twitter-client-language": "en"
//   },
//   "referrer": "https://twitter.com/Shokker_ftn",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });

// VARIBLES :
// '{"userId":"843157717611089920",
// "count":20,
// "includePromotedContent":false,
// "withDownvotePerspective":false,
// "withReactionsMetadata":false,
// "withReactionsPerspective":false,
// "withClientEventToken":false,
// "withBirdwatchNotes":false,
// "withVoice":true,
// "withV2Timeline":true}&features={"blue_business_profile_image_shape_enabled":false,
// "responsive_web_graphql_exclude_directive_enabled":true,
// "verified_phone_label_enabled":false,
// "responsive_web_graphql_timeline_navigation_enabled":true,
// "responsive_web_graphql_skip_user_profile_image_extensions_enabled":false,
// "tweetypie_unmention_optimization_enabled":true,
// "vibe_api_enabled":true,
// "responsive_web_edit_tweet_api_enabled":true,
// "graphql_is_translatable_rweb_tweet_is_translatable_enabled":true,
// "view_counts_everywhere_api_enabled":true,
// "longform_notetweets_consumption_enabled":true,
// "tweet_awards_web_tipping_enabled":false,
// "freedom_of_speech_not_reach_fetch_enabled":false,
// "standardized_nudges_misinfo":true,
// "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled":false,
// "interactive_text_enabled":true,
// "responsive_web_text_conversations_enabled":false,
// "longform_notetweets_richtext_consumption_enabled":false,
// "responsive_web_enhance_cards_enabled":false
// }'

export interface userMedia {
  data: Data
}

export interface Data {
  user: User
}

export interface User {
  result: Result
}

export interface Result {
  __typename: string
  timeline_v2: TimelineV2
}

export interface TimelineV2 {
  timeline: Timeline
}

export interface Timeline {
  instructions: Instruction[]
  metadata: Metadata
}

export interface Instruction {
  type: string
  entries: Entry[]
}

export interface Entry {
  entryId: string
  sortIndex: string
  content: Content
}

export interface Content {
  entryType: string
  __typename: string
  itemContent?: ItemContent
  value?: string
  cursorType?: string
}

export interface ItemContent {
  itemType: string
  __typename: string
  tweet_results: TweetResults
  tweetDisplayType: string
}

export interface TweetResults {
  result: Result2
}

export interface Result2 {
  __typename: string
  rest_id: string
  core: Core
  unmention_data: UnmentionData
  edit_control: EditControl
  edit_perspective: EditPerspective
  is_translatable: boolean
  views: Views
  source: string
  legacy: Legacy2
  card?: Card
  unified_card?: UnifiedCard
}

export interface Core {
  user_results: UserResults
}

export interface UserResults {
  result: Result3
}

export interface Result3 {
  __typename: string
  id: string
  rest_id: string
  affiliates_highlighted_label: AffiliatesHighlightedLabel
  has_graduated_access: boolean
  is_blue_verified: boolean
  legacy: Legacy
  professional: Professional
  business_account: BusinessAccount
}

export interface AffiliatesHighlightedLabel {}

export interface Legacy {
  following: boolean
  can_dm: boolean
  can_media_tag: boolean
  created_at: string
  default_profile: boolean
  default_profile_image: boolean
  description: string
  entities: Entities
  fast_followers_count: number
  favourites_count: number
  followers_count: number
  friends_count: number
  has_custom_timelines: boolean
  is_translator: boolean
  listed_count: number
  location: string
  media_count: number
  name: string
  normal_followers_count: number
  pinned_tweet_ids_str: string[]
  possibly_sensitive: boolean
  profile_banner_url: string
  profile_image_url_https: string
  profile_interstitial_type: string
  screen_name: string
  statuses_count: number
  translator_type: string
  url: string
  verified: boolean
  want_retweets: boolean
  withheld_in_countries: any[]
}

export interface Entities {
  description: Description
  url: Url
}

export interface Description {
  urls: any[]
}

export interface Url {
  urls: Url2[]
}

export interface Url2 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface Professional {
  rest_id: string
  professional_type: string
  category: Category[]
}

export interface Category {
  id: number
  name: string
  icon_name: string
}

export interface BusinessAccount {}

export interface UnmentionData {}

export interface EditControl {
  edit_tweet_ids: string[]
  editable_until_msecs: string
  is_edit_eligible: boolean
  edits_remaining: string
}

export interface EditPerspective {
  favorited: boolean
  retweeted: boolean
}

export interface Views {
  count: string
  state: string
}

export interface Legacy2 {
  bookmark_count: number
  bookmarked: boolean
  created_at: string
  conversation_id_str: string
  display_text_range: number[]
  entities: Entities2
  extended_entities?: ExtendedEntities
  favorite_count: number
  favorited: boolean
  full_text: string
  is_quote_status: boolean
  lang: string
  possibly_sensitive: boolean
  possibly_sensitive_editable: boolean
  quote_count: number
  reply_count: number
  retweet_count: number
  retweeted: boolean
  user_id_str: string
  id_str: string
}

export interface Entities2 {
  media?: Medum[]
  user_mentions: UserMention[]
  urls: Url3[]
  hashtags: Hashtag[]
  symbols: any[]
}

export interface Medum {
  display_url: string
  expanded_url: string
  id_str: string
  indices: number[]
  media_url_https: string
  type: string
  url: string
  sizes: Sizes
  original_info: OriginalInfo
}

export interface Sizes {
  large: Large
  medium: Medium
  small: Small
  thumb: Thumb
}

export interface Large {
  h: number
  w: number
  resize: string
}

export interface Medium {
  h: number
  w: number
  resize: string
}

export interface Small {
  h: number
  w: number
  resize: string
}

export interface Thumb {
  h: number
  w: number
  resize: string
}

export interface OriginalInfo {
  height: number
  width: number
  focus_rects: FocusRect[]
}

export interface FocusRect {
  x: number
  y: number
  w: number
  h: number
}

export interface UserMention {
  id_str: string
  name: string
  screen_name: string
  indices: number[]
}

export interface Url3 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface Hashtag {
  indices: number[]
  text: string
}

export interface ExtendedEntities {
  media: Medum2[]
}

export interface Medum2 {
  display_url: string
  expanded_url: string
  id_str: string
  indices: number[]
  media_key: string
  media_url_https: string
  type: string
  url: string
  ext_media_availability: ExtMediaAvailability
  sizes: Sizes2
  original_info: OriginalInfo2
}

export interface ExtMediaAvailability {
  status: string
}

export interface Sizes2 {
  large: Large2
  medium: Medium2
  small: Small2
  thumb: Thumb2
}

export interface Large2 {
  h: number
  w: number
  resize: string
}

export interface Medium2 {
  h: number
  w: number
  resize: string
}

export interface Small2 {
  h: number
  w: number
  resize: string
}

export interface Thumb2 {
  h: number
  w: number
  resize: string
}

export interface OriginalInfo2 {
  height: number
  width: number
  focus_rects: FocusRect2[]
}

export interface FocusRect2 {
  x: number
  y: number
  w: number
  h: number
}

export interface Card {
  rest_id: string
  legacy: Legacy3
}

export interface Legacy3 {
  binding_values: BindingValue[]
  card_platform: CardPlatform
  name: string
  url: string
  user_refs_results: UserRefsResult[]
}

export interface BindingValue {
  key: string
  value: Value
}

export interface Value {
  string_value?: string
  type: string
  image_value?: ImageValue
  scribe_key?: string
  user_value?: UserValue
  image_color_value?: ImageColorValue
}

export interface ImageValue {
  height: number
  width: number
  url: string
}

export interface UserValue {
  id_str: string
  path: any[]
}

export interface ImageColorValue {
  palette: Palette[]
}

export interface Palette {
  rgb: Rgb
  percentage: number
}

export interface Rgb {
  blue: number
  green: number
  red: number
}

export interface CardPlatform {
  platform: Platform
}

export interface Platform {
  audience: Audience
  device: Device
}

export interface Audience {
  name: string
}

export interface Device {
  name: string
  version: string
}

export interface UserRefsResult {
  result: Result4
}

export interface Result4 {
  __typename: string
  id: string
  rest_id: string
  affiliates_highlighted_label: AffiliatesHighlightedLabel2
  has_graduated_access: boolean
  is_blue_verified: boolean
  legacy: Legacy4
  business_account: BusinessAccount2
}

export interface AffiliatesHighlightedLabel2 {}

export interface Legacy4 {
  can_dm: boolean
  can_media_tag: boolean
  created_at: string
  default_profile: boolean
  default_profile_image: boolean
  description: string
  entities: Entities3
  fast_followers_count: number
  favourites_count: number
  followers_count: number
  friends_count: number
  has_custom_timelines: boolean
  is_translator: boolean
  listed_count: number
  location: string
  media_count: number
  name: string
  normal_followers_count: number
  pinned_tweet_ids_str: any[]
  possibly_sensitive: boolean
  profile_banner_url: string
  profile_image_url_https: string
  profile_interstitial_type: string
  screen_name: string
  statuses_count: number
  translator_type: string
  url: string
  verified: boolean
  verified_type: string
  want_retweets: boolean
  withheld_in_countries: any[]
}

export interface Entities3 {
  description: Description2
  url: Url4
}

export interface Description2 {
  urls: any[]
}

export interface Url4 {
  urls: Url5[]
}

export interface Url5 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface BusinessAccount2 {
  affiliates_count: number
}

export interface UnifiedCard {
  card_fetch_state: string
}

export interface Metadata {
  scribeConfig: ScribeConfig
}

export interface ScribeConfig {
  page: string
}