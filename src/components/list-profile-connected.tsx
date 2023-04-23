import { CheckCircle, MoreHorizontal } from "react-feather"
import avatar from "../assets/avatar.jpg"
import { Theme, colors, useTheme } from '../theme';
import { css } from '@emotion/react';
import { PopOver, PopOverCard, PopOverMenu } from './popover/popover';
import Avatar from "./avatar";

const avatarStyle = (theme: Theme) => css`
padding: 5px 0;

.profile {
  display: flex;
  align-items: center;
  padding: 3px 8px;
}

.endProfile {
  flex: auto;
  display: flex;
  justify-content: flex-end;
}

.margin {
  margin: 10px 0;
}

.margin-top {
  margin-top: 10px;
}

.text-next-to-profile {
  margin-left: 15px;
}

> * {
  &:hover:not(.active) {
    cursor: pointer;
    background-color: ${colors.blur}};
  }
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.text-grey {
  font-size: 1.1rem;
  font-weight: 200;
}
`

export function ListProfileConnected () {
  const theme = useTheme();
  
  return (
    <PopOver>
      <PopOverCard>
        <div className="profile">
          <Avatar src={avatar} />
          <div className="nameProfile">
            <p>
              {
                "Shokker".length > 12 ? "Shokker".slice(0, 12) + "..." : "Shokker"
              }
            </p>
            <p className="text-grey">
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
      <PopOverMenu>
        <div css={avatarStyle(theme)}>
          <div className="profile margin-top">
            <Avatar src={avatar} />
            <div className="flex margin">
              <span className="text-next-to-profile">Shokker</span>
              <span className="text-grey">@Shokker</span>
            </div>
            <div className="endProfile">
              <CheckCircle />
            </div>
          </div>
          <div className="profile">
            <Avatar src={avatar} />
            <div className="flex margin">
              <span className="text-next-to-profile">Shokker</span>
              <span className="text-grey">@Shokker</span>
            </div>
          </div>
          <div className="profile">
            <Avatar src={avatar} />
            <div className="flex margin">
              <span className="text-next-to-profile">Shokker</span>
              <span className="text-grey">@Shokker</span>
            </div>
          </div>
          <div className="profile margin">
            Shokitooo
          </div>
          <div className="profile margin">
            Change Account
          </div>
        </div>
          {/* <PopOverArrow /> */}
      </PopOverMenu>
    </PopOver>
  )
}