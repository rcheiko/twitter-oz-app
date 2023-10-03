import { CheckCircle, MoreHorizontal } from "react-feather"
import { css } from '@emotion/react'


import { Theme, fontSizes, useTheme } from '../theme'
import { PopOver, PopOverCard, PopOverMenu } from './popover-card'
import Avatar from "./avatar"
import avatar from "../assets/avatar.jpg"

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

export const ListProfileConnected = () => {
  const theme = useTheme();
  
  return (
    <PopOver>
      <div className="profile-under">
        <PopOverCard>
            <div className="profile">
              <Avatar src={avatar} />
              <div className="nameProfile">
                <p>
                  {
                    "Shokker".length > 12 ? "Shokker".slice(0, 12) + "..." : "Shokker"
                  }
                </p>
                <p className="text-at-profile">
                  {
                    "@Shokker".length > 18 ? "@Shokker".slice(0, 18) + "..." : "@Shokker"
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
          <div className="profile">
            <Avatar src={avatar} />

            <div className="flex">
              <span className="text-next-to-profile">Shokker</span>
              <span className="text-at-profile">@Shokker</span>
            </div>

            <div className="endProfile">
              <CheckCircle size={18} />
            </div>
          </div>

          <div className="profile">
            <Avatar src={avatar} />
            <div className="flex">
              <span className="text-next-to-profile">Shokker</span>
              <span className="text-at-profile">@Shokker</span>
            </div>
          </div>

          <div className="profile">
            <Avatar src={avatar} />
            <div className="flex">
              <span className="text-next-to-profile">Shokker</span>
              <span className="text-at-profile">@Shokker</span>
            </div>
          </div>

          <div className="separator" />

          <div className="profile">
            Shokitooo
          </div>

          <div className="profile">
            Change Account
          </div>

        </div>
      </PopOverMenu>
    </PopOver>
  )
}

export default ListProfileConnected