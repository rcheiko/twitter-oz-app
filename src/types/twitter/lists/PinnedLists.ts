// fetch("https://twitter.com/i/api/graphql/Qi5upJHUJl4ZGiE8jdEi-g/ListPins?variables=%7B%7D&features=%7B%22blue_business_profile_image_shape_enabled%22%3Afalse%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%7D", {
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
  "referrer": "https://twitter.com/home",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});

VARIABLES :
features={
"blue_business_profile_image_shape_enabled": false,
"responsive_web_graphql_exclude_directive_enabled": true,
"verified_phone_label_enabled": false,
"responsive_web_graphql_skip_user_profile_image_extensions_enabled": false,
"responsive_web_graphql_timeline_navigation_enabled": true
}
*/
export interface PinnedLists {
  data: Data
}

export interface Data {
  viewer: Viewer
}

export interface Viewer {
  pinned_lists: PinnedList[]
}

export interface PinnedList {
  created_at: number
  custom_banner_media?: CustomBannerMedia
  custom_banner_media_results?: CustomBannerMediaResults
  default_banner_media: DefaultBannerMedia
  default_banner_media_results: DefaultBannerMediaResults
  description: string
  following: boolean
  id: string
  id_str: string
  member_count: number
  mode: string
  user_results: UserResults
  name: string
  is_member: boolean
  subscriber_count: number
  muting: boolean
  pinning: boolean
}

export interface CustomBannerMedia {
  media_info: MediaInfo
}

export interface MediaInfo {
  original_img_url: string
  original_img_width: number
  original_img_height: number
  salient_rect: SalientRect
}

export interface SalientRect {
  left: number
  top: number
  width: number
  height: number
}

export interface CustomBannerMediaResults {
  result: Result
}

export interface Result {
  id: string
  media_key: string
  media_id: string
  media_info: MediaInfo2
  __typename: string
}

export interface MediaInfo2 {
  __typename: string
  original_img_height: number
  original_img_width: number
  original_img_url: string
  salient_rect: SalientRect2
  color_info: ColorInfo
}

export interface SalientRect2 {
  height: number
  left: number
  top: number
  width: number
}

export interface ColorInfo {
  palette: Palette[]
}

export interface Palette {
  percentage: number
  rgb: Rgb
}

export interface Rgb {
  blue: number
  green: number
  red: number
}

export interface DefaultBannerMedia {
  media_info: MediaInfo3
}

export interface MediaInfo3 {
  original_img_url: string
  original_img_width: number
  original_img_height: number
  salient_rect: SalientRect3
}

export interface SalientRect3 {
  left: number
  top: number
  width: number
  height: number
}

export interface DefaultBannerMediaResults {
  result: Result2
}

export interface Result2 {
  id: string
  media_key: string
  media_id: string
  media_info: MediaInfo4
  __typename: string
}

export interface MediaInfo4 {
  __typename: string
  original_img_height: number
  original_img_width: number
  original_img_url: string
  salient_rect: SalientRect4
}

export interface SalientRect4 {
  height: number
  left: number
  top: number
  width: number
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
  business_account: BusinessAccount
}

export interface AffiliatesHighlightedLabel {}

export interface Legacy {
  following?: boolean
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
  verified: boolean
  want_retweets: boolean
  withheld_in_countries: any[]
  needs_phone_verification?: boolean
}

export interface Entities {
  description: Description
}

export interface Description {
  urls: Url[]
}

export interface Url {
  display_url: string
  expanded_url: string
  url: string
  indices: number[]
}

export interface BusinessAccount {}
