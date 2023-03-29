// fetch("https://twitter.com/i/api/graphql/PoZUz38XdT-pXNk0FRfKSw/UserTweets?variables=%7B%22userId%22%3A%22843157717611089920%22%2C%22count%22%3A40%2C%22includePromotedContent%22%3Atrue%2C%22withQuickPromoteEligibilityTweetFields%22%3Atrue%2C%22withDownvotePerspective%22%3Afalse%2C%22withReactionsMetadata%22%3Afalse%2C%22withReactionsPerspective%22%3Afalse%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22responsive_web_twitter_blue_verified_badge_is_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22vibe_api_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Afalse%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Afalse%2C%22interactive_text_enabled%22%3Atrue%2C%22responsive_web_text_conversations_enabled%22%3Afalse%2C%22longform_notetweets_richtext_consumption_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
//     "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
//     "cache-control": "no-cache",
//     "content-type": "application/json",
//     "pragma": "no-cache",
//     "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-csrf-token": "59b91845c9a89633ea0df693dbea6c7cd8e694f4bd0fb4f58a1dc3a5be4f9fe9a8be88184c1125c79d3ee69df5145b2493a44f091b99ed724ccb07184abaaa6729f896b8098220957ac6137b019018eb",
//     "x-twitter-active-user": "yes",
//     "x-twitter-auth-type": "OAuth2Session",
//     "x-twitter-client-language": "en"
//   },
//   "referrer": "https://twitter.com/Shokker_ftn",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });

export interface Tweet {
    __typename: string;
    rest_id: string;
    core: {
      user_results: {
        result: {
          __typename: string;
          id: string;
          rest_id: string;
          affiliates_highlighted_label: unknown;
          has_graduated_access: boolean;
          is_blue_verified: boolean;
          legacy: {
            can_dm: boolean;
            can_media_tag: boolean;
            created_at: string;
            default_profile: boolean;
            default_profile_image: boolean;
            description: string;
            entities: {
              description: {
                urls: unknown[];
              };
            };
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
            needs_phone_verification: boolean;
            normal_followers_count: number;
            pinned_tweet_ids_str: unknown[];
            possibly_sensitive: boolean;
            profile_image_url_https: string;
            profile_interstitial_type: string;
            screen_name: string;
            statuses_count: number;
            translator_type: string;
            verified: boolean;
            want_retweets: boolean;
            withheld_in_countries: unknown[];
          };
          business_account: unknown;
        };
      };
    };
    unmention_data: unknown;
    edit_control: {
      edit_tweet_ids: string[];
      editable_until_msecs: string;
      is_edit_eligible: boolean;
      edits_remaining: string;
    };
    edit_perspective: {
      favorited: boolean;
      retweeted: boolean;
    };
    is_translatable: boolean;
    views: {
      state: string;
    };
    source: string;
    legacy: {
      bookmark_count: number;
      bookmarked: boolean;
      created_at: string;
      conversation_id_str: string;
      display_text_range: number[];
      entities: {
        user_mentions: unknown[];
        urls: unknown[];
        hashtags: unknown[];
        symbols: unknown[];
      };
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
    };
    quick_promote_eligibility: {
      eligibility: string;
    };
  }
  
  export interface TimelineAddEntry {
    entryId: string;
    sortIndex: string;
    content: {
      entryType: string;
      __typename: string;
      itemContent: {
        itemType: string;
        __typename: string;
        tweet_results: {
          result: Tweet;
        };
        tweetDisplayType: string;
      };
    };
  }
  
  export interface TimelineClearCache {
    type: "TimelineClearCache";
  }
  
  export interface TimelineAddEntries {
    type: "TimelineAddEntries";
    entries: TimelineAddEntry[];
  }
  
  export interface Timeline {
    instructions: (TimelineClearCache | TimelineAddEntries)[];
  }
  
  export interface Timeline_v2 {
    timeline: Timeline;
  }
  
  export interface UserResult {
    __typename: string;
    timeline_v2: Timeline_v2;
  }
  
  export interface User {
    result: UserResult;
  }
  
  export interface Data {
    user: {
      result: UserResult;
    };
  }
  
  export interface TwitterData {
    data: Data;
  }
  