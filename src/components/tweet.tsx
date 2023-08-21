import { css } from "@emotion/react"
import { Theme, useTheme } from "../theme"

export const tweet = (theme: Theme) => css`
`

interface ITweet {
}

export const TweetStyle = ({
}: ITweet) => {
  const theme = useTheme()

  return (
    <div css={tweet(theme)}>
    </div>
  )
}