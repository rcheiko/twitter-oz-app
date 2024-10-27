import { ReactNode, useState } from "react"
import { css } from "@emotion/react"

import { followButton } from "../../utils/action/handleFollow"
import { User } from "../../utils/fetch/notifications"
import { colors, Theme, useTheme } from "../../theme"
import TooltipDisplay from "./../hover-card"
import Avatar from "./../avatar"

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

export const userScreenName = ({
  text,
  user
}: {
  text: ReactNode,
  user: User | undefined
}) => {
  const theme = useTheme()

  const [followed, setFollowed] = useState(user?.following)

  const userFollowersCount = user?.followers_count
  const userFollowingCount = user?.friends_count
  const userDescription = user?.description
  const userName = user?.name
  const name = user?.screen_name
  const avatar = user?.profile_image_url_https

  const updateFollow = async() => {
    const status = await followButton(user, followed)
    if (status) {
      setFollowed(!followed)
    }
  }

  return (
    <TooltipDisplay
      text={text}
      toolTipText={
        <div css={tooltipAvatar(theme)}>
          <div className="top-menu">
            <Avatar src={avatar} />
            <button
              onClick={() => updateFollow()}
              className={followed ? "following" : "followed"}
            >
              {
                followed ? "Following" : "Follow"
              }
            </button>
          </div>
          <div className="flex">
            <span className="name">{userName}</span>
            <span className="sub-name">@{name}</span>
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
  )
}

export default userScreenName