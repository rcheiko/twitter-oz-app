import { NavLink } from "react-router-dom"
import { Theme, toggleTheme, useTheme } from "../theme"
import { css } from "@emotion/react"
import { breakpoints } from "../styles/global"
import { Route, getRoutePath } from "../path"
import { Bell, Bookmark, Home, Mail, User, Settings, Moon, Sun } from "react-feather"
import twitter from '../assets/twitter-30.svg'

export const styleSidebar = (theme: Theme) => css`
  &.nav {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    a {
      display: flex;
      padding-bottom: 1rem;
    }

    @media (max-width: ${breakpoints.md}) {
      align-items: center;
      
      p {
        display: none;
      }
    }
  }
`;

const themeToggleStyle = (theme: Theme) => css`
  &.theme {
    background-color: ${theme.colors.backgroundPrimary};
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
    <>
      <nav css={styleSidebar(theme)} className="nav">
        {/* <img src={twitter} alt="twitter logo" /> */}
        <NavLink to={getRoutePath(Route.DASHBOARD)}>
          <Home />
          <p>Home</p>
        </NavLink>
        <NavLink to={getRoutePath(Route.NOTIFICATIONS)}>
          <Bell />
          <p>Notifications</p>
        </NavLink>
        <NavLink to={getRoutePath(Route.MESSAGES)}>
          <Mail />
          <p>Message</p>
        </NavLink>
        <NavLink to={getRoutePath(Route.BOOKMARKS)}>
          <Bookmark />
          <p>Bookmarks</p>
        </NavLink>
        <NavLink to={getRoutePath(Route.PROFILE, { profileName: "Shokker" })}>
          <User />
          <p>Profile</p>
        </NavLink>
        <NavLink to={getRoutePath(Route.SETTINGS)}>
          <Settings />
          <p>Settings</p>
        </NavLink>
        <ThemeToggle />
      </nav>
    </>
  )
}
