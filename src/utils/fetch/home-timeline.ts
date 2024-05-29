import { fetchProxy } from "../proxy"

export const getHomeTimeline = async () => {
  const res = await fetchProxy(
    'https://twitter.com/i/api/graphql/SBvNHI__SPvXqUN_QfD5vw/HomeTimeline', {
      headers: {
        accept: "*/*",
        authorization: import.meta.env.VITE_BEARER_TOKEN_TWITTER,
        "x-csrf-token": "74de5dc1fc7fef37d9b9a6a47a1c6509f80ad975cf7bfdaa6f7655a2616b48dea0d740ff46100a305a621a8aec8db8afb1ebf3b7a94ee4559d2f0004c6a67460bb006dbb039fec6cb647a296f72122ce",
        "Content-Type": "application/json",
        Cookie: `kdt=op6KVvRA4lQO8MymHddnS3Ztlc5ElnKU09Elq6QJ; dnt=1; g_state={"i_l":0}; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; guest_id_ads=v1%3A170258044947635877; guest_id_marketing=v1%3A170258044947635877; _ga=GA1.2.825641528.1702770637; _gid=GA1.2.1281033806.1711925821; auth_multi="1270649793048649728:8db649f1949deb9d25d3446f119c84eaded6d9df"; auth_token=3c5521333a6f3bf8714a3422a0c6745d32ff74f0; personalization_id="v1_hF67G9SAsPWaCKfyvKiH5g=="; guest_id=v1%3A171226296269133117; twid=u%3D843157717611089920; ct0=74de5dc1fc7fef37d9b9a6a47a1c6509f80ad975cf7bfdaa6f7655a2616b48dea0d740ff46100a305a621a8aec8db8afb1ebf3b7a94ee4559d2f0004c6a67460bb006dbb039fec6cb647a296f72122ce; lang=en`
      },
      method: "POST",
      body: "{\"variables\":{\"count\":20,\"includePromotedContent\":false,\"latestControlAvailable\":true,\"requestContext\":\"launch\",\"withCommunity\":true,\"seenTweetIds\":[\"1766116412295094437\"]},\"features\":{\"responsive_web_graphql_exclude_directive_enabled\":true,\"verified_phone_label_enabled\":false,\"creator_subscriptions_tweet_preview_api_enabled\":true,\"responsive_web_graphql_timeline_navigation_enabled\":true,\"responsive_web_graphql_skip_user_profile_image_extensions_enabled\":false,\"c9s_tweet_anatomy_moderator_badge_enabled\":true,\"tweetypie_unmention_optimization_enabled\":true,\"responsive_web_edit_tweet_api_enabled\":true,\"graphql_is_translatable_rweb_tweet_is_translatable_enabled\":true,\"view_counts_everywhere_api_enabled\":true,\"longform_notetweets_consumption_enabled\":true,\"responsive_web_twitter_article_tweet_consumption_enabled\":true,\"tweet_awards_web_tipping_enabled\":false,\"freedom_of_speech_not_reach_fetch_enabled\":true,\"standardized_nudges_misinfo\":true,\"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\":true,\"rweb_video_timestamps_enabled\":true,\"longform_notetweets_rich_text_read_enabled\":true,\"longform_notetweets_inline_media_enabled\":true,\"responsive_web_enhance_cards_enabled\":false},\"queryId\":\"SBvNHI__SPvXqUN_QfD5vw\"}",
    }
  )
  return await res.json() as HomeTimelineType
}

// VARIABLES :
// variables={
//   "count":20,
//   "includePromotedContent":true,
//   "latestControlAvailable":true,
//   "requestContext":"launch",
//   "withCommunity":true,
//   "withDownvotePerspective":false,
//   "withReactionsMetadata":false,
//   "withReactionsPerspective":false
// }
// &features={
//   "blue_business_profile_image_shape_enabled":false,
//   "responsive_web_graphql_exclude_directive_enabled":true,
//   "verified_phone_label_enabled":false,
//   "responsive_web_graphql_timeline_navigation_enabled":true,
//   "responsive_web_graphql_skip_user_profile_image_extensions_enabled":false,
//   "tweetypie_unmention_optimization_enabled":true,
//   "vibe_api_enabled":true,
//   "responsive_web_edit_tweet_api_enabled":true,
//   "graphql_is_translatable_rweb_tweet_is_translatable_enabled":true,
//   "view_counts_everywhere_api_enabled":true,
//   "longform_notetweets_consumption_enabled":true,
//   "tweet_awards_web_tipping_enabled":false,
//   "freedom_of_speech_not_reach_fetch_enabled":false,
//   "standardized_nudges_misinfo":true,
//   "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled":false,
//   "interactive_text_enabled":true,
//   "responsive_web_text_conversations_enabled":false,
//   "longform_notetweets_richtext_consumption_enabled":false,
//   "responsive_web_enhance_cards_enabled":false
// }

export interface HomeTimelineType {
  data: Data
}

export interface Data {
  home: Home
}

export interface Home {
  home_timeline_urt: HomeTimelineUrt
}

export interface HomeTimelineUrt {
  instructions: Instruction[]
  responseObjects: ResponseObjects
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
  feedbackInfo?: FeedbackInfo
  clientEventInfo?: ClientEventInfo
  value?: string
  cursorType?: string
  items?: Item[]
}

export interface Item {
  entryId: string
  item: Item2
}

export interface Item2 {
  itemContent: ItemContent
  feedbackInfo: FeedbackInfo
  clientEventInfo: ClientEventInfo
}

export interface ItemContent {
  itemType: string
  __typename: string
  tweet_results: TweetResults
  tweetDisplayType: string
  promotedMetadata?: PromotedMetadata
  socialContext?: SocialContext
}

export interface TweetResults {
  result: Result
}

export interface Result {
  __typename: string
  rest_id?: string
  core?: Core
  unmention_data?: UnmentionData
  edit_control?: EditControl
  is_translatable?: boolean
  views?: Views
  source?: string
  legacy?: Legacy2
  note_tweet?: NoteTweet
  tweet?: Tweet
  limitedActionResults?: LimitedActionResults
  quoted_status_result?: QuotedStatusResult
  card?: Card2
}

export interface Core {
  user_results: UserResults
}

export interface UserResults {
  result: Result2
}

export interface Result2 {
  __typename: string
  id: string
  rest_id: string
  affiliates_highlighted_label: AffiliatesHighlightedLabel
  has_graduated_access: boolean
  is_blue_verified: boolean
  profile_image_shape: string
  legacy: Legacy
  professional?: Professional
  super_follow_eligible?: boolean
}

export interface AffiliatesHighlightedLabel {
  label?: Label
}

export interface Label {
  url: Url
  badge: Badge
  description: string
  userLabelType: string
  userLabelDisplayType: string
}

export interface Url {
  url: string
  urlType: string
}

export interface Badge {
  url: string
}

export interface Legacy {
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
  profile_banner_url?: string
  profile_image_url_https: string
  profile_interstitial_type: string
  screen_name: string
  statuses_count: number
  translator_type: string
  url?: string
  verified: boolean
  want_retweets: boolean
  withheld_in_countries: any[]
  following?: boolean
  verified_type?: string
  followed_by?: boolean
  notifications?: boolean
}

export interface Entities {
  description: Description
  url?: Url3
}

export interface Description {
  urls: Url2[]
}

export interface Url2 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface Url3 {
  urls: Url4[]
}

export interface Url4 {
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

export interface UnmentionData {}

export interface EditControl {
  edit_tweet_ids: string[]
  editable_until_msecs: string
  is_edit_eligible: boolean
  edits_remaining: string
}

export interface Views {
  count?: string
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
  possibly_sensitive?: boolean
  possibly_sensitive_editable?: boolean
  quote_count: number
  reply_count: number
  retweet_count: number
  retweeted: boolean
  user_id_str: string
  id_str: string
  scopes?: Scopes
  quoted_status_id_str?: string
  quoted_status_permalink?: QuotedStatusPermalink
  retweeted_status_result?: RetweetedStatusResult
}

export interface Entities2 {
  hashtags: Hashtag[]
  media?: Medum[]
  symbols: Symbol[]
  timestamps: any[]
  urls: Url7[]
  user_mentions: UserMention[]
}

export interface Hashtag {
  indices: number[]
  text: string
}

export interface Medum {
  display_url: string
  expanded_url: string
  id_str: string
  indices: number[]
  media_key: string
  media_url_https: string
  type: string
  url: string
  additional_media_info?: AdditionalMediaInfo
  ext_media_availability: ExtMediaAvailability
  sizes: Sizes
  original_info: OriginalInfo
  video_info?: VideoInfo
  media_results: MediaResults
  source_status_id_str?: string
  source_user_id_str?: string
  features?: Features
  allow_download_status?: AllowDownloadStatus
}

export interface AdditionalMediaInfo {
  monetizable: boolean
  source_user?: SourceUser
  title?: string
  description?: string
  call_to_actions?: CallToActions
  embeddable?: boolean
}

export interface SourceUser {
  user_results: UserResults2
}

export interface UserResults2 {
  result: Result3
}

export interface Result3 {
  __typename: string
  id: string
  rest_id: string
  affiliates_highlighted_label: AffiliatesHighlightedLabel2
  has_graduated_access: boolean
  is_blue_verified: boolean
  profile_image_shape: string
  legacy: Legacy3
  professional?: Professional2
}

export interface AffiliatesHighlightedLabel2 {}

export interface Legacy3 {
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
  pinned_tweet_ids_str: string[]
  possibly_sensitive: boolean
  profile_banner_url: string
  profile_image_url_https: string
  profile_interstitial_type: string
  screen_name: string
  statuses_count: number
  translator_type: string
  url?: string
  verified: boolean
  want_retweets: boolean
  withheld_in_countries: any[]
}

export interface Entities3 {
  description: Description2
  url?: Url5
}

export interface Description2 {
  urls: any[]
}

export interface Url5 {
  urls: Url6[]
}

export interface Url6 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface Professional2 {
  rest_id: string
  professional_type: string
  category: any[]
}

export interface CallToActions {
  visit_site: VisitSite
}

export interface VisitSite {
  url: string
}

export interface ExtMediaAvailability {
  status: string
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

export interface VideoInfo {
  aspect_ratio: number[]
  duration_millis: number
  variants: Variant[]
}

export interface Variant {
  content_type: string
  url: string
  bitrate?: number
}

export interface MediaResults {
  result: Result4
}

export interface Result4 {
  media_key: string
}

export interface Features {
  large: Large2
  medium: Medium2
  small: Small2
  orig: Orig
}

export interface Large2 {
  faces: Face[]
}

export interface Face {
  x: number
  y: number
  h: number
  w: number
}

export interface Medium2 {
  faces: Face2[]
}

export interface Face2 {
  x: number
  y: number
  h: number
  w: number
}

export interface Small2 {
  faces: Face3[]
}

export interface Face3 {
  x: number
  y: number
  h: number
  w: number
}

export interface Orig {
  faces: Face4[]
}

export interface Face4 {
  x: number
  y: number
  h: number
  w: number
}

export interface AllowDownloadStatus {
  allow_download: boolean
}

export interface Symbol {
  indices: number[]
  text: string
}

export interface Url7 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface UserMention {
  id_str: string
  name: string
  screen_name: string
  indices: number[]
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
  additional_media_info?: AdditionalMediaInfo2
  ext_media_availability: ExtMediaAvailability2
  sizes: Sizes2
  original_info: OriginalInfo2
  video_info?: VideoInfo2
  media_results: MediaResults2
  source_status_id_str?: string
  source_user_id_str?: string
  features?: Features2
  allow_download_status?: AllowDownloadStatus2
}

export interface AdditionalMediaInfo2 {
  monetizable: boolean
  source_user?: SourceUser2
  title?: string
  description?: string
  call_to_actions?: CallToActions2
  embeddable?: boolean
}

export interface SourceUser2 {
  user_results: UserResults3
}

export interface UserResults3 {
  result: Result5
}

export interface Result5 {
  __typename: string
  id: string
  rest_id: string
  affiliates_highlighted_label: AffiliatesHighlightedLabel3
  has_graduated_access: boolean
  is_blue_verified: boolean
  profile_image_shape: string
  legacy: Legacy4
  professional?: Professional3
}

export interface AffiliatesHighlightedLabel3 {}

export interface Legacy4 {
  can_dm: boolean
  can_media_tag: boolean
  created_at: string
  default_profile: boolean
  default_profile_image: boolean
  description: string
  entities: Entities4
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
  url?: string
  verified: boolean
  want_retweets: boolean
  withheld_in_countries: any[]
}

export interface Entities4 {
  description: Description3
  url?: Url8
}

export interface Description3 {
  urls: any[]
}

export interface Url8 {
  urls: Url9[]
}

export interface Url9 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface Professional3 {
  rest_id: string
  professional_type: string
  category: any[]
}

export interface CallToActions2 {
  visit_site: VisitSite2
}

export interface VisitSite2 {
  url: string
}

export interface ExtMediaAvailability2 {
  status: string
}

export interface Sizes2 {
  large: Large3
  medium: Medium3
  small: Small3
  thumb: Thumb2
}

export interface Large3 {
  h: number
  w: number
  resize: string
}

export interface Medium3 {
  h: number
  w: number
  resize: string
}

export interface Small3 {
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

export interface VideoInfo2 {
  aspect_ratio: number[]
  duration_millis: number
  variants: Variant2[]
}

export interface Variant2 {
  content_type: string
  url: string
  bitrate?: number
}

export interface MediaResults2 {
  result: Result6
}

export interface Result6 {
  media_key: string
}

export interface Features2 {
  large: Large4
  medium: Medium4
  small: Small4
  orig: Orig2
}

export interface Large4 {
  faces: Face5[]
}

export interface Face5 {
  x: number
  y: number
  h: number
  w: number
}

export interface Medium4 {
  faces: Face6[]
}

export interface Face6 {
  x: number
  y: number
  h: number
  w: number
}

export interface Small4 {
  faces: Face7[]
}

export interface Face7 {
  x: number
  y: number
  h: number
  w: number
}

export interface Orig2 {
  faces: Face8[]
}

export interface Face8 {
  x: number
  y: number
  h: number
  w: number
}

export interface AllowDownloadStatus2 {
  allow_download: boolean
}

export interface Scopes {
  followers: boolean
}

export interface QuotedStatusPermalink {
  url: string
  expanded: string
  display: string
}

export interface RetweetedStatusResult {
  result: Result7
}

export interface Result7 {
  __typename: string
  rest_id: string
  core: Core2
  unmention_data: UnmentionData2
  edit_control: EditControl2
  is_translatable: boolean
  views: Views2
  source: string
  legacy: Legacy6
}

export interface Core2 {
  user_results: UserResults4
}

export interface UserResults4 {
  result: Result8
}

export interface Result8 {
  __typename: string
  id: string
  rest_id: string
  affiliates_highlighted_label: AffiliatesHighlightedLabel4
  has_graduated_access: boolean
  is_blue_verified: boolean
  profile_image_shape: string
  legacy: Legacy5
}

export interface AffiliatesHighlightedLabel4 {}

export interface Legacy5 {
  can_dm: boolean
  can_media_tag: boolean
  created_at: string
  default_profile: boolean
  default_profile_image: boolean
  description: string
  entities: Entities5
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
  verified: boolean
  want_retweets: boolean
  withheld_in_countries: any[]
}

export interface Entities5 {
  description: Description4
}

export interface Description4 {
  urls: any[]
}

export interface UnmentionData2 {}

export interface EditControl2 {
  edit_tweet_ids: string[]
  editable_until_msecs: string
  is_edit_eligible: boolean
  edits_remaining: string
}

export interface Views2 {
  count: string
  state: string
}

export interface Legacy6 {
  bookmark_count: number
  bookmarked: boolean
  created_at: string
  conversation_id_str: string
  display_text_range: number[]
  entities: Entities6
  extended_entities: ExtendedEntities2
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

export interface Entities6 {
  hashtags: any[]
  media: Medum3[]
  symbols: Symbol2[]
  timestamps: any[]
  urls: any[]
  user_mentions: any[]
}

export interface Medum3 {
  display_url: string
  expanded_url: string
  id_str: string
  indices: number[]
  media_key: string
  media_url_https: string
  type: string
  url: string
  ext_media_availability: ExtMediaAvailability3
  features: Features3
  sizes: Sizes3
  original_info: OriginalInfo3
  allow_download_status: AllowDownloadStatus3
  media_results: MediaResults3
}

export interface ExtMediaAvailability3 {
  status: string
}

export interface Features3 {
  large: Large5
  medium: Medium5
  small: Small5
  orig: Orig3
}

export interface Large5 {
  faces: any[]
}

export interface Medium5 {
  faces: any[]
}

export interface Small5 {
  faces: any[]
}

export interface Orig3 {
  faces: any[]
}

export interface Sizes3 {
  large: Large6
  medium: Medium6
  small: Small6
  thumb: Thumb3
}

export interface Large6 {
  h: number
  w: number
  resize: string
}

export interface Medium6 {
  h: number
  w: number
  resize: string
}

export interface Small6 {
  h: number
  w: number
  resize: string
}

export interface Thumb3 {
  h: number
  w: number
  resize: string
}

export interface OriginalInfo3 {
  height: number
  width: number
  focus_rects: FocusRect3[]
}

export interface FocusRect3 {
  x: number
  y: number
  w: number
  h: number
}

export interface AllowDownloadStatus3 {
  allow_download: boolean
}

export interface MediaResults3 {
  result: Result9
}

export interface Result9 {
  media_key: string
}

export interface Symbol2 {
  indices: number[]
  text: string
}

export interface ExtendedEntities2 {
  media: Medum4[]
}

export interface Medum4 {
  display_url: string
  expanded_url: string
  id_str: string
  indices: number[]
  media_key: string
  media_url_https: string
  type: string
  url: string
  ext_media_availability: ExtMediaAvailability4
  features: Features4
  sizes: Sizes4
  original_info: OriginalInfo4
  allow_download_status: AllowDownloadStatus4
  media_results: MediaResults4
}

export interface ExtMediaAvailability4 {
  status: string
}

export interface Features4 {
  large: Large7
  medium: Medium7
  small: Small7
  orig: Orig4
}

export interface Large7 {
  faces: any[]
}

export interface Medium7 {
  faces: any[]
}

export interface Small7 {
  faces: any[]
}

export interface Orig4 {
  faces: any[]
}

export interface Sizes4 {
  large: Large8
  medium: Medium8
  small: Small8
  thumb: Thumb4
}

export interface Large8 {
  h: number
  w: number
  resize: string
}

export interface Medium8 {
  h: number
  w: number
  resize: string
}

export interface Small8 {
  h: number
  w: number
  resize: string
}

export interface Thumb4 {
  h: number
  w: number
  resize: string
}

export interface OriginalInfo4 {
  height: number
  width: number
  focus_rects: FocusRect4[]
}

export interface FocusRect4 {
  x: number
  y: number
  w: number
  h: number
}

export interface AllowDownloadStatus4 {
  allow_download: boolean
}

export interface MediaResults4 {
  result: Result10
}

export interface Result10 {
  media_key: string
}

export interface NoteTweet {
  is_expandable: boolean
  note_tweet_results: NoteTweetResults
}

export interface NoteTweetResults {
  result: Result11
}

export interface Result11 {
  id: string
  text: string
  entity_set: EntitySet
  richtext?: Richtext
  media?: Media
}

export interface EntitySet {
  hashtags: any[]
  symbols: Symbol3[]
  urls: Url10[]
  user_mentions: any[]
  timestamps?: any[]
}

export interface Symbol3 {
  indices: number[]
  text: string
}

export interface Url10 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface Richtext {
  richtext_tags: RichtextTag[]
}

export interface RichtextTag {
  from_index: number
  to_index: number
  richtext_types: string[]
}

export interface Media {
  inline_media: any[]
}

export interface Tweet {
  rest_id: string
  core: Core3
  card: Card
  unmention_data: UnmentionData3
  edit_control: EditControl3
  is_translatable: boolean
  views: Views3
  source: string
  legacy: Legacy9
}

export interface Core3 {
  user_results: UserResults5
}

export interface UserResults5 {
  result: Result12
}

export interface Result12 {
  __typename: string
  id: string
  rest_id: string
  affiliates_highlighted_label: AffiliatesHighlightedLabel5
  has_graduated_access: boolean
  is_blue_verified: boolean
  profile_image_shape: string
  legacy: Legacy7
}

export interface AffiliatesHighlightedLabel5 {}

export interface Legacy7 {
  can_dm: boolean
  can_media_tag: boolean
  created_at: string
  default_profile: boolean
  default_profile_image: boolean
  description: string
  entities: Entities7
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
  want_retweets: boolean
  withheld_in_countries: any[]
}

export interface Entities7 {
  description: Description5
  url: Url11
}

export interface Description5 {
  urls: any[]
}

export interface Url11 {
  urls: Url12[]
}

export interface Url12 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface Card {
  rest_id: string
  legacy: Legacy8
}

export interface Legacy8 {
  binding_values: BindingValue[]
  card_platform: CardPlatform
  name: string
  url: string
  user_refs_results: any[]
}

export interface BindingValue {
  key: string
  value: Value
}

export interface Value {
  string_value: string
  type: string
  scribe_key?: string
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

export interface UnmentionData3 {}

export interface EditControl3 {
  edit_tweet_ids: string[]
  editable_until_msecs: string
  is_edit_eligible: boolean
  edits_remaining: string
}

export interface Views3 {
  count: string
  state: string
}

export interface Legacy9 {
  bookmark_count: number
  bookmarked: boolean
  created_at: string
  conversation_control: ConversationControl
  conversation_id_str: string
  display_text_range: number[]
  entities: Entities8
  favorite_count: number
  favorited: boolean
  full_text: string
  is_quote_status: boolean
  lang: string
  limited_actions: string
  quote_count: number
  reply_count: number
  retweet_count: number
  retweeted: boolean
  scopes: Scopes2
  user_id_str: string
  id_str: string
}

export interface ConversationControl {
  policy: string
  conversation_owner_results: ConversationOwnerResults
}

export interface ConversationOwnerResults {
  result: Result13
}

export interface Result13 {
  __typename: string
  legacy: Legacy10
}

export interface Legacy10 {
  screen_name: string
}

export interface Entities8 {
  hashtags: Hashtag2[]
  symbols: any[]
  timestamps: any[]
  urls: any[]
  user_mentions: any[]
}

export interface Hashtag2 {
  indices: number[]
  text: string
}

export interface Scopes2 {
  followers: boolean
}

export interface LimitedActionResults {
  limited_actions: LimitedAction[]
}

export interface LimitedAction {
  action: string
  prompt: Prompt
}

export interface Prompt {
  __typename: string
  cta_type: string
  headline: Headline
  subtext: Subtext
}

export interface Headline {
  text: string
  entities: any[]
}

export interface Subtext {
  text: string
  entities: any[]
}

export interface QuotedStatusResult {
  result: Result14
}

export interface Result14 {
  __typename: string
  rest_id: string
  core: Core4
  unmention_data: UnmentionData4
  edit_control: EditControl4
  is_translatable: boolean
  views: Views4
  source: string
  legacy: Legacy12
}

export interface Core4 {
  user_results: UserResults6
}

export interface UserResults6 {
  result: Result15
}

export interface Result15 {
  __typename: string
  id: string
  rest_id: string
  affiliates_highlighted_label: AffiliatesHighlightedLabel6
  has_graduated_access: boolean
  is_blue_verified: boolean
  profile_image_shape: string
  legacy: Legacy11
}

export interface AffiliatesHighlightedLabel6 {}

export interface Legacy11 {
  can_dm: boolean
  can_media_tag: boolean
  created_at: string
  default_profile: boolean
  default_profile_image: boolean
  description: string
  entities: Entities9
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
  following?: boolean
}

export interface Entities9 {
  description: Description6
  url: Url14
}

export interface Description6 {
  urls: Url13[]
}

export interface Url13 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface Url14 {
  urls: Url15[]
}

export interface Url15 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface UnmentionData4 {}

export interface EditControl4 {
  edit_tweet_ids: string[]
  editable_until_msecs: string
  is_edit_eligible: boolean
  edits_remaining: string
}

export interface Views4 {
  count: string
  state: string
}

export interface Legacy12 {
  bookmark_count: number
  bookmarked: boolean
  created_at: string
  conversation_id_str: string
  display_text_range: number[]
  entities: Entities10
  extended_entities: ExtendedEntities3
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

export interface Entities10 {
  hashtags: any[]
  media: Medum5[]
  symbols: Symbol4[]
  timestamps: any[]
  urls: any[]
  user_mentions: UserMention2[]
}

export interface Medum5 {
  display_url: string
  expanded_url: string
  ext_alt_text?: string
  id_str: string
  indices: number[]
  media_key: string
  media_url_https: string
  type: string
  url: string
  ext_media_availability: ExtMediaAvailability5
  features: Features5
  sizes: Sizes5
  original_info: OriginalInfo5
  media_results: MediaResults5
}

export interface ExtMediaAvailability5 {
  status: string
}

export interface Features5 {
  large: Large9
  medium: Medium9
  small: Small9
  orig: Orig5
}

export interface Large9 {
  faces: any[]
}

export interface Medium9 {
  faces: any[]
}

export interface Small9 {
  faces: any[]
}

export interface Orig5 {
  faces: any[]
}

export interface Sizes5 {
  large: Large10
  medium: Medium10
  small: Small10
  thumb: Thumb5
}

export interface Large10 {
  h: number
  w: number
  resize: string
}

export interface Medium10 {
  h: number
  w: number
  resize: string
}

export interface Small10 {
  h: number
  w: number
  resize: string
}

export interface Thumb5 {
  h: number
  w: number
  resize: string
}

export interface OriginalInfo5 {
  height: number
  width: number
  focus_rects: FocusRect5[]
}

export interface FocusRect5 {
  x: number
  y: number
  w: number
  h: number
}

export interface MediaResults5 {
  result: Result16
}

export interface Result16 {
  media_key: string
}

export interface Symbol4 {
  indices: number[]
  text: string
}

export interface UserMention2 {
  id_str: string
  name: string
  screen_name: string
  indices: number[]
}

export interface ExtendedEntities3 {
  media: Medum6[]
}

export interface Medum6 {
  display_url: string
  expanded_url: string
  ext_alt_text?: string
  id_str: string
  indices: number[]
  media_key: string
  media_url_https: string
  type: string
  url: string
  ext_media_availability: ExtMediaAvailability6
  features: Features6
  sizes: Sizes6
  original_info: OriginalInfo6
  media_results: MediaResults6
}

export interface ExtMediaAvailability6 {
  status: string
}

export interface Features6 {
  large: Large11
  medium: Medium11
  small: Small11
  orig: Orig6
}

export interface Large11 {
  faces: any[]
}

export interface Medium11 {
  faces: any[]
}

export interface Small11 {
  faces: any[]
}

export interface Orig6 {
  faces: any[]
}

export interface Sizes6 {
  large: Large12
  medium: Medium12
  small: Small12
  thumb: Thumb6
}

export interface Large12 {
  h: number
  w: number
  resize: string
}

export interface Medium12 {
  h: number
  w: number
  resize: string
}

export interface Small12 {
  h: number
  w: number
  resize: string
}

export interface Thumb6 {
  h: number
  w: number
  resize: string
}

export interface OriginalInfo6 {
  height: number
  width: number
  focus_rects: FocusRect6[]
}

export interface FocusRect6 {
  x: number
  y: number
  w: number
  h: number
}

export interface MediaResults6 {
  result: Result17
}

export interface Result17 {
  media_key: string
}

export interface Card2 {
  rest_id: string
  legacy: Legacy13
}

export interface Legacy13 {
  binding_values: BindingValue2[]
  card_platform: CardPlatform2
  name: string
  url: string
  user_refs_results: UserRefsResult[]
}

export interface BindingValue2 {
  key: string
  value: Value2
}

export interface Value2 {
  image_value?: ImageValue
  type: string
  string_value?: string
  scribe_key?: string
  image_color_value?: ImageColorValue
  user_value?: UserValue
}

export interface ImageValue {
  height: number
  width: number
  url: string
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

export interface UserValue {
  id_str: string
  path: any[]
}

export interface CardPlatform2 {
  platform: Platform2
}

export interface Platform2 {
  audience: Audience2
  device: Device2
}

export interface Audience2 {
  name: string
}

export interface Device2 {
  name: string
  version: string
}

export interface UserRefsResult {
  result: Result18
}

export interface Result18 {
  __typename: string
  id: string
  rest_id: string
  affiliates_highlighted_label: AffiliatesHighlightedLabel7
  has_graduated_access: boolean
  is_blue_verified: boolean
  profile_image_shape: string
  legacy: Legacy14
  professional: Professional4
}

export interface AffiliatesHighlightedLabel7 {}

export interface Legacy14 {
  can_dm: boolean
  can_media_tag: boolean
  created_at: string
  default_profile: boolean
  default_profile_image: boolean
  description: string
  entities: Entities11
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
  verified_type: string
  want_retweets: boolean
  withheld_in_countries: any[]
}

export interface Entities11 {
  description: Description7
  url: Url17
}

export interface Description7 {
  urls: Url16[]
}

export interface Url16 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface Url17 {
  urls: Url18[]
}

export interface Url18 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface Professional4 {
  rest_id: string
  professional_type: string
  category: Category2[]
}

export interface Category2 {
  id: number
  name: string
  icon_name: string
}

export interface PromotedMetadata {
  advertiser_results: AdvertiserResults
  adMetadataContainer: AdMetadataContainer
  disclosureType: string
  experimentValues: ExperimentValue[]
  impressionId: string
  impressionString: string
  clickTrackingInfo: ClickTrackingInfo
}

export interface AdvertiserResults {
  result: Result19
}

export interface Result19 {
  __typename: string
  id: string
  rest_id: string
  affiliates_highlighted_label: AffiliatesHighlightedLabel8
  has_graduated_access: boolean
  is_blue_verified: boolean
  profile_image_shape: string
  legacy: Legacy15
  professional?: Professional5
}

export interface AffiliatesHighlightedLabel8 {}

export interface Legacy15 {
  can_dm: boolean
  can_media_tag: boolean
  created_at: string
  default_profile: boolean
  default_profile_image: boolean
  description: string
  entities: Entities12
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
  profile_banner_url?: string
  profile_image_url_https: string
  profile_interstitial_type: string
  screen_name: string
  statuses_count: number
  translator_type: string
  url: string
  verified: boolean
  want_retweets: boolean
  withheld_in_countries: any[]
  verified_type?: string
}

export interface Entities12 {
  description: Description8
  url: Url20
}

export interface Description8 {
  urls: Url19[]
}

export interface Url19 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface Url20 {
  urls: Url21[]
}

export interface Url21 {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface Professional5 {
  rest_id: string
  professional_type: string
  category: Category3[]
}

export interface Category3 {
  id: number
  name: string
  icon_name: string
}

export interface AdMetadataContainer {
  renderLegacyWebsiteCard: boolean
}

export interface ExperimentValue {
  key: string
  value: string
}

export interface ClickTrackingInfo {
  urlParams: UrlParam[]
}

export interface UrlParam {
  key: string
  value: string
}

export interface SocialContext {
  type: string
  contextType: string
  text: string
  landingUrl: LandingUrl
}

export interface LandingUrl {
  url: string
  urlType: string
  urtEndpointOptions?: UrtEndpointOptions
}

export interface UrtEndpointOptions {
  title: string
  requestParams: RequestParam[]
}

export interface RequestParam {
  key: string
  value: string
}

export interface FeedbackInfo {
  feedbackKeys: string[]
}

export interface ClientEventInfo {
  component: string
  element: string
  details: Details
}

export interface Details {
  timelinesDetails: TimelinesDetails
}

export interface TimelinesDetails {
  injectionType: string
  controllerData: string
}

export interface ResponseObjects {
  feedbackActions: FeedbackAction[]
}

export interface FeedbackAction {
  key: string
  value: Value3
}

export interface Value3 {
  feedbackType: string
  prompt: string
  confirmation: string
  childKeys?: string[]
  feedbackUrl: string
  hasUndoAction: boolean
  icon?: string
  clientEventInfo?: ClientEventInfo2
}

export interface ClientEventInfo2 {
  action: string
  element: string
}

export interface Metadata {
  scribeConfig: ScribeConfig
}

export interface ScribeConfig {
  page: string
}