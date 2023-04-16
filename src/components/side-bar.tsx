import { NavLink } from "react-router-dom"
import { Bell, Bookmark, Home, Mail, User, Settings, Moon, Sun } from "react-feather"
import { css } from "@emotion/react"
import { breakpoints } from "../styles/global"
import { Theme, toggleTheme, useTheme } from "../theme"
import { Route, getRoutePath } from "../path"
import twitter from '../assets/twitter-30.svg'
import { styleSidebar } from "../styles/side"

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
        <div>
          <NavLink to={getRoutePath(Route.DASHBOARD)}>
            <img src={twitter} alt="twitter logo" />
          </NavLink>
        </div>
        <div>
          <NavLink to={getRoutePath(Route.DASHBOARD)}>
            <div>
              <Home />
              <p>Home</p>
            </div>
          </NavLink>
        </div>
        <div>
          <div>
            <NavLink to={getRoutePath(Route.NOTIFICATIONS)}>
              <Bell />
              <p>Notifications</p>
            </NavLink>
          </div>
        </div>
        <div>
          <div>
          <NavLink to={getRoutePath(Route.MESSAGES)}>
            <Mail />
            <p>Message</p>
          </NavLink>
          </div>
        </div>
        <div>
          <div>
            <NavLink to={getRoutePath(Route.BOOKMARKS)}>
                <Bookmark />
                <p>Bookmarks</p>
            </NavLink>
          </div>
        </div>
        <div>
          <div>
            <NavLink to={getRoutePath(Route.PROFILE, { profileName: "Shokker" })}>
              <User />
              <p>Profile</p>
            </NavLink>
          </div>
        </div>
        <div>
          <div>
              <NavLink to={getRoutePath(Route.SETTINGS)}>
                <Settings />
                <p>Settings</p>
              </NavLink>
          </div>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}
