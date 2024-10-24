import { useState } from "react"
import { css } from "@emotion/react"

import { getUserScreenName } from "../../utils/fetch/user-screen-name"
import { Result3, Url7 } from "../../types/twitter/UserTweet"
import { Result } from "../../utils/fetch/home-timeline"
import { Theme, colors, useTheme } from "../../theme"
import UserScreenName from "../user-screen-name"

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
  .user-mentions {
    color: ${theme.colors.active};
    :hover {
      text-decoration: underline;
    }
  }

  .wip {
    color: ${theme.colors.backgroundError};
  }
`

const htmlEntities: { [key: string]: string } = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
}

const decodeHtml = (html: string): string => {
  return html.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, (match) => htmlEntities[match])
}

const TweetTextFormated = ({ text, tweetDetails }: { text: string, tweetDetails: Result | undefined }) => {
  const theme = useTheme()

  const [showMore, setShowMore] = useState(false)
  const [listUserScreenName, setListUserScreenName] = useState<Result3[]>([])

  text = decodeHtml(text)

  let fullText = decodeHtml(tweetDetails?.note_tweet?.note_tweet_results.result.text ?? '')


  const markers = [] as { start: number, end: number, type: string, text?: string }[]

  const symbolArray = tweetDetails?.legacy?.entities.symbols
  const userMentions = tweetDetails?.legacy?.entities.user_mentions
  const urls = tweetDetails?.legacy?.entities.urls
  console.log('tweetDetails', tweetDetails);
  
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

  const fullSymbolArray = tweetDetails?.note_tweet?.note_tweet_results.result.entity_set.symbols
  const fullUserMentions = tweetDetails?.note_tweet?.note_tweet_results.result.entity_set.user_mentions
  const fullUrls = tweetDetails?.note_tweet?.note_tweet_results.result.entity_set.urls

  const fullMarkers = [] as { start: number, end: number, type: string, text?: string }[]

  // Add symbols to be formatted
  fullSymbolArray?.forEach(symbol => {
    fullMarkers.push({
      start: symbol.indices[0],
      end: symbol.indices[1],
      type: 'symbol',
      text: symbol.text
    })
  })

  // Add user mentions to be formatted
  fullUserMentions?.forEach(mention => {
    fullMarkers.push({
      start: mention.indices[0],
      end: mention.indices[1],
      type: 'mention',
      text: mention.screen_name
    })
  })

  // Sort markers by starting index in ascending order
  fullMarkers?.sort((a, b) => a.start - b.start)

  // Remove trailing new lines
  text = text.replace(/\n+$/, '')
  // Remove leading new lines before links https://t.co/
  text = text.replace(/\n+\s*(https:\/\/t.co\/\S*)/g, ' $1')

  // Remove trailing new lines
  fullText = fullText.replace(/\n+$/, '')
  // Remove leading new lines before links https://t.co/
  fullText = fullText.replace(/\n+\s*(https:\/\/t.co\/\S*)/g, ' $1')

  const fetchUserScreenName = async(screenName: string) => {
    if (listUserScreenName?.some(user => user.legacy.screen_name.toLowerCase() === screenName.toLowerCase())) return
    const userScreenName = await getUserScreenName(screenName)
    setListUserScreenName([...listUserScreenName, userScreenName])
  }


  const handleTextFormatting = (
    text: string,
    urls: Url7[] | undefined
  ) => {
    // Process and split text by spaces while handling links and hashtags
    return text.split(/(\s+)/).map((part, index) => {

      // change the urls t.co/ link to the display url
      if (part.includes('https://t.co/')) {
        const result = urls?.map(url => {
          if (part.includes(url.url)) {
            part = url.display_url
            return <a target="_blank" className="link" href={url.expanded_url} key={index}>{url.display_url}</a>
          }
          return null
        })
        if (result?.length) return result
        if (fullText && !tweetDetails?.legacy?.full_text.includes(fullText)) {
          return <span className="link" onClick={() => setShowMore(true)}><br />Show more</span>
        }
        return <span className="wip">work in progress</span>
      }

      // Format links
      if (/https?:\/\/\S+/.test(part)) {
        return <span className="link" key={index}>{part}</span>
      }

      // Format hashtags
      if (/#\w+/.test(part)) {
        return <span className="hashtag" key={index}>{part}</span>
      }

      // Format user mentions with surrounding characters handled
      if (/@\w+/.test(part)) {
        // Split the text around the mentions
        const mentionParts = part.split(/(@\w+)/)

        return mentionParts.map((segment, segIndex) => {
          // if the segment is a mention, format it as a mention
          if (/@\w+/.test(segment)) {
            return (
              <UserScreenName
                text={
                  <span
                    className="user-mentions"
                    key={`${index}-${segIndex}`}
                    onMouseEnter={() => fetchUserScreenName(segment.substring(1).toLocaleLowerCase())}
                  >
                    {segment}
                  </span>
                }
                userInfo={listUserScreenName.find(user => user.legacy.screen_name.toLowerCase() === segment.substring(1).toLowerCase())}
              />
            )
          }
          return <span key={`${index}-${segIndex}`}>{segment}</span>
        })
      }
      return part
    }).filter(part => part !== null)
  }

  return (
    <div css={style(theme)}>
      {
        showMore
          ? (
            <>
              {handleTextFormatting(fullText, fullUrls)}
              <span className="link" onClick={() => setShowMore(false)}><br />Show Less</span>
            </>
          )
          : handleTextFormatting(text, urls)
      }
    </div>
  )
}

export default TweetTextFormated