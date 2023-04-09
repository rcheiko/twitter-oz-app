import { gql } from "@apollo/client"

// TODO: add name of the user who need to be searched
export const GET_PROFILE_SPOTLIGHT = gql`
  query ProfileSpotlight {
    ProfileSpotlight @rest(type: "ProfileSpotlight", path: "ProfileSpotlight") {
      data {
        user_result: user_result_by_screen_name {
          result {
            legacy {
              name
              screen_name
              protected
              following
              followed_by
              blocking
              blocked_by
            }
            id
          }
          id
        }
      }
    }
  }
`

export const GET_PROFILE_TIMELINE_TWEET = gql`
  query UserTweets {
    UserTweets @rest(type: "UserTweets", path: "UserTweets") {
      data {
        user {
          result {
            timeline_v2 {
              timeline {
                instructions {
                  entries {
                    entryId
                    content {
                      entryType
                      itemContent {
                        itemType
                        tweet_results {
                          result {
                            rest_id
                            core {
                              user_results {
                                result {
                                  rest_id
                                }
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
                                  needs_phone_verification
                                  normal_followers_count
                                  pinned_tweet_ids_str
                                  possibly_sensitive
                                  profile_image_url_https
                                  profile_interstitial_type
                                  screen_name
                                  statuses_count
                                  translator_type
                                  verified
                                  want_retweets
                                  withheld_in_countries
                                }
                                business_account
                              }
                            }
                            unmention_data
                            edit_control {
                                is_edit_eligible
                                edits_remaining
                            }
                            edit_perspective {
                                favorited
                                retweeted
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
                                favorite_count
                                favorited
                                full_text
                                is_quote_status
                                lang
                                quote_count
                                reply_count
                                retweet_count
                                retweeted
                                user_id_str
                            }
                            quick_promote_eligibility {
                                eligibility
                            }
                          }
                        }
                        tweetDisplayType
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