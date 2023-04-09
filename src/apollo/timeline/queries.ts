import { gql } from "@apollo/client";

export const GET_HOME_TIMELINE = gql`
  query HomeTimeline {
    HomeTimeline @rest(type: "HomeTimeline", path: "HomeTimeline") {
        data {
            home {
                home_timeline :home_timeline_urt {
                    instructions {
                        type
                        entries {
                            entryId
                            sortIndex
                            content {
                                entryType
                                itemContent {
                                    itemType
                                    tweet_results {
                                        result {
                                            __typename
                                            rest_id
                                            core {
                                                user_results {
                                                    result {
                                                        __typename
                                                        rest_id
                                                        affiliates_highlighted_label
                                                        has_graduated_access
                                                        is_blue_verified
                                                        legacy {
                                                            can_dm
                                                            can_media_tag
                                                            created_at
                                                            default_profile
                                                            default_profile_image
                                                            description
                                                            entities {
                                                                description {
                                                                    urls {
                                                                        display_url
                                                                        expanded_url
                                                                        url
                                                                    }
                                                                }
                                                                url {
                                                                    urls {
                                                                        display_url
                                                                        expanded_url
                                                                        url
                                                                    }
                                                                }
                                                            }
                                                            fast_followers_count
                                                            favourites_count
                                                            followers_count
                                                            friends_count
                                                            has_custom_timelines
                                                            is_translator
                                                            listed_count
                                                            location
                                                            media_count
                                                            name
                                                            normal_followers_count
                                                            possibly_sensitive
                                                            profile_banner_url
                                                            profile_image_url_https
                                                            screen_name
                                                            statuses_count
                                                            translator_type
                                                            url
                                                            verified
                                                            wannt_retweets
                                                            withheld_in_countries
                                                        }
                                                        business_account
                                                    }
                                                }
                                            }
                                            unmention_data
                                            edit_control {
                                                editable_until_msecs
                                                is_edit_eligible
                                                edits_remaining
                                            }
                                            is_translatable
                                            views {
                                                count
                                                state
                                            }
                                            source
                                            legacy {
                                                bookmark_count
                                                bookmarked
                                                created_at
                                                entities {
                                                    media {
                                                        display_url
                                                        expanded_url
                                                        id_str
                                                        media_url_https
                                                        type
                                                        url
                                                    }
                                                    user_mentions
                                                    urls {
                                                        display_url
                                                        expanded_url
                                                        url
                                                    }
                                                    hashtags
                                                    symbols
                                                    extended_entities {
                                                        media {
                                                            display_url
                                                            expanded_url
                                                            media_url_https
                                                            type
                                                            url

                                                        }
                                                    }
                                                    favorite_count
                                                    favorited
                                                    full_text
                                                    is_quote_status
                                                    lang
                                                    possibly_sensitive
                                                    possibly_sensitive_editable
                                                    quote_count
                                                    reply_count
                                                    retweet_count
                                                    retweeted
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
  }
`