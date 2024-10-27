import { useEffect, useState } from "react"
import { css } from "@emotion/react"

import { HomeTimelineType, getHomeTimeline } from "../../utils/fetch/home-timeline"
import { Theme, useTheme } from "../../theme"
import TweetDisplay from "./tweet-display"
import Loading from "../shimmer/loading"

const style = (theme: Theme) => css`
`

const TweetHomeTimeline = () => {
  const theme = useTheme()
  const [homeTimeline, setHomeTimeline] = useState<HomeTimelineType | undefined>()
  const [isLoading, setIsLoading] = useState(false)

  const loadMoreTweets = async () => {
    if (!isLoading) {
      setIsLoading(true) // Set loading to true to prevent multiple requests
      const newTimeline = await getHomeTimeline() // fetch ???
      if (newTimeline) {
        setHomeTimeline((prev) => {
          if (prev) {
            return {
              ...prev,
              data: {
                ...prev.data,
                home: {
                  ...prev.data.home,
                  home_timeline_urt: {
                    ...prev.data.home.home_timeline_urt,
                    instructions: [
                      ...prev.data.home.home_timeline_urt.instructions,
                      ...newTimeline.data.home.home_timeline_urt.instructions,
                    ],
                  },
                },
              },
            };
          } else {
            return newTimeline
          }
        })
      }
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getHomeTimeline().then(res => setHomeTimeline(res))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // if the user has scrolled within 300px of the bottom
      if (scrollTop + windowHeight >= docHeight - 500 && !isLoading) {
        console.log('load more tweets')
        // loadMoreTweets()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isLoading])

  console.log('homeTimeline', homeTimeline, homeTimeline?.data?.home.home_timeline_urt.instructions[0].entries);
  
  return (
    <div>
      {
        homeTimeline
          ? (
            homeTimeline?.data?.home.home_timeline_urt.instructions[0].entries
              .filter((entry) => (
                !entry.entryId.includes('promoted-tweet') &&
                !entry?.content.itemContent?.tweet_results.result.__typename.includes('TweetWithVisibilityResults')
              ))
              .map(tweet =>
                <TweetDisplay
                  key={tweet.entryId}
                  tweet={
                    tweet.entryId.includes('home-conversation') && tweet.content?.items?.length
                      ? tweet.content.items[0].item.itemContent.tweet_results.result
                      : tweet.content.itemContent?.tweet_results.result
                  }
                />
              )
          )
          : <Loading />
      }
      {isLoading && <Loading />}
    </div>
  )
}

export default TweetHomeTimeline