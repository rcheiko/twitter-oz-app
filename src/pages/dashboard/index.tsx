import { useState } from "react"
import { RefreshCw } from "react-feather"
import { css } from "@emotion/react"

import { Theme, fontSizes, useTheme } from "../../theme"
import Header from "../../components/global/header"
import Tweet from "./tweet"
import TweetDisplay from "../../components/tweet-display"

const dashboard = (theme: Theme) => css`
.icon {
  display: flex;
  align-items: center;
  padding: 1rem;
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

.bar-blue {
  display:flex;
  justify-content: center;
  align-items: center;
  span {
    border-radius: 25px;
    height: 3px;
    width: 50%;
    max-width: 100px;
    background-color: rgb(29, 155, 240);  
  }
}

.list-button-timeline {
  display: flex;
  justify-content: center;
  align-items: center;
  div p {
    font-size: ${fontSizes.lg};
    font-weight: 500;
    padding-bottom: 0.5rem;
  }

  > * {
    text-align: center;
    padding-top: 0.5rem;
    flex-grow: 1;

    :hover {
      background-color: ${theme.colors.blur}};
    }
  }
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
  const [listTimeline, setlistTimeline] = useState(0)
  const wichTimeline = [
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
    <div css={dashboard(theme)}>
      <Header scrollToTop={true}>
        <div className="top-header">
          <div>
            <h3>Home</h3>
            <p>Pseudo</p>
          </div>
          <div className="icon">
            <RefreshCw size={22} />
          </div>
        </div>
        <div className="list-button-timeline">
          {
            wichTimeline.map((item, index) => (
              <div key={item} onClick={() => setlistTimeline(index)}>
                <p>{item}</p>
                {
                  index === listTimeline
                    ? (
                      <div className="bar-blue">
                        <span />
                      </div>
                    )
                    : null
                }
              </div>
            ))
          }
        </div>
      </Header>
      <Tweet />
      <div className="new-tweet">
        Show X new Tweets
      </div>
      <TweetDisplay />
      <TweetDisplay />
      <TweetDisplay />
      <TweetDisplay />
      <TweetDisplay />
    </div>
  )
}

export default Dashboard