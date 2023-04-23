import { NavLink } from "react-router-dom"
import { Bell, Bookmark, Home, Mail, User, Settings, Moon, Sun } from "react-feather"
import { css } from "@emotion/react"
import { Theme, toggleTheme, useTheme } from "../theme"
import { Route, getRoutePath } from "../path"
import twitter from '../assets/twitter-30.svg'
import { styleSidebar } from "../styles/side"
import { ListProfileConnected } from "./list-profile-connected"

const themeToggleStyle = (theme: Theme) => css`
  &.theme {
    background-color: transparent;
  }
`

const ThemeToggle = () => {
  const theme = useTheme();
  return (
    <div>
      <button onClick={() => toggleTheme()} css={themeToggleStyle(theme)} className="theme">
        {theme.colorScheme === "light" ? <><Moon color={theme.colors.jetBlack} /></> : <><Sun /></>}
      </button>
    </div>
  );
};

export default function Sidebar() {
  const theme = useTheme();

  return (
    <div>
      <nav css={styleSidebar(theme)} className="nav">
        <NavLink to={getRoutePath(Route.DASHBOARD)}>
          <img src={twitter} alt="twitter logo" />
        </NavLink>
        <div>
          <NavLink to={getRoutePath(Route.DASHBOARD)}>
              <Home />
              <p>Home</p>
          </NavLink>
        </div>
        <div>
          <NavLink to={getRoutePath(Route.NOTIFICATIONS)}>
            <Bell />
            <p>Notifications</p>
          </NavLink>
        </div>
        <div>
          <NavLink to={getRoutePath(Route.MESSAGES)}>
            <Mail />
            <p>Message</p>
          </NavLink>
        </div>
        <div>
          <NavLink to={getRoutePath(Route.BOOKMARKS)}>
              <Bookmark />
              <p>Bookmarks</p>
          </NavLink>
        </div>
        <div>
          <NavLink to={getRoutePath(Route.PROFILE, { profileName: "Shokker" })}>
            <User />
            <p>Profile</p>
          </NavLink>
        </div>
        <div>
          <NavLink to={getRoutePath(Route.SETTINGS)}>
            <Settings />
            <p>Settings</p>
          </NavLink>
        </div>
        <ThemeToggle />
        {/* <Modal open={isOpenListProfile} onClose={() => SetIsOpenListProfile(false)}>
          <div>Salut</div>
        </Modal> */}
        {/* <div onClick={() => SetIsOpenListProfile(!isOpenListProfile)} className="profile">
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
        </div> */}

        <ListProfileConnected />

      </nav>
    </div>
  )
}
