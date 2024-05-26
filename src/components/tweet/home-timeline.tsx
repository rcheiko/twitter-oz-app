import { useEffect, useState } from "react"
import { css } from "@emotion/react"

import { HomeTimelineType, getHomeTimeline } from "../../utils/fetch/homeTimeline"
import { Theme, useTheme } from "../../theme"
import TweetDisplay from "./tweet-display"
import Loading from "../shimmer/loading"

const style = (theme: Theme) => css`
`

const TweetHomeTimeline = () => {
  const theme = useTheme()
  const [homeTimeline, setHomeTimeline] = useState<HomeTimelineType | undefined>()

  useEffect(() => {
    getHomeTimeline().then(res => setHomeTimeline(res))
  }, [])

  return (
    <div>
      {
        homeTimeline
          ? (
            homeTimeline?.data?.home.home_timeline_urt.instructions[0].entries
              .filter((entry) => !entry.entryId.includes('promoted-tweet'))
              .map(tweet => {
                if (tweet.entryId.includes('home-conversation') && tweet.content?.items?.length) {
                  return (
                    <TweetDisplay
                      key={tweet.entryId}
                      tweet={tweet.content.items[0].item.itemContent.tweet_results.result}
                    />
                  )
                }
                return (
                  <TweetDisplay
                    key={tweet.entryId}
                    tweet={tweet.content.itemContent?.tweet_results.result}
                  />
                )
            })
          )
          : <Loading />
      }
    </div>
  )
}

export default TweetHomeTimeline