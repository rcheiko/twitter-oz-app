import { css } from "@emotion/react"

import { Theme, colors, useTheme } from "../../theme"
import { Result } from "../../utils/fetch/homeTimeline"

const style = (theme: Theme) => css`
  white-space: pre-wrap;
  word-wrap: break-word;
  .hashtag {
    color: ${colors.blue};
    :hover {
      text-decoration: underline;
    }
  }
  .link {
    color: ${theme.colors.active};
  }
`


const TweetTextFormated = ({ text, tweetDetails }: { text: string, tweetDetails: Result | undefined }) => {
  const theme = useTheme()

  const markers = [] as { start: number, end: number, type: string, text?: string }[]

  const symbolArray = tweetDetails?.legacy?.entities.symbols
  const userMentions = tweetDetails?.legacy?.entities.user_mentions

  // Add symbols to be formatted
  symbolArray?.forEach(symbol => {
    markers.push({
      start: symbol.indices[0],
      end: symbol.indices[1],
      type: 'symbol',
      text: symbol.text
    })
  })

  // Add user mentions to be formatted
  userMentions?.forEach(mention => {
    markers.push({
      start: mention.indices[0],
      end: mention.indices[1],
      type: 'mention',
      text: mention.screen_name
    })
  })

  // Sort markers by starting index in ascending order
  markers?.sort((a, b) => a.start - b.start)

  // Remove trailing new lines
  text = text.replace(/\n+$/, '')
  // Remove leading new lines before links https://t.co/
  text = text.replace(/\n+\s*(https:\/\/t.co\/\S*)/g, ' $1')

  // Process and split text by spaces while handling links and hashtags
  const parts = text.split(/(\s+)/).map((part, index) => {
    if (part.includes('https://t.co/')) {
      return null
    }
    // Format links
    if (/https?:\/\/\S+/.test(part)) {
      return <span className="link" key={index}>{part}</span>
    }
    // Format hashtags
    if (/#\w+/.test(part)) {
      return <span className="hashtag" key={index}>{part}</span>
    }
    return part
  })

  // Filter out null parts and combine markers and normal text
  parts.filter(part => part !== null)

  return (
    <div css={style(theme)}>
      {parts}
    </div>
  )
}

export default TweetTextFormated