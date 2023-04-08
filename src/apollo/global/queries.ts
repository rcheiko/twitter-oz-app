import { gql } from '@apollo/client';

export const GET_PROFILE_CONNECTED = gql`
  query ProfileConnected {
    ProfileConnected @rest(type: "ProfileConnected", path: "ProfileConnected") {
        users {
            user_id
            name
            screen_name
            avatar_image_url
            is_suspended
            is_verified
            is_protected
            is_auth_valid
        }
    }
  }
`

export const GET_PROFILE_VERIFIED = gql`
  query ProfileVerified {
    ProfileVerified @rest(type: "ProfileVerified", path: "ProfileVerified") {
        users {
            user_id
            name
            screen_name
            avatar_image_url
            is_suspended
            is_verified
            is_protected
            is_auth_valid
        }
    }
  }
`

export const GET_RECOMMENDATION = gql`
    query Recommendation {
        Recommendation @rest(type: "Recommendation", path: "Recommendation") {
            user {
                id
                name
                screen_name
                location
                profile_location
                description
                url
                entities {
                    url {
                        urls {
                            url
                            expanded_url
                            display_url
                            indices
                        }
                    }
                    description {
                        urls {
                            url
                            expanded_url
                            display_url
                            indices
                        }
                    }
                }
                protected
                followers_count
                fast_followers_count
                normal_followers_count
                friends_count
                listed_count
                created_at
                favourites_count
                utc_offset
                time_zone
                geo_enabled
                verified
                statuses_count
                media_count
                lang
                contributors_enabled
                is_translator
                is_translation_enabled
                profile_background_color
                profile_background_image_url
                profile_background_image_url_https
                profile_background_tile
                profile_image_url
                profile_image_url_https
                profile_banner_url
                profile_link_color
                profile_sidebar_border_color
                profile_sidebar_fill_color
                profile_text_color
                profile_use_background_image
                default_profile
                default_profile_image
                pinned_tweet_ids
                has_custom_timelines
                can_dm
                can_media_tag
                following
                follow_request_sent
                notifications
                muting
                blocking
                blocked_by
                want_retweets
                advertiser_account_type
                analytics_type
                profile_interstitial_type
                business_profile_state
                translator_type
                withheld_in_countries
                followed_by
                ext_is_blue_verified
                require_some_consent
            }
            user_id
        }
    }
`