import { fetchProxy } from "../proxy"

const params = new URLSearchParams({
  include_profile_interstitial_type: "1",
  include_blocking: "1",
  include_blocked_by: "1",
  include_followed_by: "1",
  include_want_retweets: "1",
  include_mute_edge: "1",
  include_can_dm: "1",
  include_can_media_tag: "1",
  include_ext_is_blue_verified: "1",
  include_ext_verified_type: "1",
  include_ext_profile_image_shape: "1",
  skip_status: "1",
  cards_platform: "Web-12",
  include_cards: "1",
  include_ext_alt_text: "true",
  include_ext_limited_action_results: "true",
  include_quote_count: "true",
  include_reply_count: "1",
  tweet_mode: "extended",
  include_ext_views: "true",
  include_entities: "true",
  include_user_entities: "true",
  include_ext_media_color: "true",
  include_ext_media_availability: "true",
  include_ext_sensitive_media_warning: "true",
  include_ext_trusted_friends_metadata: "true",
  send_error_codes: "true",
  simple_quoted_tweet: "true",
  count: "20",
  requestContext: "launch",
  ext: "mediaStats,highlightedLabel,voiceInfo,birdwatchPivot,superFollowMetadata,unmentionInfo,editControl,article",
})

export const getNotifications = async () => {

  const res = await fetchProxy(
    `https://x.com/i/api/2/notifications/all.json?${params.toString()}`, {
      headers: {
        accept: "*/*",
        authorization: import.meta.env.VITE_BEARER_TOKEN_TWITTER,
        "x-csrf-token": "afedc7db22625a05e9369bd1f35a18a9e5bf3b475e18350b698bd892bd1ee06cd752c8fca86c08b527f0412e33f0e1d1b2196c0a14ec64d0a389badeb21c9e61dc27237809d0abe710fb0498128e24c9",
        Cookie: `guest_id=v1%3A171570254258676814; twid=u%3D843157717611089920; auth_token=3c5521333a6f3bf8714a3422a0c6745d32ff74f0; ct0=afedc7db22625a05e9369bd1f35a18a9e5bf3b475e18350b698bd892bd1ee06cd752c8fca86c08b527f0412e33f0e1d1b2196c0a14ec64d0a389badeb21c9e61dc27237809d0abe710fb0498128e24c9; d_prefs=MjoxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; lang=en`
      }
    }
  )
  const result = await res.json() as TimelineResponse
  return result.globalObjects
}

export interface GlobalObjects {
  users: Record<string, User>
  tweets: Record<string, Tweet>
  notifications: Record<string, Notification>
}

export interface User {
  id: number
  id_str: string
  name: string
  screen_name: string
  location?: string
  description: string
  url?: string
  entities: Entities
  protected: boolean
  followers_count: number
  friends_count: number
  listed_count: number
  created_at: string
  favourites_count: number
  utc_offset?: number | null
  time_zone?: string | null
  geo_enabled: boolean
  verified: boolean
  statuses_count: number
  lang?: string | null
  profile_background_color: string
  profile_background_image_url: string
  profile_background_image_url_https: string
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
  following: boolean | null
  follow_request_sent: boolean | null
  notifications: boolean | null
  blocking?: boolean
  blocked_by?: boolean
  want_retweets: boolean
  profile_interstitial_type: string
  translator_type: string
  withheld_in_countries: string[]
  followed_by: boolean
  ext_is_blue_verified: boolean
  ext_highlighted_label: Record<string, any>
}

interface Entities {
  url?: UrlEntity
  description: UrlEntity
}

interface UrlEntity {
  urls: Url[]
}

interface Url {
  url: string
  expanded_url: string
  display_url: string
  indices: number[]
}

export interface Tweet {
  created_at: string
  id: number
  id_str: string
  full_text: string
  truncated: boolean
  display_text_range: number[]
  entities: TweetEntities
  source: string
  in_reply_to_status_id?: number
  in_reply_to_status_id_str?: string
  in_reply_to_user_id?: number
  in_reply_to_user_id_str?: string
  in_reply_to_screen_name?: string
  user_id: number
  user_id_str: string
  geo?: null
  coordinates?: null
  place?: null
  contributors?: null
  is_quote_status: boolean
  retweet_count: number
  favorite_count: number
  reply_count: number
  quote_count: number
  conversation_id: number
  conversation_id_str: string
  conversation_muted: boolean
  favorited: boolean
  retweeted: boolean
  lang: string
  ext: Record<string, any>
}

interface TweetEntities {
  hashtags: any[]
  symbols: any[]
  user_mentions: UserMention[]
  urls: any[]
}

interface UserMention {
  screen_name: string
  name: string
  id: number
  id_str: string
  indices: number[]
}

interface Notification {
  id: string
  timestampMs: string
  icon: Icon
  message: Message
  template: Template
}

interface Icon {
  id: string
}

export interface Message {
  text: string
  entities: MessageEntity[]
  rtl: boolean
}

interface MessageEntity {
  fromIndex: number
  toIndex: number
  format?: string
  ref?: FromUser
}

interface Template {
  aggregateUserActionsV1: AggregateUserActionsV1
}

interface AggregateUserActionsV1 {
  targetObjects: any[]
  fromUsers: FromUser[]
}

interface FromUser {
  user: {
    id: string
  }
}

interface Timeline {
  id: string
  instructions: Instruction[]
  responseObjects: {
    feedbackActions: Record<string, FeedbackAction>
  }
}

interface Instruction {
  clearCache?: {}
  addEntries?: AddEntries
  clearEntriesUnreadState?: {}
  markEntriesUnreadGreaterThanSortIndex?: MarkEntriesUnreadGreaterThanSortIndex
}

interface AddEntries {
  entries: Entry[]
}

interface Entry {
  entryId: string
  sortIndex: string
  content: Content
}

interface Content {
  operation?: Operation
  item?: Item
}

interface Operation {
  cursor: Cursor
}

interface Cursor {
  value: string
  cursorType: string
}

interface Item {
  content: ItemContent
}

interface ItemContent {
  notification?: NotificationItem
  tweet?: TweetItem
}

interface NotificationItem {
  id: string
  url: URL
  fromUsers: string[]
  targetTweets: any[]
}

interface URL {
  urlType: string
  url: string
}

interface TweetItem {
  id: string
  displayType: string
}

interface FeedbackAction {
  feedbackType: string
  prompt: string
  confirmation: string
  feedbackUrl: string
  hasUndoAction: boolean
  confirmationDisplayType: string
  clientEventInfo: ClientEventInfo
}

interface ClientEventInfo {
  action: string
}

interface MarkEntriesUnreadGreaterThanSortIndex {
  sortIndex: string
}

interface TimelineResponse {
  globalObjects: GlobalObjects
  timeline: Timeline
}