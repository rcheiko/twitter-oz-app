// fetch("https://twitter.com/i/api/graphql/PoZUz38XdT-pXNk0FRfKSw/UserTweets?variables=%7B%22userId%22%3A%22843157717611089920%22%2C%22count%22%3A40%2C%22includePromotedContent%22%3Atrue%2C%22withQuickPromoteEligibilityTweetFields%22%3Atrue%2C%22withDownvotePerspective%22%3Afalse%2C%22withReactionsMetadata%22%3Afalse%2C%22withReactionsPerspective%22%3Afalse%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22responsive_web_twitter_blue_verified_badge_is_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22vibe_api_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Afalse%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Afalse%2C%22interactive_text_enabled%22%3Atrue%2C%22responsive_web_text_conversations_enabled%22%3Afalse%2C%22longform_notetweets_richtext_consumption_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D",

//  {
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


// VARIBLES :
// '{"userId": "843157717611089920",
// "count": 40,
// "includePromotedContent": true,
// "withQuickPromoteEligibilityTweetFields": true,
// "withDownvotePerspective": false,
// "withReactionsMetadata": false,
// "withReactionsPerspective": false,
// "withVoice": true,
// "withV2Timeline": true}&features={"responsive_web_twitter_blue_verified_badge_is_enabled": true,
// "responsive_web_graphql_exclude_directive_enabled": true,
// "verified_phone_label_enabled": false,
// "responsive_web_graphql_timeline_navigation_enabled": true,
// "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false,
// "tweetypie_unmention_optimization_enabled": true,
// "vibe_api_enabled": true,
// "responsive_web_edit_tweet_api_enabled": true,
// "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true,
// "view_counts_everywhere_api_enabled": true,
// "longform_notetweets_consumption_enabled": true,
// "tweet_awards_web_tipping_enabled": false,
// "freedom_of_speech_not_reach_fetch_enabled": false,
// "standardized_nudges_misinfo": true,
// "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": false,
// "interactive_text_enabled": true,
// "responsive_web_text_conversations_enabled": false,
// "longform_notetweets_richtext_consumption_enabled": false,
// "responsive_web_enhance_cards_enabled": false
// }'
  
  export interface userTweet {
    data: Data
  }
  
  export interface Data {
    user: User
  }
  
  export interface User {
    result: Result
  }
  
  export interface Result {
    __typename: string
    timeline_v2: TimelineV2
  }
  
  export interface TimelineV2 {
    timeline: Timeline
  }
  
  export interface Timeline {
    instructions: Instruction[]
    responseObjects: ResponseObjects
  }
  
  export interface Instruction {
    type: string
    entries?: Entry[]
    entry?: Entry2
  }
  
  export interface Entry {
    entryId: string
    sortIndex: string
    content: Content
  }
  
  export interface Content {
    entryType: string
    __typename: string
    itemContent?: ItemContent
    items?: Item[]
    displayType?: string
    header?: Header
    footer?: Footer
    clientEventInfo?: ClientEventInfo2
    value?: string
    cursorType?: string
    stopOnEmptyResponse?: boolean
  }
  
  export interface ItemContent {
    itemType: string
    __typename: string
    tweet_results: TweetResults
    tweetDisplayType: string
  }
  
  export interface TweetResults {
    result: Result2
  }
  
  export interface Result2 {
    __typename: string
    rest_id: string
    core: Core
    unmention_data: UnmentionData
    edit_control: EditControl
    edit_perspective: EditPerspective
    is_translatable: boolean
    views: Views
    source: string
    legacy: Legacy2
    quick_promote_eligibility: QuickPromoteEligibility
    card?: Card2
    unified_card?: UnifiedCard2
    quoted_status_result?: QuotedStatusResult
    previous_counts?: PreviousCounts
  }
  
  export interface Core {
    user_results: UserResults
  }
  
  export interface UserResults {
    result: Result3
  }
  
  export interface Result3 {
    __typename: string
    id: string
    rest_id: string
    affiliates_highlighted_label: AffiliatesHighlightedLabel
    has_graduated_access: boolean
    is_blue_verified: boolean
    legacy: Legacy
    professional: Professional
    business_account: BusinessAccount
  }
  
  export interface AffiliatesHighlightedLabel {}
  
  export interface Legacy {
    following: boolean
    can_dm: boolean
    can_media_tag: boolean
    created_at: string
    default_profile: boolean
    default_profile_image: boolean
    description: string
    entities: Entities
    fast_followers_count: number
    favourites_count: number
    followers_count: number
    friends_count: number
    has_custom_timelines: boolean
    is_translator: boolean
    listed_count: number
    location: string
    media_count: number
    name: string
    normal_followers_count: number
    pinned_tweet_ids_str: string[]
    possibly_sensitive: boolean
    profile_banner_url: string
    profile_image_url_https: string
    profile_interstitial_type: string
    screen_name: string
    statuses_count: number
    translator_type: string
    url: string
    verified: boolean
    want_retweets: boolean
    withheld_in_countries: any[]
  }
  
  export interface Entities {
    description: Description
    url: Url
  }
  
  export interface Description {
    urls: any[]
  }
  
  export interface Url {
    urls: Url2[]
  }
  
  export interface Url2 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface Professional {
    rest_id: string
    professional_type: string
    category: Category[]
  }
  
  export interface Category {
    id: number
    name: string
    icon_name: string
  }
  
  export interface BusinessAccount {}
  
  export interface UnmentionData {}
  
  export interface EditControl {
    edit_tweet_ids?: string[]
    editable_until_msecs?: string
    is_edit_eligible?: boolean
    edits_remaining?: string
    initial_tweet_id?: string
    edit_control_initial?: EditControlInitial
  }
  
  export interface EditControlInitial {
    edit_tweet_ids: string[]
    editable_until_msecs: string
    is_edit_eligible: boolean
    edits_remaining: string
  }
  
  export interface EditPerspective {
    favorited: boolean
    retweeted: boolean
  }
  
  export interface Views {
    count?: string
    state: string
  }
  
  export interface Legacy2 {
    bookmark_count: number
    bookmarked: boolean
    created_at: string
    conversation_id_str: string
    display_text_range: number[]
    entities: Entities2
    favorite_count: number
    favorited: boolean
    full_text: string
    is_quote_status: boolean
    lang: string
    quote_count: number
    reply_count: number
    retweet_count: number
    retweeted: boolean
    user_id_str: string
    id_str: string
    retweeted_status_result?: RetweetedStatusResult
    possibly_sensitive?: boolean
    possibly_sensitive_editable?: boolean
    extended_entities?: ExtendedEntities2
    quoted_status_id_str?: string
    quoted_status_permalink?: QuotedStatusPermalink
  }
  
  export interface Entities2 {
    user_mentions: UserMention[]
    urls: Url3[]
    hashtags: Hashtag[]
    symbols: any[]
    media?: Medum[]
  }
  
  export interface UserMention {
    id_str: string
    name: string
    screen_name: string
    indices: number[]
  }
  
  export interface Url3 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface Hashtag {
    indices: number[]
    text: string
  }
  
  export interface Medum {
    display_url: string
    expanded_url: string
    id_str: string
    indices: number[]
    media_url_https: string
    type: string
    url: string
    sizes: Sizes
    original_info: OriginalInfo
    source_status_id_str?: string
    source_user_id_str?: string
  }
  
  export interface Sizes {
    large: Large
    medium: Medium
    small: Small
    thumb: Thumb
  }
  
  export interface Large {
    h: number
    w: number
    resize: string
  }
  
  export interface Medium {
    h: number
    w: number
    resize: string
  }
  
  export interface Small {
    h: number
    w: number
    resize: string
  }
  
  export interface Thumb {
    h: number
    w: number
    resize: string
  }
  
  export interface OriginalInfo {
    height: number
    width: number
    focus_rects?: FocusRect[]
  }
  
  export interface FocusRect {
    x: number
    y: number
    w: number
    h: number
  }
  
  export interface RetweetedStatusResult {
    result: Result4
  }
  
  export interface Result4 {
    __typename: string
    rest_id: string
    core: Core2
    unmention_data: UnmentionData2
    edit_control: EditControl2
    edit_perspective: EditPerspective2
    is_translatable: boolean
    views: Views2
    source: string
    legacy: Legacy4
    card?: Card
    unified_card?: UnifiedCard
  }
  
  export interface Core2 {
    user_results: UserResults2
  }
  
  export interface UserResults2 {
    result: Result5
  }
  
  export interface Result5 {
    __typename: string
    id: string
    rest_id: string
    affiliates_highlighted_label: AffiliatesHighlightedLabel2
    has_graduated_access: boolean
    is_blue_verified: boolean
    legacy: Legacy3
    professional?: Professional2
    business_account: BusinessAccount2
  }
  
  export interface AffiliatesHighlightedLabel2 {}
  
  export interface Legacy3 {
    can_dm: boolean
    can_media_tag: boolean
    created_at: string
    default_profile: boolean
    default_profile_image: boolean
    description: string
    entities: Entities3
    fast_followers_count: number
    favourites_count: number
    followers_count: number
    friends_count: number
    has_custom_timelines: boolean
    is_translator: boolean
    listed_count: number
    location: string
    media_count: number
    name: string
    normal_followers_count: number
    pinned_tweet_ids_str: string[]
    possibly_sensitive: boolean
    profile_banner_url: string
    profile_image_url_https: string
    profile_interstitial_type: string
    screen_name: string
    statuses_count: number
    translator_type: string
    url?: string
    verified: boolean
    want_retweets: boolean
    withheld_in_countries: any[]
    following?: boolean
    verified_type?: string
  }
  
  export interface Entities3 {
    description: Description2
    url?: Url5
  }
  
  export interface Description2 {
    urls: Url4[]
  }
  
  export interface Url4 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface Url5 {
    urls: Url6[]
  }
  
  export interface Url6 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface Professional2 {
    rest_id: string
    professional_type: string
    category: Category2[]
  }
  
  export interface Category2 {
    id: number
    name: string
    icon_name: string
  }
  
  export interface BusinessAccount2 {}
  
  export interface UnmentionData2 {}
  
  export interface EditControl2 {
    edit_tweet_ids: string[]
    editable_until_msecs: string
    is_edit_eligible: boolean
    edits_remaining: string
  }
  
  export interface EditPerspective2 {
    favorited: boolean
    retweeted: boolean
  }
  
  export interface Views2 {
    count: string
    state: string
  }
  
  export interface Legacy4 {
    bookmark_count: number
    bookmarked: boolean
    created_at: string
    conversation_id_str: string
    display_text_range: number[]
    entities: Entities4
    extended_entities?: ExtendedEntities
    favorite_count: number
    favorited: boolean
    full_text: string
    is_quote_status: boolean
    lang: string
    possibly_sensitive: boolean
    possibly_sensitive_editable: boolean
    quote_count: number
    reply_count: number
    retweet_count: number
    retweeted: boolean
    user_id_str: string
    id_str: string
    in_reply_to_screen_name?: string
    in_reply_to_status_id_str?: string
    in_reply_to_user_id_str?: string
    self_thread?: SelfThread
  }
  
  export interface Entities4 {
    media?: Medum2[]
    user_mentions: UserMention2[]
    urls: Url7[]
    hashtags: Hashtag2[]
    symbols: any[]
  }
  
  export interface Medum2 {
    display_url: string
    expanded_url: string
    id_str: string
    indices: number[]
    media_url_https: string
    type: string
    url: string
    sizes: Sizes2
    original_info: OriginalInfo2
  }
  
  export interface Sizes2 {
    large: Large2
    medium: Medium2
    small: Small2
    thumb: Thumb2
  }
  
  export interface Large2 {
    h: number
    w: number
    resize: string
  }
  
  export interface Medium2 {
    h: number
    w: number
    resize: string
  }
  
  export interface Small2 {
    h: number
    w: number
    resize: string
  }
  
  export interface Thumb2 {
    h: number
    w: number
    resize: string
  }
  
  export interface OriginalInfo2 {
    height: number
    width: number
    focus_rects?: FocusRect2[]
  }
  
  export interface FocusRect2 {
    x: number
    y: number
    w: number
    h: number
  }
  
  export interface UserMention2 {
    id_str: string
    name: string
    screen_name: string
    indices: number[]
  }
  
  export interface Url7 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface Hashtag2 {
    indices: number[]
    text: string
  }
  
  export interface ExtendedEntities {
    media: Medum3[]
  }
  
  export interface Medum3 {
    display_url: string
    expanded_url: string
    ext_alt_text?: string
    id_str: string
    indices: number[]
    media_key: string
    media_url_https: string
    type: string
    url: string
    ext_media_availability: ExtMediaAvailability
    sizes: Sizes3
    original_info: OriginalInfo3
    additional_media_info?: AdditionalMediaInfo
    mediaStats?: MediaStats
    video_info?: VideoInfo
  }
  
  export interface ExtMediaAvailability {
    status: string
  }
  
  export interface Sizes3 {
    large: Large3
    medium: Medium3
    small: Small3
    thumb: Thumb3
  }
  
  export interface Large3 {
    h: number
    w: number
    resize: string
  }
  
  export interface Medium3 {
    h: number
    w: number
    resize: string
  }
  
  export interface Small3 {
    h: number
    w: number
    resize: string
  }
  
  export interface Thumb3 {
    h: number
    w: number
    resize: string
  }
  
  export interface OriginalInfo3 {
    height: number
    width: number
    focus_rects?: FocusRect3[]
  }
  
  export interface FocusRect3 {
    x: number
    y: number
    w: number
    h: number
  }
  
  export interface AdditionalMediaInfo {
    monetizable: boolean
    title?: string
    description?: string
    embeddable?: boolean
  }
  
  export interface MediaStats {
    viewCount: number
  }
  
  export interface VideoInfo {
    aspect_ratio: number[]
    duration_millis: number
    variants: Variant[]
  }
  
  export interface Variant {
    bitrate?: number
    content_type: string
    url: string
  }
  
  export interface SelfThread {
    id_str: string
  }
  
  export interface Card {
    rest_id: string
    legacy: Legacy5
  }
  
  export interface Legacy5 {
    binding_values: BindingValue[]
    card_platform: CardPlatform
    name: string
    url: string
    user_refs_results: any[]
  }
  
  export interface BindingValue {
    key: string
    value: Value
  }
  
  export interface Value {
    string_value: string
    type: string
    scribe_key?: string
  }
  
  export interface CardPlatform {
    platform: Platform
  }
  
  export interface Platform {
    audience: Audience
    device: Device
  }
  
  export interface Audience {
    name: string
  }
  
  export interface Device {
    name: string
    version: string
  }
  
  export interface UnifiedCard {
    card_fetch_state: string
  }
  
  export interface ExtendedEntities2 {
    media: Medum4[]
  }
  
  export interface Medum4 {
    display_url: string
    expanded_url: string
    id_str: string
    indices: number[]
    media_key: string
    media_url_https: string
    type: string
    url: string
    additional_media_info?: AdditionalMediaInfo2
    mediaStats?: MediaStats2
    ext_media_availability: ExtMediaAvailability2
    sizes: Sizes4
    original_info: OriginalInfo4
    video_info?: VideoInfo2
    source_status_id_str?: string
    source_user_id_str?: string
  }
  
  export interface AdditionalMediaInfo2 {
    monetizable: boolean
    title?: string
    description?: string
    embeddable?: boolean
    source_user?: SourceUser
  }
  
  export interface SourceUser {
    user_results: UserResults3
  }
  
  export interface UserResults3 {
    result: Result6
  }
  
  export interface Result6 {
    __typename: string
    id: string
    rest_id: string
    affiliates_highlighted_label: AffiliatesHighlightedLabel3
    has_graduated_access: boolean
    is_blue_verified: boolean
    legacy: Legacy6
    professional: Professional3
    business_account: BusinessAccount3
  }
  
  export interface AffiliatesHighlightedLabel3 {}
  
  export interface Legacy6 {
    following: boolean
    can_dm: boolean
    can_media_tag: boolean
    created_at: string
    default_profile: boolean
    default_profile_image: boolean
    description: string
    entities: Entities5
    fast_followers_count: number
    favourites_count: number
    followers_count: number
    friends_count: number
    has_custom_timelines: boolean
    is_translator: boolean
    listed_count: number
    location: string
    media_count: number
    name: string
    normal_followers_count: number
    pinned_tweet_ids_str: string[]
    possibly_sensitive: boolean
    profile_banner_url: string
    profile_image_url_https: string
    profile_interstitial_type: string
    screen_name: string
    statuses_count: number
    translator_type: string
    url: string
    verified: boolean
    verified_type: string
    want_retweets: boolean
    withheld_in_countries: any[]
  }
  
  export interface Entities5 {
    description: Description3
    url: Url8
  }
  
  export interface Description3 {
    urls: any[]
  }
  
  export interface Url8 {
    urls: Url9[]
  }
  
  export interface Url9 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface Professional3 {
    rest_id: string
    professional_type: string
    category: Category3[]
  }
  
  export interface Category3 {
    id: number
    name: string
    icon_name: string
  }
  
  export interface BusinessAccount3 {}
  
  export interface MediaStats2 {
    viewCount: number
  }
  
  export interface ExtMediaAvailability2 {
    status: string
  }
  
  export interface Sizes4 {
    large: Large4
    medium: Medium4
    small: Small4
    thumb: Thumb4
  }
  
  export interface Large4 {
    h: number
    w: number
    resize: string
  }
  
  export interface Medium4 {
    h: number
    w: number
    resize: string
  }
  
  export interface Small4 {
    h: number
    w: number
    resize: string
  }
  
  export interface Thumb4 {
    h: number
    w: number
    resize: string
  }
  
  export interface OriginalInfo4 {
    height: number
    width: number
    focus_rects?: FocusRect4[]
  }
  
  export interface FocusRect4 {
    x: number
    y: number
    w: number
    h: number
  }
  
  export interface VideoInfo2 {
    aspect_ratio: number[]
    duration_millis: number
    variants: Variant2[]
  }
  
  export interface Variant2 {
    bitrate?: number
    content_type: string
    url: string
  }
  
  export interface QuotedStatusPermalink {
    url: string
    expanded: string
    display: string
  }
  
  export interface QuickPromoteEligibility {
    eligibility: string
  }
  
  export interface Card2 {
    rest_id: string
    legacy: Legacy7
  }
  
  export interface Legacy7 {
    binding_values: BindingValue2[]
    card_platform: CardPlatform2
    name: string
    url: string
    user_refs_results: UserRefsResult[]
  }
  
  export interface BindingValue2 {
    key: string
    value: Value2
  }
  
  export interface Value2 {
    string_value?: string
    type: string
    image_value?: ImageValue
    scribe_key?: string
    user_value?: UserValue
    image_color_value?: ImageColorValue
    boolean_value?: boolean
  }
  
  export interface ImageValue {
    height: number
    width: number
    url: string
  }
  
  export interface UserValue {
    id_str: string
    path: any[]
  }
  
  export interface ImageColorValue {
    palette: Palette[]
  }
  
  export interface Palette {
    rgb: Rgb
    percentage: number
  }
  
  export interface Rgb {
    blue: number
    green: number
    red: number
  }
  
  export interface CardPlatform2 {
    platform: Platform2
  }
  
  export interface Platform2 {
    audience: Audience2
    device: Device2
  }
  
  export interface Audience2 {
    name: string
  }
  
  export interface Device2 {
    name: string
    version: string
  }
  
  export interface UserRefsResult {
    result: Result7
  }
  
  export interface Result7 {
    __typename: string
    id: string
    rest_id: string
    affiliates_highlighted_label: AffiliatesHighlightedLabel4
    has_graduated_access: boolean
    is_blue_verified: boolean
    legacy: Legacy8
    professional?: Professional4
    business_account: BusinessAccount4
  }
  
  export interface AffiliatesHighlightedLabel4 {}
  
  export interface Legacy8 {
    can_dm: boolean
    can_media_tag: boolean
    created_at: string
    default_profile: boolean
    default_profile_image: boolean
    description: string
    entities: Entities6
    fast_followers_count: number
    favourites_count: number
    followers_count: number
    friends_count: number
    has_custom_timelines: boolean
    is_translator: boolean
    listed_count: number
    location: string
    media_count: number
    name: string
    normal_followers_count: number
    pinned_tweet_ids_str: string[]
    possibly_sensitive: boolean
    profile_banner_url: string
    profile_image_url_https: string
    profile_interstitial_type: string
    screen_name: string
    statuses_count: number
    translator_type: string
    url: string
    verified: boolean
    verified_type: string
    want_retweets: boolean
    withheld_in_countries: any[]
  }
  
  export interface Entities6 {
    description: Description4
    url: Url10
  }
  
  export interface Description4 {
    urls: any[]
  }
  
  export interface Url10 {
    urls: Url11[]
  }
  
  export interface Url11 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface Professional4 {
    rest_id: string
    professional_type: string
    category: Category4[]
  }
  
  export interface Category4 {
    id: number
    name: string
    icon_name: string
  }
  
  export interface BusinessAccount4 {
    affiliates_count: number
  }
  
  export interface UnifiedCard2 {
    card_fetch_state: string
  }
  
  export interface QuotedStatusResult {
    result: Result8
  }
  
  export interface Result8 {
    __typename: string
    rest_id: string
    core: Core3
    unmention_data: UnmentionData3
    edit_control: EditControl3
    edit_perspective: EditPerspective3
    is_translatable: boolean
    views: Views3
    source: string
    legacy: Legacy10
    card?: Card3
    unified_card?: UnifiedCard3
  }
  
  export interface Core3 {
    user_results: UserResults4
  }
  
  export interface UserResults4 {
    result: Result9
  }
  
  export interface Result9 {
    __typename: string
    id: string
    rest_id: string
    affiliates_highlighted_label: AffiliatesHighlightedLabel5
    has_graduated_access: boolean
    is_blue_verified: boolean
    legacy: Legacy9
    business_account: BusinessAccount5
    professional?: Professional5
  }
  
  export interface AffiliatesHighlightedLabel5 {}
  
  export interface Legacy9 {
    can_dm: boolean
    can_media_tag: boolean
    created_at: string
    default_profile: boolean
    default_profile_image: boolean
    description: string
    entities: Entities7
    fast_followers_count: number
    favourites_count: number
    followers_count: number
    friends_count: number
    has_custom_timelines: boolean
    is_translator: boolean
    listed_count: number
    location: string
    media_count: number
    name: string
    normal_followers_count: number
    pinned_tweet_ids_str: string[]
    possibly_sensitive: boolean
    profile_banner_url: string
    profile_image_url_https: string
    profile_interstitial_type: string
    screen_name: string
    statuses_count: number
    translator_type: string
    url: string
    verified: boolean
    want_retweets: boolean
    withheld_in_countries: any[]
  }
  
  export interface Entities7 {
    description: Description5
    url: Url13
  }
  
  export interface Description5 {
    urls: Url12[]
  }
  
  export interface Url12 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface Url13 {
    urls: Url14[]
  }
  
  export interface Url14 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface BusinessAccount5 {}
  
  export interface Professional5 {
    rest_id: string
    professional_type: string
    category: Category5[]
  }
  
  export interface Category5 {
    id: number
    name: string
    icon_name: string
  }
  
  export interface UnmentionData3 {}
  
  export interface EditControl3 {
    edit_tweet_ids: string[]
    editable_until_msecs: string
    is_edit_eligible: boolean
    edits_remaining: string
  }
  
  export interface EditPerspective3 {
    favorited: boolean
    retweeted: boolean
  }
  
  export interface Views3 {
    count: string
    state: string
  }
  
  export interface Legacy10 {
    bookmark_count: number
    bookmarked: boolean
    created_at: string
    conversation_id_str: string
    display_text_range: number[]
    entities: Entities8
    extended_entities?: ExtendedEntities3
    favorite_count: number
    favorited: boolean
    full_text: string
    is_quote_status: boolean
    lang: string
    possibly_sensitive?: boolean
    possibly_sensitive_editable?: boolean
    quote_count: number
    reply_count: number
    retweet_count: number
    retweeted: boolean
    user_id_str: string
    id_str: string
    self_thread?: SelfThread2
    in_reply_to_screen_name?: string
    in_reply_to_status_id_str?: string
    in_reply_to_user_id_str?: string
  }
  
  export interface Entities8 {
    media?: Medum5[]
    user_mentions: UserMention3[]
    urls: Url15[]
    hashtags: Hashtag3[]
    symbols: any[]
  }
  
  export interface Medum5 {
    display_url: string
    expanded_url: string
    id_str: string
    indices: number[]
    media_url_https: string
    type: string
    url: string
    sizes: Sizes5
    original_info: OriginalInfo5
  }
  
  export interface Sizes5 {
    large: Large5
    medium: Medium5
    small: Small5
    thumb: Thumb5
  }
  
  export interface Large5 {
    h: number
    w: number
    resize: string
  }
  
  export interface Medium5 {
    h: number
    w: number
    resize: string
  }
  
  export interface Small5 {
    h: number
    w: number
    resize: string
  }
  
  export interface Thumb5 {
    h: number
    w: number
    resize: string
  }
  
  export interface OriginalInfo5 {
    height: number
    width: number
    focus_rects: FocusRect5[]
  }
  
  export interface FocusRect5 {
    x: number
    y: number
    w: number
    h: number
  }
  
  export interface UserMention3 {
    id_str: string
    name: string
    screen_name: string
    indices: number[]
  }
  
  export interface Url15 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface Hashtag3 {
    indices: number[]
    text: string
  }
  
  export interface ExtendedEntities3 {
    media: Medum6[]
  }
  
  export interface Medum6 {
    display_url: string
    expanded_url: string
    ext_alt_text?: string
    id_str: string
    indices: number[]
    media_key: string
    media_url_https: string
    type: string
    url: string
    ext_media_availability: ExtMediaAvailability3
    sizes: Sizes6
    original_info: OriginalInfo6
  }
  
  export interface ExtMediaAvailability3 {
    status: string
  }
  
  export interface Sizes6 {
    large: Large6
    medium: Medium6
    small: Small6
    thumb: Thumb6
  }
  
  export interface Large6 {
    h: number
    w: number
    resize: string
  }
  
  export interface Medium6 {
    h: number
    w: number
    resize: string
  }
  
  export interface Small6 {
    h: number
    w: number
    resize: string
  }
  
  export interface Thumb6 {
    h: number
    w: number
    resize: string
  }
  
  export interface OriginalInfo6 {
    height: number
    width: number
    focus_rects: FocusRect6[]
  }
  
  export interface FocusRect6 {
    x: number
    y: number
    w: number
    h: number
  }
  
  export interface SelfThread2 {
    id_str: string
  }
  
  export interface Card3 {
    rest_id: string
    legacy: Legacy11
  }
  
  export interface Legacy11 {
    binding_values: BindingValue3[]
    card_platform: CardPlatform3
    name: string
    url: string
    user_refs_results: UserRefsResult2[]
  }
  
  export interface BindingValue3 {
    key: string
    value: Value3
  }
  
  export interface Value3 {
    image_value?: ImageValue2
    type: string
    string_value?: string
    scribe_key?: string
    user_value?: UserValue2
    image_color_value?: ImageColorValue2
  }
  
  export interface ImageValue2 {
    height: number
    width: number
    url: string
  }
  
  export interface UserValue2 {
    id_str: string
    path: any[]
  }
  
  export interface ImageColorValue2 {
    palette: Palette2[]
  }
  
  export interface Palette2 {
    rgb: Rgb2
    percentage: number
  }
  
  export interface Rgb2 {
    blue: number
    green: number
    red: number
  }
  
  export interface CardPlatform3 {
    platform: Platform3
  }
  
  export interface Platform3 {
    audience: Audience3
    device: Device3
  }
  
  export interface Audience3 {
    name: string
  }
  
  export interface Device3 {
    name: string
    version: string
  }
  
  export interface UserRefsResult2 {
    result: Result10
  }
  
  export interface Result10 {
    __typename: string
    id: string
    rest_id: string
    affiliates_highlighted_label: AffiliatesHighlightedLabel6
    has_graduated_access: boolean
    is_blue_verified: boolean
    legacy: Legacy12
    business_account: BusinessAccount6
    professional?: Professional6
  }
  
  export interface AffiliatesHighlightedLabel6 {}
  
  export interface Legacy12 {
    can_dm: boolean
    can_media_tag: boolean
    created_at: string
    default_profile: boolean
    default_profile_image: boolean
    description: string
    entities: Entities9
    fast_followers_count: number
    favourites_count: number
    followers_count: number
    friends_count: number
    has_custom_timelines: boolean
    is_translator: boolean
    listed_count: number
    location: string
    media_count: number
    name: string
    normal_followers_count: number
    pinned_tweet_ids_str: string[]
    possibly_sensitive: boolean
    profile_banner_url: string
    profile_image_url_https: string
    profile_interstitial_type: string
    screen_name: string
    statuses_count: number
    translator_type: string
    url: string
    verified: boolean
    want_retweets: boolean
    withheld_in_countries: any[]
  }
  
  export interface Entities9 {
    description: Description6
    url: Url17
  }
  
  export interface Description6 {
    urls: Url16[]
  }
  
  export interface Url16 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface Url17 {
    urls: Url18[]
  }
  
  export interface Url18 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface BusinessAccount6 {}
  
  export interface Professional6 {
    rest_id: string
    professional_type: string
    category: Category6[]
  }
  
  export interface Category6 {
    id: number
    name: string
    icon_name: string
  }
  
  export interface UnifiedCard3 {
    card_fetch_state: string
  }
  
  export interface PreviousCounts {
    bookmark_count: number
    favorite_count: number
    quote_count: number
    reply_count: number
    retweet_count: number
  }
  
  export interface Item {
    entryId: string
    item: Item2
  }
  
  export interface Item2 {
    itemContent: ItemContent2
    clientEventInfo: ClientEventInfo
  }
  
  export interface ItemContent2 {
    itemType: string
    __typename: string
    user_results: UserResults5
    userDisplayType: string
    socialContext: SocialContext
  }
  
  export interface UserResults5 {
    result: Result11
  }
  
  export interface Result11 {
    __typename: string
    id: string
    rest_id: string
    affiliates_highlighted_label: AffiliatesHighlightedLabel7
    has_graduated_access: boolean
    is_blue_verified: boolean
    legacy: Legacy13
    business_account: BusinessAccount7
    professional?: Professional7
  }
  
  export interface AffiliatesHighlightedLabel7 {}
  
  export interface Legacy13 {
    can_dm: boolean
    can_media_tag: boolean
    created_at: string
    default_profile: boolean
    default_profile_image: boolean
    description: string
    entities: Entities10
    fast_followers_count: number
    favourites_count: number
    followers_count: number
    friends_count: number
    has_custom_timelines: boolean
    is_translator: boolean
    listed_count: number
    location: string
    media_count: number
    name: string
    normal_followers_count: number
    pinned_tweet_ids_str: string[]
    possibly_sensitive: boolean
    profile_banner_url: string
    profile_image_url_https: string
    profile_interstitial_type: string
    screen_name: string
    statuses_count: number
    translator_type: string
    url: string
    verified: boolean
    want_retweets: boolean
    withheld_in_countries: any[]
  }
  
  export interface Entities10 {
    description: Description7
    url: Url20
  }
  
  export interface Description7 {
    urls: Url19[]
  }
  
  export interface Url19 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface Url20 {
    urls: Url21[]
  }
  
  export interface Url21 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface BusinessAccount7 {}
  
  export interface Professional7 {
    rest_id: string
    professional_type: string
    category: Category7[]
  }
  
  export interface Category7 {
    id: number
    name: string
    icon_name: string
  }
  
  export interface SocialContext {
    type: string
    contextType: string
    text: string
  }
  
  export interface ClientEventInfo {
    component: string
    element: string
    details: Details
  }
  
  export interface Details {
    timelinesDetails: TimelinesDetails
  }
  
  export interface TimelinesDetails {
    injectionType: string
    controllerData: string
    sourceData: string
  }
  
  export interface Header {
    displayType: string
    text: string
    sticky: boolean
  }
  
  export interface Footer {
    displayType: string
    text: string
    landingUrl: LandingUrl
  }
  
  export interface LandingUrl {
    url: string
    urlType: string
  }
  
  export interface ClientEventInfo2 {
    component: string
    details: Details2
  }
  
  export interface Details2 {
    timelinesDetails: TimelinesDetails2
  }
  
  export interface TimelinesDetails2 {
    injectionType: string
  }
  
  export interface Entry2 {
    entryId: string
    sortIndex: string
    content: Content2
  }
  
  export interface Content2 {
    entryType: string
    __typename: string
    itemContent: ItemContent3
    clientEventInfo: ClientEventInfo3
  }
  
  export interface ItemContent3 {
    itemType: string
    __typename: string
    tweet_results: TweetResults2
    tweetDisplayType: string
    socialContext: SocialContext2
  }
  
  export interface TweetResults2 {
    result: Result12
  }
  
  export interface Result12 {
    __typename: string
    rest_id: string
    core: Core4
    unmention_data: UnmentionData4
    edit_control: EditControl4
    edit_perspective: EditPerspective4
    is_translatable: boolean
    views: Views4
    source: string
    legacy: Legacy15
    quick_promote_eligibility: QuickPromoteEligibility2
  }
  
  export interface Core4 {
    user_results: UserResults6
  }
  
  export interface UserResults6 {
    result: Result13
  }
  
  export interface Result13 {
    __typename: string
    id: string
    rest_id: string
    affiliates_highlighted_label: AffiliatesHighlightedLabel8
    has_graduated_access: boolean
    is_blue_verified: boolean
    legacy: Legacy14
    professional: Professional8
    business_account: BusinessAccount8
  }
  
  export interface AffiliatesHighlightedLabel8 {}
  
  export interface Legacy14 {
    following: boolean
    can_dm: boolean
    can_media_tag: boolean
    created_at: string
    default_profile: boolean
    default_profile_image: boolean
    description: string
    entities: Entities11
    fast_followers_count: number
    favourites_count: number
    followers_count: number
    friends_count: number
    has_custom_timelines: boolean
    is_translator: boolean
    listed_count: number
    location: string
    media_count: number
    name: string
    normal_followers_count: number
    pinned_tweet_ids_str: string[]
    possibly_sensitive: boolean
    profile_banner_url: string
    profile_image_url_https: string
    profile_interstitial_type: string
    screen_name: string
    statuses_count: number
    translator_type: string
    url: string
    verified: boolean
    want_retweets: boolean
    withheld_in_countries: any[]
  }
  
  export interface Entities11 {
    description: Description8
    url: Url22
  }
  
  export interface Description8 {
    urls: any[]
  }
  
  export interface Url22 {
    urls: Url23[]
  }
  
  export interface Url23 {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
  }
  
  export interface Professional8 {
    rest_id: string
    professional_type: string
    category: Category8[]
  }
  
  export interface Category8 {
    id: number
    name: string
    icon_name: string
  }
  
  export interface BusinessAccount8 {}
  
  export interface UnmentionData4 {}
  
  export interface EditControl4 {
    edit_tweet_ids: string[]
    editable_until_msecs: string
    is_edit_eligible: boolean
    edits_remaining: string
  }
  
  export interface EditPerspective4 {
    favorited: boolean
    retweeted: boolean
  }
  
  export interface Views4 {
    count: string
    state: string
  }
  
  export interface Legacy15 {
    bookmark_count: number
    bookmarked: boolean
    created_at: string
    conversation_id_str: string
    display_text_range: number[]
    entities: Entities12
    extended_entities: ExtendedEntities4
    favorite_count: number
    favorited: boolean
    full_text: string
    is_quote_status: boolean
    lang: string
    possibly_sensitive: boolean
    possibly_sensitive_editable: boolean
    quote_count: number
    reply_count: number
    retweet_count: number
    retweeted: boolean
    user_id_str: string
    id_str: string
  }
  
  export interface Entities12 {
    media: Medum7[]
    user_mentions: any[]
    urls: any[]
    hashtags: any[]
    symbols: any[]
  }
  
  export interface Medum7 {
    display_url: string
    expanded_url: string
    id_str: string
    indices: number[]
    media_url_https: string
    type: string
    url: string
    sizes: Sizes7
    original_info: OriginalInfo7
  }
  
  export interface Sizes7 {
    large: Large7
    medium: Medium7
    small: Small7
    thumb: Thumb7
  }
  
  export interface Large7 {
    h: number
    w: number
    resize: string
  }
  
  export interface Medium7 {
    h: number
    w: number
    resize: string
  }
  
  export interface Small7 {
    h: number
    w: number
    resize: string
  }
  
  export interface Thumb7 {
    h: number
    w: number
    resize: string
  }
  
  export interface OriginalInfo7 {
    height: number
    width: number
    focus_rects: FocusRect7[]
  }
  
  export interface FocusRect7 {
    x: number
    y: number
    w: number
    h: number
  }
  
  export interface ExtendedEntities4 {
    media: Medum8[]
  }
  
  export interface Medum8 {
    display_url: string
    expanded_url: string
    id_str: string
    indices: number[]
    media_key: string
    media_url_https: string
    type: string
    url: string
    ext_media_availability: ExtMediaAvailability4
    sizes: Sizes8
    original_info: OriginalInfo8
  }
  
  export interface ExtMediaAvailability4 {
    status: string
  }
  
  export interface Sizes8 {
    large: Large8
    medium: Medium8
    small: Small8
    thumb: Thumb8
  }
  
  export interface Large8 {
    h: number
    w: number
    resize: string
  }
  
  export interface Medium8 {
    h: number
    w: number
    resize: string
  }
  
  export interface Small8 {
    h: number
    w: number
    resize: string
  }
  
  export interface Thumb8 {
    h: number
    w: number
    resize: string
  }
  
  export interface OriginalInfo8 {
    height: number
    width: number
    focus_rects: FocusRect8[]
  }
  
  export interface FocusRect8 {
    x: number
    y: number
    w: number
    h: number
  }
  
  export interface QuickPromoteEligibility2 {
    eligibility: string
  }
  
  export interface SocialContext2 {
    type: string
    contextType: string
    text: string
  }
  
  export interface ClientEventInfo3 {
    component: string
    details: Details3
  }
  
  export interface Details3 {
    timelinesDetails: TimelinesDetails3
  }
  
  export interface TimelinesDetails3 {
    injectionType: string
  }
  
  export interface ResponseObjects {
    feedbackActions: any[]
    immediateReactions: any[]
  }
  