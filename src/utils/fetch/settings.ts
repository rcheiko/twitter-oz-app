import { fetchProxy } from "../proxy"

export const getSettings = async () => {
  const res = await fetchProxy(
    'https://api.twitter.com/1.1/account/settings.json?include_ext_sharing_audiospaces_listening_data_with_followers=true&include_mention_filter=true&include_nsfw_user_flag=true&include_nsfw_admin_flag=true&include_ranked_timeline=true&include_alt_text_compose=true&ext=ssoConnections&include_country_code=true&include_ext_dm_nsfw_media_filter=true', {
      headers: {
        accept: "*/*",
        authorization: import.meta.env.VITE_BEARER_TOKEN_TWITTER,
        "x-csrf-token": "74de5dc1fc7fef37d9b9a6a47a1c6509f80ad975cf7bfdaa6f7655a2616b48dea0d740ff46100a305a621a8aec8db8afb1ebf3b7a94ee4559d2f0004c6a67460bb006dbb039fec6cb647a296f72122ce",
        Cookie: `kdt=op6KVvRA4lQO8MymHddnS3Ztlc5ElnKU09Elq6QJ; dnt=1; g_state={"i_l":0}; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; guest_id_ads=v1%3A170258044947635877; guest_id_marketing=v1%3A170258044947635877; _ga=GA1.2.825641528.1702770637; _gid=GA1.2.1281033806.1711925821; auth_multi="1270649793048649728:8db649f1949deb9d25d3446f119c84eaded6d9df"; auth_token=3c5521333a6f3bf8714a3422a0c6745d32ff74f0; personalization_id="v1_hF67G9SAsPWaCKfyvKiH5g=="; guest_id=v1%3A171226296269133117; twid=u%3D843157717611089920; ct0=74de5dc1fc7fef37d9b9a6a47a1c6509f80ad975cf7bfdaa6f7655a2616b48dea0d740ff46100a305a621a8aec8db8afb1ebf3b7a94ee4559d2f0004c6a67460bb006dbb039fec6cb647a296f72122ce; lang=en`
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
