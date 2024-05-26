import { BarChart2, Bookmark, Edit2, Heart, Link, Mail, MessageCircle, MoreHorizontal, Repeat, Upload } from "react-feather"
import { css } from "@emotion/react"

import { PopOver, PopOverCard, PopOverMenu } from "../popover-card"
import { Theme, colors, useTheme } from "../../theme"
import { styleTweetDisplay } from "../../styles/tweet"
import { Entry, Result } from "../../utils/fetch/homeTimeline"
import blue_verified_badge from "../../assets/blue-verified-badge.svg"
import yellow_verified_badge from "../../assets/yellow-verified-badge.svg"
import Avatar from "../avatar"
import TooltipDisplay from "../hover-card"
import TweetTextFormated from "./tweet-text-formated"

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
  video {
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
    font-size: 1.3rem;
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
  tweet: Result | undefined
}

const TweetDisplay = ({
  tweet
}: ITweet) => {
  const theme = useTheme()
  const imagesLength = 2
  const follow = false
  console.log('tweet', tweet);

  const description = tweet?.legacy?.full_text
  const description2 = tweet?.legacy?.retweeted_status_result
  const views = tweet?.views?.count
  const createdAt = tweet?.legacy?.created_at
  const replyCount = tweet?.legacy?.reply_count
  const retweetCount = tweet?.legacy?.retweet_count
  const likesCount = tweet?.legacy?.favorite_count
  const bookmarkCount = tweet?.legacy?.bookmark_count
  const isRetweeted = tweet?.legacy?.retweeted
  const medias = tweet?.legacy?.entities.media
  const userTweetInfo = tweet?.core?.user_results.result

  const userFollowersCount = userTweetInfo?.legacy.followers_count
  const userFollowingCount = userTweetInfo?.legacy.friends_count
  const userDescription = userTweetInfo?.legacy.description
  const userName = userTweetInfo?.legacy.name
  const userScreenName = userTweetInfo?.legacy.screen_name
  const userIsBlueVerified = userTweetInfo?.is_blue_verified
  const userIsVerifiedBusiness = userTweetInfo?.legacy.verified_type === 'Business'

  const avatar = userTweetInfo?.legacy.profile_image_url_https
  
  return (
    <div css={styleTweetDisplay(theme)}>
      <div>
        {/* <div className="retweet-tweet">
          <Repeat size={16} fill="grey" color="grey" className="icon-notification" />
          <span>NAME retweeted</span>
        </div> */}
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
                    <span className="name">{userName}</span>
                    <span className="sub-name">@{userScreenName}</span>
                    <span className="description">{userDescription}</span>
                  </div>
                  <div className="follow">
                    <div>
                      <span className="number">{userFollowingCount}</span>
                      {' '}
                      <span className="text">Following</span>
                    </div>
                    <div>
                      <span className="number">{userFollowersCount}</span>
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
                <span className="name">{userName}</span>
                {userIsBlueVerified && <Avatar src={blue_verified_badge} size="2rem" />}
                {userIsVerifiedBusiness && <Avatar src={yellow_verified_badge} size="2rem" />}
                <div className="hashtag-name">
                  <span>@{userScreenName}</span>
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
              <div className="like">
                <Heart size={18} />
                {likesCount}
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