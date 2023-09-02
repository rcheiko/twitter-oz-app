import { CheckCircle, MoreHorizontal } from "react-feather"
import avatar from "../assets/avatar.jpg"
import { css } from '@emotion/react'

import { Theme, fontSizes, fontWeights, useTheme } from '../theme'
import { PopOver, PopOverCard, PopOverMenu } from './popover/popover'
import Avatar from "./avatar"

const avatarStyle = (theme: Theme) => css`
padding: 5px 0;

.separator {
  margin: 10px 0;
  height: 2px;
  border-radius: 50%;
  background-color: ${theme.colors.backgroundQuaternary};
}

.profile {
  display: flex;
  align-items: center;
  padding: 3px 8px;
  .endProfile {
    flex: auto;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
  }
}

.margin {
  margin: 10px 0;
}

.margin-top {
  margin-top: 10px;
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
    font-weight: ${fontWeights('sm')};
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
          <div className="profile margin-top">
            <Avatar src={avatar} />

            <div className="flex margin">
              <span className="text-next-to-profile">Shokker</span>
              <span className="text-at-profile">@Shokker</span>
            </div>

            <div className="endProfile">
              <CheckCircle size={18} />
            </div>
          </div>

          <div className="profile">
            <Avatar src={avatar} />
            <div className="flex margin">
              <span className="text-next-to-profile">Shokker</span>
              <span className="text-at-profile">@Shokker</span>
            </div>
          </div>

          <div className="profile">
            <Avatar src={avatar} />
            <div className="flex margin">
              <span className="text-next-to-profile">Shokker</span>
              <span className="text-at-profile">@Shokker</span>
            </div>
          </div>

          <div className="separator" />

          <div className="profile margin">
            Shokitooo
          </div>

          <div className="profile margin">
            Change Account
          </div>

        </div>
      </PopOverMenu>
    </PopOver>
  )
}

export default ListProfileConnected