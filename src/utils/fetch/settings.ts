import { fetchProxy } from "../proxy"

export const getSettings = async () => {
  const res = await fetchProxy(
    'https://api.twitter.com/1.1/account/settings.json?include_ext_sharing_audiospaces_listening_data_with_followers=true&include_mention_filter=true&include_nsfw_user_flag=true&include_nsfw_admin_flag=true&include_ranked_timeline=true&include_alt_text_compose=true&ext=ssoConnections&include_country_code=true&include_ext_dm_nsfw_media_filter=true', {
      "headers": {
        "accept": "*/*",
        "authorization": import.meta.env.VITE_BEARER_TOKEN_TWITTER,
        "x-csrf-token": "106e9ddc4f332f928de2eebc3496928fe6663ec93702dbc667735c64234406306fa5ac9a80eb1714e019145b92c0f6efa96edba4426d1d141a0e738dfd7d1138a1d8f2297d4d1a8ed9bcc29eea81bf31",
        "Cookie": `kdt=op6KVvRA4lQO8MymHddnS3Ztlc5ElnKU09Elq6QJ; dnt=1; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; guest_id_ads=v1%3A170258044947635877; guest_id_marketing=v1%3A170258044947635877; _ga=GA1.2.825641528.1702770637; _gid=GA1.2.2078389671.1707304069; auth_multi="1270649793048649728:8db649f1949deb9d25d3446f119c84eaded6d9df"; auth_token=7cc7fda6e3fc48274010addbb165fde51ec5c7a9; twid=u%3D843157717611089920; personalization_id="v1_QaUKyfzqTmmOL4MKKq8zyw=="; guest_id=v1%3A170992617925766267; ct0=106e9ddc4f332f928de2eebc3496928fe6663ec93702dbc667735c64234406306fa5ac9a80eb1714e019145b92c0f6efa96edba4426d1d141a0e738dfd7d1138a1d8f2297d4d1a8ed9bcc29eea81bf31`
      }
    }
  )
  return await res.json() as SettingsType
}

export interface SettingsType {
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
