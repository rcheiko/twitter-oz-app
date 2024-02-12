import { BarChart2, Bookmark, Edit2, Heart, Link, Mail, MessageCircle, MoreHorizontal, Repeat, Upload } from "react-feather"
import { css } from "@emotion/react"

import { Theme, colors, useTheme } from "../theme"
import { PopOver, PopOverCard, PopOverMenu } from "./popover-card"
import verified_badge from "../assets/verified_badge.svg"
import avatar from "../assets/avatar.jpg"
import Avatar from "./avatar"
import TooltipDisplay from "./hover-card"

const tweet = (theme: Theme) => css`
border-bottom: 1px solid ${theme.colors.borderPrimary};

:hover {
  cursor: pointer;
  background-color: ${theme.colors.blur};
}
> div {
  margin: 0 .25rem;
    @media (min-width: 640px) {
    margin: 0 2rem;
  }
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
  gap: .5rem;
  @media (min-width: 640px) {
    gap: 1rem;
  }

  .main {
    img {
      transition: all .2s ease-in-out;
      opacity: 1;
      :hover {
        cursor: pointer;
        opacity: .8;
      }  
    }
  }

  .tweet {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    flex: 1;
    @media (min-width: 640px) {
      font-size: 1.6rem;
    }

    .top-tweet {
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      .text {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-weight: 500;
        gap: .25rem;
        @media (min-width: 640px) {
          gap: .5rem;
        }
  
        img {
          width: 1.75rem;
          height: 1.75rem;
        }

        .hashtag-name {
          display: flex;
          font-weight: 400;
          color: ${theme.colors.inactive};
          gap: 0.25rem;
          @media (min-width: 640px) {
            gap: .5rem;
          }
        }
      }
      .more {
        position: absolute;
        right: 0;
        top: -.75rem;
        display: flex;
        align-items: center;
        padding: 1rem;
        cursor: pointer;
        border-radius: 50%;
        color: ${theme.colors.inactive};
        :hover {
          color: ${theme.colors.active};
          background-color: rgb(29, 155, 240, 0.1);
        }
      }
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
        width: 90%;
        @media (min-width: 640px) {
          width: 70%;
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
        width: 90%;
        @media (min-width: 640px) {
          width: 60%;
        }
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
      margin-top: 1rem;
      color: ${theme.colors.secondaryInactive};

      @media (min-width: 640px) {
        margin-top: 2rem;
        margin-right: 4.5rem;
      }

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
      .answer {
        :hover {
          color: ${theme.colors.active};
        }
      }
      .retweet {
        display: flex;
        align-items: center;
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
        gap: .25rem;
        font-size: 1.2rem;
        @media (min-width: 640px) {
          gap: 1rem;
          font-size: 1.6rem;
        }
      }
    }
  }
}
`

const tooltipUpload = (theme: Theme) => css`
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

const tooltipRetweet = (theme: Theme) => css`
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

const tooltipAvatar = (theme: Theme) => css`
width: 25rem;

.top-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  img {
    width: 6.5rem;
    height: 6.5rem;
  }
  button {
    border-radius: 1rem;
    padding: .5rem 1.5rem;
    font-size: 1.6rem;
    font-weight: 600;
    transition: all .2s ease-in-out;
    opacity: 1;
    :hover {
      cursor: pointer;
      opacity: .9;
    }
  }
  .following {
    background-color: ${theme.colors.backgroundSecondary};
    color: ${theme.colors.active};
  }
  .followed {
    background-color: ${theme.colorScheme === 'dark' ? colors.white : colors.grey};
    color: ${colors.black};
  }
}

.flex {
  display: flex;
  flex-direction: column;
  .name {
    font-size: 1.8rem;
    font-weight: 600;
  }
  .sub-name {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${theme.colors.inactive};
    margin-bottom: .5rem;
  }
  .description {
    font-size: 1.4rem;
    font-weight: 400;
  }
}

.follow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  .number {
    font-size: 1.4rem;
    font-weight: 600;
  }
  .text {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${theme.colors.inactive};
  }
}
`


interface ITweet {
}

const TweetDisplay = ({
}: ITweet) => {
  const theme = useTheme()
  const imagesLength = 2
  const follow = false
  return (
    <div css={tweet(theme)}>
      <div>
        <div className="retweet-tweet">
          <Repeat size={16} fill="grey" color="grey" className="icon-notification" />
          <span>NAME retweeted</span>
        </div>
        <div className="profile">
          <div className="avatar">
            <TooltipDisplay
              text={
                <div className="main">
                  <Avatar src={avatar} />
                </div>
              }
              toolTipText={
                <div css={tooltipAvatar(theme)}>
                  <div className="top-menu">
                    <Avatar src={avatar} />
                    <button className={follow ? "following" : "followed"}>
                      {
                        follow ? "Following" : "Follow"
                      }
                    </button>
                  </div>
                  <div className="flex">
                    <span className="name">Shokker</span>
                    <span className="sub-name">@shokker</span>
                    <span className="description">Hello i'm fine and you</span>
                  </div>
                  <div className="follow">
                    <div>
                      <span className="number">543</span>
                      {' '}
                      <span className="text">Following</span>
                    </div>
                    <div>
                      <span className="number">123,543</span>
                      {' '}
                      <span className="text">Followers</span>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          <div className="tweet">
            <div className="top-tweet">
              <div className="text">
                <span className="name">Name</span>
                <Avatar src={verified_badge} size="2rem" />
                <div className="hashtag-name">
                  <span>@Name</span>
                  <span>·</span>
                  <span>11h</span>
                </div>
              </div>
              <div className="more">
                <MoreHorizontal size={20} />
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
                <MessageCircle size={18} />
                1234
              </div>
              <PopOver>
                <PopOverCard>
                  <div className="retweet">
                    <Repeat size={18} />
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
                <Heart size={18} />
                1234
              </div>
              <div className="view">
                <BarChart2 size={18} />
                1234
              </div>
              <PopOver>
                <PopOverCard>
                  <div className="upload">
                    <Upload size={18} />
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