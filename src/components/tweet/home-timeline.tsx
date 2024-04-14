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
  console.log("homeTimeline: ", homeTimeline);
  
  return (
    <div>
      {
        homeTimeline
         ? (
          homeTimeline?.data?.home.home_timeline_urt.instructions[0].entries.map(tweet => {
            return (
              <TweetDisplay
                key={tweet.entryId}
                tweet={tweet}
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