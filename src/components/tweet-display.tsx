import { css } from "@emotion/react"
import { BarChart2, Bookmark, Edit2, Heart, Link, Mail, MessageCircle, Repeat, Upload } from "react-feather"

import { Theme, colors, useTheme } from "../theme"
import { PopOver, PopOverCard, PopOverMenu } from "./popover/popover"
import Avatar from "./avatar"
import avatar from "../assets/avatar.jpg"
import verified_badge from "../assets/verified_badge.svg"

export const tweet = (theme: Theme) => css`
border-bottom: 1px solid ${theme.colors.borderPrimary};

:hover {
  cursor: pointer;
  background-color: ${theme.colors.blur};
}
> div {
  margin: 0 2rem;
  padding-bottom: 2rem;
}
.retweet-tweet {
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
      height: auto;
      img {
        max-width: 100%;
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
        width: 90%;
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
        width: 70%;
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
        width: 60%;
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
    .icon-tweet {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;
      margin-right: 4.5rem;
      color: ${theme.colors.secondaryInactive};

      .answer {
        :hover {
          color: ${theme.colors.active};
        }
      }
      .retweet {
        display: flex;
        align-items: center;
        gap: 1rem;
        :hover {
          color: ${colors.green};
        }
      }
      .like {
        :hover {
          color: ${theme.colors.errorPrimary};
        }
      }
      .view {
        :hover {
          color: ${theme.colors.active};
        }
      }
      .upload {
        :hover {
          color: ${theme.colors.active};
        }
      }
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
}


`

export const tooltipUpload = (theme: Theme) => css`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  > div {
    :first-of-type {
      padding: 1.5rem 1rem;
      border-radius: 1rem 1rem 0 0;
    }
    :nth-of-type(2) {
      padding: 1.5rem 1rem;
    }
    :last-of-type {
      padding: 1.5rem 1rem;
      border-radius: 0 0 1rem 1rem;
    }
    padding: 0 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
    :hover {
      cursor: pointer;
      background-color: ${theme.colors.borderPrimary};
    }
  }
`

export const tooltipRetweet = (theme: Theme) => css`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  > div {
    :first-of-type {
      padding: 1.5rem;
      border-radius: 1rem 1rem 0 0;
    }
    :nth-of-type(2) {
      padding: 1.5rem;
      border-radius: 0 0 1rem 1rem;
    }
    padding: 0 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
    :hover {
      cursor: pointer;
      background-color: ${theme.colors.borderPrimary};
    }
  }
`

interface ITweet {
}

const TweetDisplay = ({
}: ITweet) => {
  const theme = useTheme()
  const imagesLength = 2
  return (
    <div css={tweet(theme)}>
      <div>
        <div className="retweet-tweet">
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
            <div className="icon-tweet">
              <div className="answer">
                <MessageCircle size={22} />
                1234
              </div>
              <PopOver>
                <PopOverCard>
                  <div className="retweet">
                    <Repeat size={22} />
                    <span>1234</span>
                  </div>
                </PopOverCard>
                <PopOverMenu>
                  <div css={tooltipRetweet(theme)}>
                    <div>
                      <Repeat size={20} />
                      <span>Repost</span>                      
                    </div>
                    <div>
                      <Edit2 size={20} />
                      <span>Quote</span>
                    </div>
                  </div>
                </PopOverMenu>
              </PopOver>
              <div className="like">
                <Heart size={22} />
                1234
              </div>
              <div className="view">
                <BarChart2 size={22} />
                1234
              </div>
              <PopOver>
                <PopOverCard>
                  <div className="upload">
                    <Upload size={22} />
                  </div>
                </PopOverCard>
                <PopOverMenu>
                  <div css={tooltipUpload(theme)}>
                    <div>
                      <Link size={20} />
                      <span>Copy Link</span>                      
                    </div>
                    <div>
                      <Mail size={20} />
                      <span>Send via Direct Message</span>
                    </div>
                    <div>
                      <Bookmark size={20} />
                      <span>Bookmarks</span>
                    </div>
                  </div>
                </PopOverMenu>
              </PopOver>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TweetDisplay