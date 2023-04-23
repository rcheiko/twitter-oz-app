import { CheckCircle, MoreHorizontal } from "react-feather"
import avatar from "../assets/avatar.jpg"
import { Theme, colors, useTheme } from '../theme';
import { css } from '@emotion/react';
import { Dropdown, DropdownCard, DropdownMenu } from './dropdown/dropdown';

const avatarStyle = (theme: Theme) => css`
padding: 5px 0;

.profile {
  display: flex;
  align-items: center;
  padding: 3px 8px;
}

.avatar-image {
  width: 45px;
  height: 45px;
  border-radius: 100px;
  margin-right: 20px;
}

.endProfile {
  flex: auto;
  display: flex;
  justify-content: flex-end;
}

.margin {
  margin: 10px 0;
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
    <Dropdown>
      <DropdownCard>
        <div className="profile">
          <img src={avatar} className="profilePicture" />
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
      </DropdownCard>
      <DropdownMenu>
        <div css={avatarStyle(theme)}>
          <div className="profile active">
            <img src={avatar} className="avatar-image margin" />
            <div className="flex">
              <span className="text-next-to-profile">Shokker</span>
              <span className="text-grey">@Shokker</span>
            </div>
            <div className="endProfile">
              <CheckCircle />
            </div>
          </div>
          <div className="profile">
            <img src={avatar} className="avatar-image margin" />
            <div className="flex">
              <span className="text-next-to-profile">Shokker</span>
              <span className="text-grey">@Shokker</span>
            </div>
          </div>
          <div className="profile">
            <img src={avatar} className="avatar-image margin" />
            <div className="flex">
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
          {/* <DropdownArrow /> */}
      </DropdownMenu>
    </Dropdown>
    // <DropdownMenu.Root css={styleListProfile(theme)}>
    //   <DropdownMenu.Trigger asChild>
    //     <div className="profile">
    //       <img src={avatar} className="profilePicture" />
    //       <div className="nameProfile">
    //         <p>
    //           {
    //             "Shokker".length > 12 ? "Shokker".slice(0, 12) + "..." : "Shokker"
    //           }
    //         </p>
    //         <p className="text-grey">
    //           {
    //             "@Shokker".length > 18 ? "@Shokker".slice(0, 18) + "..." : "@Shokker"
    //           }
    //         </p>
    //       </div>
    //       <div className="endProfile">
    //         <MoreHorizontal />
    //       </div>
    //     </div>
    //   </DropdownMenu.Trigger>

    //   <DropdownMenu.Portal>
    //     <DropdownMenu.Content className="" sideOffset={10}>
          // <DropdownMenu.Item className="">
          //   New Tab
          // </DropdownMenu.Item>
          // <DropdownMenu.Item className="DropdownMenuItem">
          //   New Window
          // </DropdownMenu.Item>
          // <DropdownMenu.Item className="DropdownMenuItem">
          //   New Private Window
          // </DropdownMenu.Item>

    //       <DropdownMenu.Separator className="DropdownMenuSeparator test" />
    //       <DropdownMenu.Separator className="DropdownMenuSeparator test" />

    //       <DropdownMenu.Arrow className="DropdownMenuArrow" />
    //     </DropdownMenu.Content>
    //   </DropdownMenu.Portal>
    // </DropdownMenu.Root>

  )
}