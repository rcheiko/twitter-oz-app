
// fetch("https://twitter.com/i/api/graphql/5DAiJG3bD77SiWEs4xViBw/ListLatestTweetsTimeline?variables=%7B%22listId%22%3A%221545744880558919681%22%2C%22count%22%3A20%2C%22withDownvotePerspective%22%3Afalse%2C%22withReactionsMetadata%22%3Afalse%2C%22withReactionsPerspective%22%3Afalse%7D&features=%7B%22blue_business_profile_image_shape_enabled%22%3Afalse%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22vibe_api_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Afalse%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Afalse%2C%22interactive_text_enabled%22%3Atrue%2C%22responsive_web_text_conversations_enabled%22%3Afalse%2C%22longform_notetweets_richtext_consumption_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D", {
//   "headers": {
//     "accept": "*/*",
/*
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    "content-type": "application/json",
    "x-csrf-token": "03ce76555f4e96d5b21a7fd41af25c1659ab4ce14f0c1c7b172eddb9027fbe96d020efb8ac32f7cb3774a14fac0407d6dcb3f2239d86b7ef668387328db2f0759a433dfb060bf883ba43d17b4b59ace1",
    "x-twitter-active-user": "yes",
    "x-twitter-auth-type": "OAuth2Session",
    "x-twitter-client-language": "en"
  },
  "referrer": "https://twitter.com/i/lists/1545744880558919681",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});

VARIABLES :
variables={
"listId":"1545744880558919681",
"count":20,
"withDownvotePerspective":false,
"withReactionsMetadata":false,
"withReactionsPerspective":false
}
&features={"blue_business_profile_image_shape_enabled":false,
"responsive_web_graphql_exclude_directive_enabled":true,
"verified_phone_label_enabled":false,
"responsive_web_graphql_timeline_navigation_enabled":true,
"responsive_web_graphql_skip_user_profile_image_extensions_enabled":false,
"tweetypie_unmention_optimization_enabled":true,
"vibe_api_enabled":true,
"responsive_web_edit_tweet_api_enabled":true,
"graphql_is_translatable_rweb_tweet_is_translatable_enabled":true,
"view_counts_everywhere_api_enabled":true,
"longform_notetweets_consumption_enabled":true,
"tweet_awards_web_tipping_enabled":false,
"freedom_of_speech_not_reach_fetch_enabled":false,
"standardized_nudges_misinfo":true,
"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled":false,
"interactive_text_enabled":true,
"responsive_web_text_conversations_enabled":false,
"longform_notetweets_richtext_consumption_enabled":false,
"responsive_web_enhance_cards_enabled":false
}
*/

export interface ListLatestTweetsTimeline {
  data: Data;
}

export interface Data {
  list: List;
}

export interface List {
  tweets_timeline: TweetsTimeline;
}

export interface TweetsTimeline {
  timeline: Timeline;
}

export interface Timeline {
  instructions: Instruction[];
  responseObjects: ResponseObjects;
}

export interface Instruction {
  type: string;
  entries: Entry[];
}

export interface Entry {
  entryId: string;
  sortIndex: string;
  content: Content;
}

export interface Content {
  entryType: string;
  __typename: string;
  itemContent?: ItemContent;
  clientEventInfo?: ClientEventInfo;
  value?: string;
  cursorType?: string;
  stopOnEmptyResponse?: boolean;
}

export interface ItemContent {
  itemType: string;
  __typename: string;
  tweet_results: TweetResults;
  tweetDisplayType: string;
}

export interface TweetResults {
  result: Result;
}

export interface Result {
  __typename: string;
  rest_id: string;
  core: Core;
  unmention_data: UnmentionData;
  edit_control: EditControl;
  edit_perspective: EditPerspective;
  is_translatable: boolean;
  views: Views;
  source: string;
  legacy: Legacy2;
  quoted_status_result?: QuotedStatusResult;
  card?: Card2;
  unified_card?: UnifiedCard2;
  note_tweet?: NoteTweet;
}

export interface Core {
  user_results: UserResults;
}

export interface UserResults {
  result: Result2;
}

export interface Result2 {
  __typename: string;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: AffiliatesHighlightedLabel;
  has_graduated_access: boolean;
  is_blue_verified: boolean;
  legacy: Legacy;
  business_account: BusinessAccount;
  professional?: Professional;
}

export interface AffiliatesHighlightedLabel {
  label?: Label;
}

export interface Label {
  url: Url;
  badge: Badge;
  description: string;
  userLabelType: string;
  userLabelDisplayType: string;
}

export interface Url {
  url: string;
  urlType: string;
}

export interface Badge {
  url: string;
}

export interface Legacy {
  can_dm: boolean;
  can_media_tag: boolean;
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: Entities;
  fast_followers_count: number;
  favourites_count: number;
  followers_count: number;
  friends_count: number;
  has_custom_timelines: boolean;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  pinned_tweet_ids_str: string[];
  possibly_sensitive: boolean;
  profile_banner_url: string;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  screen_name: string;
  statuses_count: number;
  translator_type: string;
  url: string;
  verified: boolean;
  want_retweets: boolean;
  withheld_in_countries: any[];
  following?: boolean;
}

export interface Entities {
  description: Description;
  url: Url3;
}

export interface Description {
  urls: Url2[];
}

export interface Url2 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

export interface Url3 {
  urls: Url4[];
}

export interface Url4 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

export interface BusinessAccount {}

export interface Professional {
  rest_id: string;
  professional_type: string;
  category: Category[];
}

export interface Category {
  id: number;
  name: string;
  icon_name: string;
}

export interface UnmentionData {}

export interface EditControl {
  edit_tweet_ids: string[];
  editable_until_msecs: string;
  is_edit_eligible: boolean;
  edits_remaining: string;
}

export interface EditPerspective {
  favorited: boolean;
  retweeted: boolean;
}

export interface Views {
  count?: string;
  state: string;
}

export interface Legacy2 {
  bookmark_count: number;
  bookmarked: boolean;
  created_at: string;
  conversation_id_str: string;
  display_text_range: number[];
  entities: Entities2;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  in_reply_to_screen_name?: string;
  in_reply_to_status_id_str?: string;
  in_reply_to_user_id_str?: string;
  is_quote_status: boolean;
  lang: string;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  user_id_str: string;
  id_str: string;
  self_thread?: SelfThread;
  retweeted_status_result?: RetweetedStatusResult;
  extended_entities?: ExtendedEntities2;
  possibly_sensitive?: boolean;
  possibly_sensitive_editable?: boolean;
  quoted_status_id_str?: string;
  quoted_status_permalink?: QuotedStatusPermalink;
}

export interface Entities2 {
  user_mentions: UserMention[];
  urls: Url5[];
  hashtags: Hashtag[];
  symbols: any[];
  media?: Medum[];
}

export interface UserMention {
  id_str: string;
  name: string;
  screen_name: string;
  indices: number[];
}

export interface Url5 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

export interface Hashtag {
  indices: number[];
  text: string;
}

export interface Medum {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_url_https: string;
  type: string;
  url: string;
  sizes: Sizes;
  original_info: OriginalInfo;
}

export interface Sizes {
  large: Large;
  medium: Medium;
  small: Small;
  thumb: Thumb;
}

export interface Large {
  h: number;
  w: number;
  resize: string;
}

export interface Medium {
  h: number;
  w: number;
  resize: string;
}

export interface Small {
  h: number;
  w: number;
  resize: string;
}

export interface Thumb {
  h: number;
  w: number;
  resize: string;
}

export interface OriginalInfo {
  height: number;
  width: number;
  focus_rects?: FocusRect[];
}

export interface FocusRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface SelfThread {
  id_str: string;
}

export interface RetweetedStatusResult {
  result: Result3;
}

export interface Result3 {
  __typename: string;
  rest_id: string;
  core: Core2;
  unmention_data: UnmentionData2;
  edit_control: EditControl2;
  edit_perspective: EditPerspective2;
  is_translatable: boolean;
  views: Views2;
  source: string;
  legacy: Legacy4;
}

export interface Core2 {
  user_results: UserResults2;
}

export interface UserResults2 {
  result: Result4;
}

export interface Result4 {
  __typename: string;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: AffiliatesHighlightedLabel2;
  has_graduated_access: boolean;
  is_blue_verified: boolean;
  legacy: Legacy3;
  business_account: BusinessAccount2;
  professional?: Professional2;
}

export interface AffiliatesHighlightedLabel2 {}

export interface Legacy3 {
  can_dm: boolean;
  can_media_tag: boolean;
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: Entities3;
  fast_followers_count: number;
  favourites_count: number;
  followers_count: number;
  friends_count: number;
  has_custom_timelines: boolean;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  pinned_tweet_ids_str: string[];
  possibly_sensitive: boolean;
  profile_banner_url: string;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  screen_name: string;
  statuses_count: number;
  translator_type: string;
  url: string;
  verified: boolean;
  want_retweets: boolean;
  withheld_in_countries: any[];
}

export interface Entities3 {
  description: Description2;
  url: Url6;
}

export interface Description2 {
  urls: any[];
}

export interface Url6 {
  urls: Url7[];
}

export interface Url7 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

export interface BusinessAccount2 {}

export interface Professional2 {
  rest_id: string;
  professional_type: string;
  category: Category2[];
}

export interface Category2 {
  id: number;
  name: string;
  icon_name: string;
}

export interface UnmentionData2 {}

export interface EditControl2 {
  edit_tweet_ids: string[];
  editable_until_msecs: string;
  is_edit_eligible: boolean;
  edits_remaining: string;
}

export interface EditPerspective2 {
  favorited: boolean;
  retweeted: boolean;
}

export interface Views2 {
  count: string;
  state: string;
}

export interface Legacy4 {
  bookmark_count: number;
  bookmarked: boolean;
  created_at: string;
  conversation_id_str: string;
  display_text_range: number[];
  entities: Entities4;
  extended_entities?: ExtendedEntities;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  is_quote_status: boolean;
  lang: string;
  possibly_sensitive?: boolean;
  possibly_sensitive_editable?: boolean;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  user_id_str: string;
  id_str: string;
  self_thread: SelfThread2;
  in_reply_to_screen_name?: string;
  in_reply_to_status_id_str?: string;
  in_reply_to_user_id_str?: string;
}

export interface Entities4 {
  media?: Medum2[];
  user_mentions: UserMention2[];
  urls: Url8[];
  hashtags: Hashtag2[];
  symbols: any[];
}

export interface Medum2 {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_url_https: string;
  type: string;
  url: string;
  sizes: Sizes2;
  original_info: OriginalInfo2;
}

export interface Sizes2 {
  large: Large2;
  medium: Medium2;
  small: Small2;
  thumb: Thumb2;
}

export interface Large2 {
  h: number;
  w: number;
  resize: string;
}

export interface Medium2 {
  h: number;
  w: number;
  resize: string;
}

export interface Small2 {
  h: number;
  w: number;
  resize: string;
}

export interface Thumb2 {
  h: number;
  w: number;
  resize: string;
}

export interface OriginalInfo2 {
  height: number;
  width: number;
  focus_rects?: FocusRect2[];
}

export interface FocusRect2 {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface UserMention2 {
  id_str: string;
  name: string;
  screen_name: string;
  indices: number[];
}

export interface Url8 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

export interface Hashtag2 {
  indices: number[];
  text: string;
}

export interface ExtendedEntities {
  media: Medum3[];
}

export interface Medum3 {
  display_url: string;
  expanded_url: string;
  ext_alt_text?: string;
  id_str: string;
  indices: number[];
  media_key: string;
  media_url_https: string;
  type: string;
  url: string;
  ext_media_availability: ExtMediaAvailability;
  sizes: Sizes3;
  original_info: OriginalInfo3;
  additional_media_info?: AdditionalMediaInfo;
  mediaStats?: MediaStats;
  video_info?: VideoInfo;
}

export interface ExtMediaAvailability {
  status: string;
}

export interface Sizes3 {
  large: Large3;
  medium: Medium3;
  small: Small3;
  thumb: Thumb3;
}

export interface Large3 {
  h: number;
  w: number;
  resize: string;
}

export interface Medium3 {
  h: number;
  w: number;
  resize: string;
}

export interface Small3 {
  h: number;
  w: number;
  resize: string;
}

export interface Thumb3 {
  h: number;
  w: number;
  resize: string;
}

export interface OriginalInfo3 {
  height: number;
  width: number;
  focus_rects?: FocusRect3[];
}

export interface FocusRect3 {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface AdditionalMediaInfo {
  monetizable: boolean;
}

export interface MediaStats {
  viewCount: number;
}

export interface VideoInfo {
  aspect_ratio: number[];
  duration_millis: number;
  variants: Variant[];
}

export interface Variant {
  bitrate?: number;
  content_type: string;
  url: string;
}

export interface SelfThread2 {
  id_str: string;
}

export interface ExtendedEntities2 {
  media: Medum4[];
}

export interface Medum4 {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_key: string;
  media_url_https: string;
  type: string;
  url: string;
  ext_media_availability: ExtMediaAvailability2;
  sizes: Sizes4;
  original_info: OriginalInfo4;
  additional_media_info?: AdditionalMediaInfo2;
  mediaStats?: MediaStats2;
  video_info?: VideoInfo2;
}

export interface ExtMediaAvailability2 {
  status: string;
}

export interface Sizes4 {
  large: Large4;
  medium: Medium4;
  small: Small4;
  thumb: Thumb4;
}

export interface Large4 {
  h: number;
  w: number;
  resize: string;
}

export interface Medium4 {
  h: number;
  w: number;
  resize: string;
}

export interface Small4 {
  h: number;
  w: number;
  resize: string;
}

export interface Thumb4 {
  h: number;
  w: number;
  resize: string;
}

export interface OriginalInfo4 {
  height: number;
  width: number;
  focus_rects?: FocusRect4[];
}

export interface FocusRect4 {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface AdditionalMediaInfo2 {
  monetizable: boolean;
}

export interface MediaStats2 {
  viewCount: number;
}

export interface VideoInfo2 {
  aspect_ratio: number[];
  duration_millis: number;
  variants: Variant2[];
}

export interface Variant2 {
  content_type: string;
  url: string;
  bitrate?: number;
}

export interface QuotedStatusPermalink {
  url: string;
  expanded: string;
  display: string;
}

export interface QuotedStatusResult {
  result: Result5;
}

export interface Result5 {
  __typename: string;
  rest_id: string;
  core: Core3;
  unmention_data: UnmentionData3;
  edit_control: EditControl3;
  edit_perspective: EditPerspective3;
  is_translatable: boolean;
  views: Views3;
  source: string;
  legacy: Legacy6;
  card?: Card;
  unified_card?: UnifiedCard;
  quotedRefResult?: QuotedRefResult;
}

export interface Core3 {
  user_results: UserResults3;
}

export interface UserResults3 {
  result: Result6;
}

export interface Result6 {
  __typename: string;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: AffiliatesHighlightedLabel3;
  has_graduated_access: boolean;
  is_blue_verified: boolean;
  legacy: Legacy5;
  professional?: Professional3;
  business_account: BusinessAccount3;
}

export interface AffiliatesHighlightedLabel3 {}

export interface Legacy5 {
  can_dm: boolean;
  can_media_tag: boolean;
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: Entities5;
  fast_followers_count: number;
  favourites_count: number;
  followers_count: number;
  friends_count: number;
  has_custom_timelines: boolean;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  pinned_tweet_ids_str: string[];
  possibly_sensitive: boolean;
  profile_banner_url: string;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  screen_name: string;
  statuses_count: number;
  translator_type: string;
  url?: string;
  verified: boolean;
  want_retweets: boolean;
  withheld_in_countries: any[];
  following?: boolean;
}

export interface Entities5 {
  description: Description3;
  url?: Url10;
}

export interface Description3 {
  urls: Url9[];
}

export interface Url9 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

export interface Url10 {
  urls: Url11[];
}

export interface Url11 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

export interface Professional3 {
  rest_id: string;
  professional_type: string;
  category: Category3[];
}

export interface Category3 {
  id: number;
  name: string;
  icon_name: string;
}

export interface BusinessAccount3 {}

export interface UnmentionData3 {}

export interface EditControl3 {
  edit_tweet_ids: string[];
  editable_until_msecs: string;
  is_edit_eligible: boolean;
  edits_remaining: string;
}

export interface EditPerspective3 {
  favorited: boolean;
  retweeted: boolean;
}

export interface Views3 {
  count: string;
  state: string;
}

export interface Legacy6 {
  bookmark_count: number;
  bookmarked: boolean;
  created_at: string;
  conversation_id_str: string;
  display_text_range: number[];
  entities: Entities6;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  is_quote_status: boolean;
  lang: string;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  user_id_str: string;
  id_str: string;
  possibly_sensitive?: boolean;
  possibly_sensitive_editable?: boolean;
  quoted_status_id_str?: string;
  quoted_status_permalink?: QuotedStatusPermalink2;
}

export interface Entities6 {
  user_mentions: any[];
  urls: Url12[];
  hashtags: any[];
  symbols: any[];
}

export interface Url12 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

export interface QuotedStatusPermalink2 {
  url: string;
  expanded: string;
  display: string;
}

export interface Card {
  rest_id: string;
  legacy: Legacy7;
}

export interface Legacy7 {
  binding_values: BindingValue[];
  card_platform: CardPlatform;
  name: string;
  url: string;
  user_refs_results: any[];
}

export interface BindingValue {
  key: string;
  value: Value;
}

export interface Value {
  image_value?: ImageValue;
  type: string;
  string_value?: string;
  scribe_key?: string;
  image_color_value?: ImageColorValue;
}

export interface ImageValue {
  height: number;
  width: number;
  url: string;
}

export interface ImageColorValue {
  palette: Palette[];
}

export interface Palette {
  rgb: Rgb;
  percentage: number;
}

export interface Rgb {
  blue: number;
  green: number;
  red: number;
}

export interface CardPlatform {
  platform: Platform;
}

export interface Platform {
  audience: Audience;
  device: Device;
}

export interface Audience {
  name: string;
}

export interface Device {
  name: string;
  version: string;
}

export interface UnifiedCard {
  card_fetch_state: string;
}

export interface QuotedRefResult {
  result: Result7;
}

export interface Result7 {
  __typename: string;
  rest_id: string;
}

export interface Card2 {
  rest_id: string;
  legacy: Legacy8;
}

export interface Legacy8 {
  binding_values: BindingValue2[];
  card_platform: CardPlatform2;
  name: string;
  url: string;
  user_refs_results: UserRefsResult[];
}

export interface BindingValue2 {
  key: string;
  value: Value2;
}

export interface Value2 {
  image_value?: ImageValue2;
  type: string;
  string_value?: string;
  scribe_key?: string;
  user_value?: UserValue;
  image_color_value?: ImageColorValue2;
}

export interface ImageValue2 {
  height: number;
  width: number;
  url: string;
}

export interface UserValue {
  id_str: string;
  path: any[];
}

export interface ImageColorValue2 {
  palette: Palette2[];
}

export interface Palette2 {
  rgb: Rgb2;
  percentage: number;
}

export interface Rgb2 {
  blue: number;
  green: number;
  red: number;
}

export interface CardPlatform2 {
  platform: Platform2;
}

export interface Platform2 {
  audience: Audience2;
  device: Device2;
}

export interface Audience2 {
  name: string;
}

export interface Device2 {
  name: string;
  version: string;
}

export interface UserRefsResult {
  result: Result8;
}

export interface Result8 {
  __typename: string;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: AffiliatesHighlightedLabel4;
  has_graduated_access: boolean;
  is_blue_verified: boolean;
  legacy: Legacy9;
  business_account: BusinessAccount4;
}

export interface AffiliatesHighlightedLabel4 {}

export interface Legacy9 {
  following: boolean;
  can_dm: boolean;
  can_media_tag: boolean;
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: Entities7;
  fast_followers_count: number;
  favourites_count: number;
  followers_count: number;
  friends_count: number;
  has_custom_timelines: boolean;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  pinned_tweet_ids_str: string[];
  possibly_sensitive: boolean;
  profile_banner_url: string;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  screen_name: string;
  statuses_count: number;
  translator_type: string;
  url: string;
  verified: boolean;
  verified_type: string;
  want_retweets: boolean;
  withheld_in_countries: any[];
}

export interface Entities7 {
  description: Description4;
  url: Url13;
}

export interface Description4 {
  urls: any[];
}

export interface Url13 {
  urls: Url14[];
}

export interface Url14 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

export interface BusinessAccount4 {
  affiliates_count: number;
}

export interface UnifiedCard2 {
  card_fetch_state: string;
}

export interface NoteTweet {
  is_expandable: boolean;
  note_tweet_results: NoteTweetResults;
}

export interface NoteTweetResults {
  result: Result9;
}

export interface Result9 {
  id: string;
  text: string;
  entity_set: EntitySet;
}

export interface EntitySet {
  user_mentions: UserMention3[];
  urls: any[];
  hashtags: any[];
  symbols: any[];
}

export interface UserMention3 {
  id_str: string;
  name: string;
  screen_name: string;
  indices: number[];
}

export interface ClientEventInfo {
  component: string;
  details: Details;
}

export interface Details {
  timelinesDetails: TimelinesDetails;
}

export interface TimelinesDetails {
  injectionType: string;
  controllerData: string;
}

export interface ResponseObjects {
  feedbackActions: any[];
  immediateReactions: any[];
}
