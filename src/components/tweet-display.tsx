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


    .picture {
      margin-top: 1rem;
      display: grid;
      gap: .25rem;
      width: 80%;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
        cursor: pointer;
      }

      &.number-1 {
        .picture-1 {
          border-radius: 1rem;
        }
      }
      
      &.number-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        .picture-1 {
          border-radius: 1rem 0 0 1rem;
        }
        .picture-2 {
          border-radius: 0 1rem 1rem 0;
        }
      }
      
      &.number-3 {
        display: grid;
        grid-template-columns: 2fr 1fr;
      
        img {
          max-width: 100%;
          height: auto;
        }
        .picture-1 {
          height:-webkit-fill-available;
          grid-column: 1 / span 1;
          grid-row: 1 / span 2;
          border-radius: 1rem 0 0 1rem;
        }
        .picture-2 {
          border-radius: 0 0 1rem 0;
        }
        .picture-3 {
          border-radius: 0 1rem 0 0;
        }
      }
      
      &.number-4 {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);

        .picture-1 {
          border-radius: 1rem 0 0 0;
        }
        .picture-2 {
          border-radius: 0 1rem 0 0;
        }
        .picture-3 {
          border-radius: 0 0 0 1rem;
        }
        .picture-4 {
          border-radius: 0 0 1rem 0;
        }
      }
    }
  }
}
`

interface ITweet {
}

const TweetDisplay = ({
}: ITweet) => {
  const theme = useTheme()
  const imagesLength = 3
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
        <div className={`picture number-${imagesLength}`}>
          {
            Array(imagesLength).fill(0).map((_, i) => (
              <img key={i} src={avatar} className={`picture-${i+1}`} />
            ))
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default TweetDisplay