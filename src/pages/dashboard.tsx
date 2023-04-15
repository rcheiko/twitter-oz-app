import { GET_PROFILE_CONNECTED, GET_RECOMMENDATION } from "../apollo/global/queries"
import { GET_PROFILE_SPOTLIGHT, GET_PROFILE_TIMELINE_TWEET } from "../apollo/profile/queries"
import { GET_HOME_TIMELINE } from "../apollo/timeline/queries"
import { ProfileConnectedType } from "../types/twitter/profileConnected/ProfileConnected"
import { ProfileSpotlightType } from "../types/twitter/ProfileSpotlight"
import { RecommendationArray } from "../types/twitter/Recommendation"
import { HomeTimelineType } from "../types/twitter/HomeTimeline"
import { UserTweetType } from "../types/twitter/UserTweet"
import { useQuery } from "@apollo/client"
import { Theme, useTheme } from "../theme"
import { css } from "@emotion/react"

export const dashboard = (theme: Theme) => css`

`;

export default function Dashboard() {
  const theme = useTheme()

  const { data: { ProfileConnected } = { } } = useQuery<{ProfileConnected: ProfileConnectedType}>(GET_PROFILE_CONNECTED)
  console.log("ProfileConnected: ", ProfileConnected)

  const { data : { ProfileSpotlight } = { } } = useQuery<{ProfileSpotlight: ProfileSpotlightType}>(GET_PROFILE_SPOTLIGHT)
  console.log("ProfileSpotlight: ", ProfileSpotlight)

  const { data : { Recommendation } = { } } = useQuery<{Recommendation: RecommendationArray}>(GET_RECOMMENDATION)
  console.log("Recommandation: ", Recommendation)

  const { data : { HomeTimeline } = { } } = useQuery<{HomeTimeline: HomeTimelineType}>(GET_HOME_TIMELINE)
  console.log("HomeTimeline: ", HomeTimeline)

  const { data : { UserTweets } = { } } = useQuery<{UserTweets: UserTweetType }>(GET_PROFILE_TIMELINE_TWEET)
  console.log("UserTweet: ", UserTweets)

  return (
    <div css={dashboard(theme)}>
      <h1>Home</h1>
    </div>
  )
}
