import { useEffect, useState } from "react"
import { CheckCircle, MoreHorizontal } from "react-feather"
import { css } from '@emotion/react'


import { Theme, fontSizes, useTheme } from '../theme'
import { PopOver, PopOverCard, PopOverMenu } from './popover-card'
import { ProfileConnectedType, getProfileConnected } from "../utils/fetch/profile-connected"
import { SettingsType, getSettings } from "../utils/fetch/settings"
import Avatar from "./avatar"
import avatar from "../assets/avatar.jpg"
import Shimmer from "./shimmer/shimmer"

const avatarStyle = (theme: Theme) => css`
width: 25rem;

.separator {
  height: .2rem;
  border-radius: 50%;
  background-color: ${theme.colors.backgroundQuaternary};
}

.profile {
  display: flex;
  align-items: center;
  padding: 1.2rem;
  :first-of-type {
    border-radius: .8rem .8rem 0 0;
  }
  :last-of-type {
    border-radius: 0 0 .8rem .8rem;
  }
  .endProfile {
    flex: auto;
    display: flex;
    justify-content: flex-end;
    margin-right: 1rem;
  }
}

> * {
  &:hover:not(.separator) {
    cursor: pointer;
    background-color: ${theme.colors.blur}};
  }
}

.flex {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  .text-next-to-profile, .text-at-profile {
    margin-left: 1rem;
  }

  .text-at-profile {
    font-size: ${fontSizes.sm};
    font-weight: 400;
  }
}
`

const ListProfileConnected = () => {
  const theme = useTheme()
  const [profileConnected, setProfileConnected] = useState<ProfileConnectedType | undefined>()
  const [settings, setSettings] = useState<SettingsType | undefined>()
  const profile = profileConnected?.users?.find(user => settings?.screen_name === user.screen_name)
  useEffect(() => {
    getProfileConnected().then((res) => setProfileConnected(res))
    getSettings().then((res) => setSettings(res))
  }, [])

  if (!profileConnected || !profileConnected?.users?.length || !profile) return (
      <div className="profile-under">
        <div className="profile">
          <Avatar shimmer={true} />
          <div className="name-profile">
              <Shimmer children="Shokker" />
            <p className="text-at-profile">
              <Shimmer children="Shokker" />
            </p>
          </div>
          <div className="endProfile">
            <Shimmer children="......." />
          </div>
        </div>
    </div>
  )
  return (
    <PopOver>
      <div className="profile-under">
        <PopOverCard>
            <div className="profile">
              <Avatar src={avatar} />
              <div className="name-profile">
                <p>
                  {
                    profile.name.length > 12
                      ? profile.name.slice(0, 12) + "..."
                      : profile.name
                  }
                </p>
                <p className="text-at-profile">
                  @{
                    profile.screen_name.length > 18
                      ? profile.screen_name.slice(0, 18) + "..."
                      : profile.screen_name
                  }
                </p>
              </div>
              <div className="endProfile">
                <MoreHorizontal />
              </div>
            </div>
        </PopOverCard>
      </div>
      <PopOverMenu>
        <div css={avatarStyle(theme)}>
          {
            profileConnected.users.map(user => (
              <div
                key={user.user_id}
                className="profile"
              >
                <Avatar src={user.avatar_image_url} />
                <div className="flex">
                  <span className="text-next-to-profile">{user.name}</span>
                  <span className="text-at-profile">@{user.screen_name}</span>
                </div>
                {
                  profile.screen_name === user.screen_name && (
                    <div className="endProfile">
                      <CheckCircle size={18} />
                    </div>
                  )
                }
              </div>
            ))
          }

          <div className="separator" />

          <div className="profile">
            Add an existing account
          </div>
          {
            profile && (
              <div className="profile">
              Logout @{profile.screen_name}
              </div>
            )
          }
        </div>
      </PopOverMenu>
    </PopOver>
  )
}

export default ListProfileConnected