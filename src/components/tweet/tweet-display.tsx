import { useState } from "react"
import { BarChart2, Bookmark, Edit2, Heart, Link, Mail, MessageCircle, MoreHorizontal, Repeat, Upload } from "react-feather"
import { css } from "@emotion/react"

import { dislikeTweet, likeTweet } from "../../utils/fetch/like-tweet"
import { PopOver, PopOverCard, PopOverMenu } from "../popover-card"
import { Theme, colors, useTheme } from "../../theme"
import { styleTweetDisplay } from "../../styles/tweet"
import { Result } from "../../utils/fetch/home-timeline"
import blue_verified_badge from "../../assets/blue-verified-badge.svg"
import yellow_verified_badge from "../../assets/yellow-verified-badge.svg"
import TweetTextFormated from "./tweet-text-formated"
import UserScreenName from "../user-screen-name"
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
  tweet: Result | undefined
}

const TweetDisplay = ({
  tweet
}: ITweet) => {
  const theme = useTheme()
  const [isFavorited, setIsFavorited] = useState(tweet?.legacy?.favorited)
  const [likeCount, setLikeCount] = useState(tweet?.legacy?.favorite_count ?? 0)
  const imagesLength = 2
  
  const description = tweet?.legacy?.full_text
  const description2 = tweet?.legacy?.retweeted_status_result
  const views = tweet?.views?.count
  const createdAt = tweet?.legacy?.created_at
  const replyCount = tweet?.legacy?.reply_count
  const retweetCount = tweet?.legacy?.retweet_count
  const bookmarkCount = tweet?.legacy?.bookmark_count
  const isRetweeted = tweet?.legacy?.retweeted
  const medias = tweet?.legacy?.entities.media
  const userTweetInfo = tweet?.core?.user_results.result

  const userFollowersCount = userTweetInfo?.legacy.followers_count
  const userFollowingCount = userTweetInfo?.legacy.friends_count
  const userDescription = userTweetInfo?.legacy.description
  const userName = userTweetInfo?.legacy.name
  const name = userTweetInfo?.legacy.screen_name
  const userIsBlueVerified = userTweetInfo?.is_blue_verified
  const userIsVerifiedBusiness = userTweetInfo?.legacy.verified_type === 'Business'
  const avatar = userTweetInfo?.legacy.profile_image_url_https
  const followed = userTweetInfo?.legacy.following

  const likeButton = () => {
    if (isFavorited) {
      dislikeTweet(tweet?.rest_id)
      setIsFavorited(false)
      setLikeCount(likeCount - 1)
    } else {
      likeTweet(tweet?.rest_id)
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
                <div className="main">
                  <Avatar src={avatar} />
                </div>
              }
              userInfo={userTweetInfo}
            />
          </div>
          <div className="tweet">
            <div className="top-tweet">
              <div className="text">
                <span className="name">{userName}</span>
                {!userIsVerifiedBusiness && userIsBlueVerified && <Avatar src={blue_verified_badge} size="2rem" />}
                {userIsVerifiedBusiness && <Avatar src={yellow_verified_badge} size="2rem" />}
                <div className="hashtag-name">
                  <span>@{name}</span>
                  <span>·</span>
                  <span>11h</span>
                </div>
              </div>
              <div className="more">
                <MoreHorizontal size={20} />
              </div>
            </div>
            <TweetTextFormated
              text={description ?? ''}
              tweetDetails={tweet}
            />
            {
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
            }

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
              <div className="view">
                <BarChart2 size={18} />
                {views}
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