// fetch("https://api.twitter.com/1.1/account/settings.json?include_mention_filter=true&include_nsfw_user_flag=true&include_nsfw_admin_flag=true&include_ranked_timeline=true&include_alt_text_compose=true&ext=ssoConnections&include_country_code=true&include_ext_dm_nsfw_media_filter=true&include_ext_sharing_audiospaces_listening_data_with_followers=true", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
//     "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
//     "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-site",
//     "x-csrf-token": "03ce76555f4e96d5b21a7fd41af25c1659ab4ce14f0c1c7b172eddb9027fbe96d020efb8ac32f7cb3774a14fac0407d6dcb3f2239d86b7ef668387328db2f0759a433dfb060bf883ba43d17b4b59ace1",
//     "x-twitter-active-user": "yes",
//     "x-twitter-auth-type": "OAuth2Session",
//     "x-twitter-client-language": "en"
//   },
//   "referrer": "https://twitter.com/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });

// VARIABLE:

// include_mention_filter=true&
// include_nsfw_user_flag=true&
// include_nsfw_admin_flag=true&
// include_ranked_timeline=true&
// include_alt_text_compose=true&
// ext=ssoConnections&
// include_country_code=true&
// include_ext_dm_nsfw_media_filter=true&
// include_ext_sharing_audiospaces_listening_data_with_followers=true

export interface Settings {
  time_zone: TimeZone;
  protected: boolean;
  screen_name: string;
  always_use_https: boolean;
  use_cookie_personalization: boolean;
  sleep_time: SleepTime;
  geo_enabled: boolean;
  language: string;
  discoverable_by_email: boolean;
  discoverable_by_mobile_phone: boolean;
  display_sensitive_media: boolean;
  personalized_trends: boolean;
  allow_media_tagging: string;
  allow_contributor_request: string;
  allow_ads_personalization: boolean;
  allow_logged_out_device_personalization: boolean;
  allow_location_history_personalization: boolean;
  allow_sharing_data_for_third_party_personalization: boolean;
  allow_dms_from: string;
  allow_dm_groups_from: string;
  translator_type: string;
  country_code: string;
  nsfw_user: boolean;
  nsfw_admin: boolean;
  ranked_timeline_setting: number;
  ranked_timeline_eligible: boolean;
  address_book_live_sync_enabled: boolean;
  universal_quality_filtering_enabled: string;
  dm_receipt_setting: string;
  alt_text_compose_enabled: any;
  mention_filter: string;
  allow_authenticated_periscope_requests: boolean;
  protect_password_reset: boolean;
  require_password_login: boolean;
  requires_login_verification: boolean;
  ext_dm_nsfw_media_filter: boolean;
  ext_sharing_audiospaces_listening_data_with_followers: boolean;
  ext: Ext;
  dm_quality_filter: string;
  autoplay_disabled: boolean;
  settings_metadata: SettingsMetadata;
}

export interface TimeZone {
  name: string;
  utc_offset: number;
  tzinfo_name: string;
}

export interface SleepTime {
  enabled: boolean;
  end_time: any;
  start_time: any;
}

export interface Ext {
  ssoConnections: SsoConnections;
}

export interface SsoConnections {
  r: R;
  ttl: number;
}

export interface R {
  ok: any[];
}

export interface SettingsMetadata {
  is_eu: string;
}
