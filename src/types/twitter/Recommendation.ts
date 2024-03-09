// fetch("https://twitter.com/i/api/1.1/users/recommendations.json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&include_ext_has_nft_avatar=1&include_ext_is_blue_verified=1&include_ext_verified_type=1&skip_status=1&&pc=true&display_location=profile_accounts_sidebar&limit=4&ext=mediaStats%2ChighlightedLabel%2ChasNftAvatar%2CvoiceInfo%2CbirdwatchPivot%2Cenrichments%2CsuperFollowMetadata%2CunmentionInfo%2CeditControl%2Cvibe", {
//   "headers": {
//     "accept": "*/*",
/*
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "",
    "x-csrf-token": "03ce76555f4e96d5b21a7fd41af25c1659ab4ce14f0c1c7b172eddb9027fbe96d020efb8ac32f7cb3774a14fac0407d6dcb3f2239d86b7ef668387328db2f0759a433dfb060bf883ba43d17b4b59ace1",
    "x-twitter-active-user": "yes",
    "x-twitter-auth-type": "OAuth2Session",
    "x-twitter-client-language": "en"
  },
  "referrer": "https://twitter.com/Shokker_ftn",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});

VARIABLES :
  include_profile_interstitial_type=1&
  include_blocking=1&
  include_blocked_by=1&
  include_followed_by=1&
  include_want_retweets=1&
  include_mute_edge=1&
  include_can_dm=1&
  include_can_media_tag=1&
  include_ext_has_nft_avatar=1&
  include_ext_is_blue_verified=1&
  include_ext_verified_type=1&
  skip_status=1&
  pc=true&
  display_location=profile_accounts_sidebar&
  limit=4&
  ext=mediaStats,highlightedLabel,hasNftAvatar,voiceInfo,birdwatchPivot,enrichments,superFollowMetadata,unmentionInfo,editControl,vibe
*/

export type RecommendationArray = Recommendation[]

export interface Recommendation {
  token: string
  user: User
  user_id: string
}

export interface User {
  id: number
  id_str: string
  name: string
  screen_name: string
  location?: string
  profile_location: any
  description: string
  url: string
  entities: Entities
  protected: boolean
  followers_count: number
  fast_followers_count: number
  normal_followers_count: number
  friends_count: number
  listed_count: number
  created_at: string
  favourites_count: number
  utc_offset: any
  time_zone: any
  geo_enabled: boolean
  verified: boolean
  statuses_count: number
  media_count: number
  lang: any
  contributors_enabled: boolean
  is_translator: boolean
  is_translation_enabled: boolean
  profile_background_color: string
  profile_background_image_url?: string
  profile_background_image_url_https?: string
  profile_background_tile: boolean
  profile_image_url: string
  profile_image_url_https: string
  profile_banner_url: string
  profile_link_color: string
  profile_sidebar_border_color: string
  profile_sidebar_fill_color: string
  profile_text_color: string
  profile_use_background_image: boolean
  default_profile: boolean
  default_profile_image: boolean
  pinned_tweet_ids: number[]
  pinned_tweet_ids_str: string[]
  has_custom_timelines: boolean
  can_dm: boolean
  can_media_tag: boolean
  following: boolean
  follow_request_sent: boolean
  notifications: boolean
  muting: boolean
  blocking: boolean
  blocked_by: boolean
  want_retweets: boolean
  advertiser_account_type: string
  advertiser_account_service_levels: any[]
  analytics_type: string
  profile_interstitial_type: string
  business_profile_state: string
  translator_type: string
  withheld_in_countries: any[]
  followed_by: boolean
  ext_highlighted_label: ExtHighlightedLabel
  ext_is_blue_verified: boolean
  require_some_consent: boolean
}

export interface Entities {
  url: Url
  description: Description
}

export interface Url {
  urls: Url2[]
}

export interface Url2 {
  url: string
  expanded_url: string
  display_url: string
  indices: number[]
}

export interface Description {
  hashtags: any[]
  symbols: any[]
  user_mentions: any[]
  urls: Url3[]
}

export interface Url3 {
  url: string
  expanded_url: string
  display_url: string
  indices: number[]
}

export interface ExtHighlightedLabel {}
