import { useState } from "react"
import { Bookmark, Edit2, Heart, Link, Mail, MessageCircle, MoreHorizontal, Repeat, Upload } from "react-feather"
import { css } from "@emotion/react"

import { dislikeTweet, likeTweet } from "../../utils/fetch/like-tweet"
import { PopOver, PopOverCard, PopOverMenu } from "../popover-card"
import { Tweet, User } from "../../utils/fetch/notifications"
import { styleTweetDisplay } from "../../styles/tweet"
import { Theme, useTheme } from "../../theme"
import blue_verified_badge from "../../assets/blue-verified-badge.svg"
import TweetTextFormated from "../tweet/tweet-text-formated"
import UserScreenName from "./user-screen-name"
import Avatar from "../avatar"

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

interface ITweet {
  tweet: Tweet
  user: User | undefined
}

const TweetDisplay = ({
  tweet,
  user
}: ITweet) => {
  const theme = useTheme()
  const [isFavorited, setIsFavorited] = useState(tweet?.favorited)
  const [likeCount, setLikeCount] = useState(tweet?.favorite_count ?? 0)
  
  const description = tweet?.full_text
  const replyCount = tweet?.reply_count
  const retweetCount = tweet?.retweet_count
  const isRetweeted = tweet?.retweeted

  const userName = user?.name
  const name = user?.screen_name
  const userIsBlueVerified = user?.verified
  const avatar = user?.profile_image_url_https
  console.log('user', user, isFavorited);

  const likeButton = () => {
    if (isFavorited) {
      dislikeTweet(tweet.id_str)
      setIsFavorited(false)
      setLikeCount(likeCount - 1)
    } else {
      likeTweet(tweet.id_str)
      setIsFavorited(true)
      setLikeCount(likeCount + 1)
    }
  }

  return (
    <div css={styleTweetDisplay(theme)}>
      <div>
        {/* <div className="retweet-tweet">
          <Repeat size={16} fill="grey" color="grey" className="icon-notification" />
          <span>NAME retweeted</span>
        </div> */}
        <div className="profile">
          <div className="avatar">
            <UserScreenName
              text={
                <div>
                  <Avatar src={avatar} />
                </div>
              }
              user={user}
            />
          </div>
          <div className="tweet">
            <div className="top-tweet">
              <UserScreenName
                text={
                  <div className="text">
                    <span className="name">{userName}</span>
                    {userIsBlueVerified && <Avatar src={blue_verified_badge} size="2rem" />}
                    <div className="hashtag-name">
                      <span>@{name}</span>
                      <span>·</span>
                      <span>11h</span>
                    </div>
                  </div>
                }
                user={user}
              />
              <div className="more">
                <MoreHorizontal size={20} />
              </div>
            </div>
            <TweetTextFormated
              text={description ?? ''}
              tweetDetails={tweet}
            />
            {/* {
              medias && (
                <div className={`picture number-${imagesLength}`}>
                  {
                    medias?.map((media,i) => {
                      if (media.type === 'photo') {
                        return (
                          <img
                            key={media.id_str}
                            src={media.media_url_https}
                            className={`picture-${i+1}`}
                          />
                        )  
                      }
                      if (media.type === 'video') {
                        const videoInfo = media.video_info?.variants.find((variant) => variant.content_type === 'video/mp4' )
                        return (
                          <video
                            key={media.id_str}
                            src={videoInfo?.url}
                            className={`picture-${i+1}`}
                            typeof={videoInfo?.content_type}
                            controls
                          />
                        )
                      }
                    })
                  }
                </div>
              )
            } */}
            <div className="icon-tweet">
              <div className="answer">
                <MessageCircle size={18} />
                {replyCount}
              </div>
              <PopOver>
                <PopOverCard>
                  <div className="retweet">
                    <Repeat size={18} />
                    <span>{retweetCount}</span>
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
              <div
                className={`like ${isFavorited ? 'liked' : ''}`}
                onClick={() => likeButton()}
              >
                <Heart size={18} />
                {likeCount}
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