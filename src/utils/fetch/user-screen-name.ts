import { Result3 } from "../../types/twitter/UserTweet"
import { fetchProxy } from "../proxy"

export const getUserScreenName = async (screenName: string) => {
  const res = await fetchProxy(
    `https://x.com/i/api/graphql/BQ6xjFU6Mgm-WhEP3OiT9w/UserByScreenName?variables=%7B%22screen_name%22%3A%22${screenName}%22%7D&features=%7B%22hidden_profile_subscriptions_enabled%22%3Atrue%2C%22rweb_tipjar_consumption_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22subscriptions_verification_info_is_identity_verified_enabled%22%3Atrue%2C%22subscriptions_verification_info_verified_since_enabled%22%3Atrue%2C%22highlights_tweets_tab_ui_enabled%22%3Atrue%2C%22responsive_web_twitter_article_notes_tab_enabled%22%3Atrue%2C%22subscriptions_feature_can_gift_premium%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%7D&fieldToggles=%7B%22withAuxiliaryUserLabels%22%3Afalse%7D`, {
      headers: {
        accept: "*/*",
        authorization: import.meta.env.VITE_BEARER_TOKEN_TWITTER,
        "x-csrf-token": "afedc7db22625a05e9369bd1f35a18a9e5bf3b475e18350b698bd892bd1ee06cd752c8fca86c08b527f0412e33f0e1d1b2196c0a14ec64d0a389badeb21c9e61dc27237809d0abe710fb0498128e24c9",
        Cookie: `guest_id=v1%3A171570254258676814; twid=u%3D843157717611089920; auth_token=3c5521333a6f3bf8714a3422a0c6745d32ff74f0; ct0=afedc7db22625a05e9369bd1f35a18a9e5bf3b475e18350b698bd892bd1ee06cd752c8fca86c08b527f0412e33f0e1d1b2196c0a14ec64d0a389badeb21c9e61dc27237809d0abe710fb0498128e24c9; d_prefs=MjoxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; lang=en`
      }
    }
  )
  const result = await res.json()
  return await result.data.user.result as Result3
}