import { useState } from "react"
import { RefreshCw } from "react-feather"
import { css } from "@emotion/react"

import { Theme, fontSizes, useTheme } from "../../theme"
import Header from "../../components/global/header"
import Tweet from "./tweet"
import TweetDisplay from "../../components/tweet-display"
import ListSelectTimeline from "../../components/global/list-select-timeline"

const style = (theme: Theme) => css`
.icon {
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  :hover {
    border-radius: 25%;
    background-color: ${theme.colors.backgroundSecondary};
  }
}

.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 1.5rem;
}

.new-tweet {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${theme.colors.borderPrimary};
  font-size: ${fontSizes.base};
  color: ${theme.colors.active};
  cursor: pointer;
  :hover { 
    background-color: ${theme.colors.blur};
  }
}
`

export const Dashboard = () => {
  const theme = useTheme()
  const [indexTimeline, setIndexTimeline] = useState(0)
  const listTimeline = [
    'For you',
    'Following'
  ]
  // const { data: { ProfileConnected } = { } } = useQuery<{ProfileConnected: ProfileConnectedType}>(GET_PROFILE_CONNECTED)
  // console.log("ProfileConnected: ", ProfileConnected)

  // const { data : { ProfileSpotlight } = { } } = useQuery<{ProfileSpotlight: ProfileSpotlightType}>(GET_PROFILE_SPOTLIGHT)
  // console.log("ProfileSpotlight: ", ProfileSpotlight)

  // const { data : { Recommendation } = { } } = useQuery<{Recommendation: RecommendationArray}>(GET_RECOMMENDATION)
  // console.log("Recommandation: ", Recommendation)

  // const { data : { HomeTimeline } = { } } = useQuery<{HomeTimeline: HomeTimelineType}>(GET_HOME_TIMELINE)
  // console.log("HomeTimeline: ", HomeTimeline)

  // const { data : { UserTweets } = { } } = useQuery<{UserTweets: UserTweetType }>(GET_PROFILE_TIMELINE_TWEET)
  // console.log("UserTweet: ", UserTweets)

  return (
    <div css={style(theme)}>
      <Header scrollToTop={true}>
        <div className="top-header">
          <h3>Home</h3>
          <div className="icon">
            <RefreshCw size={22} />
          </div>
        </div>
        <div>
          <ListSelectTimeline
            listTimeline={listTimeline}
            indexTimeline={indexTimeline}
            setIndexTimeline={setIndexTimeline}
          />
        </div>
      </Header>
      <Tweet />
      <div className="new-tweet">
        Show X new Tweets
      </div>
      <TweetDisplay />
      <TweetDisplay />
      <TweetDisplay />
    </div>
  )
}

export default Dashboard