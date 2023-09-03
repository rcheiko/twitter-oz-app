import { css } from "@emotion/react"
import { Repeat } from "react-feather"

import { Theme, useTheme } from "../theme"
import Avatar from "./avatar"
import avatar from "../assets/avatar.jpg"
import verified_badge from "../assets/verified_badge.svg"

export const tweet = (theme: Theme) => css`
margin: 0 2rem;
.retweet {
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  color: ${theme.colors.inactive};
  font-size: 1.4rem;
  font-weight: 600;
}

.profile {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  .tweet {
    display: flex;
    flex-direction: column;

    .text {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;
      font-size: 1.6rem;
      font-weight: 500;
    }  
    .hashtag-name {
      display: flex;
      gap: 0.5rem;
      font-size: 1.6rem;
      font-weight: 400;
      color: ${theme.colors.inactive};
    }
  }
}
`

interface ITweet {
}

const TweetDisplay = ({
}: ITweet) => {
  const theme = useTheme()

  return (
    <div css={tweet(theme)}>
      <div className="retweet">
        <Repeat size={16} fill="grey" color="grey" className="icon-notification" />
        <span>NAME retweeted</span>
      </div>
    <div className="profile">
      <Avatar src={avatar} />
      <div className="tweet">
        <div className="text">
          <span className="name">Name</span>
          <Avatar src={verified_badge} size="2rem" />
          <div className="hashtag-name">
            <span>@Name</span>
            <span>·</span>
            <span>Time Posted</span>
          </div>
        </div>
        <span>Tweet message Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, ex.</span>  
      </div>
    </div>
    </div>
  )
}

export default TweetDisplay