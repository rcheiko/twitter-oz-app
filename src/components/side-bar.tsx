import { NavLink } from "react-router-dom"
import { Bell, Bookmark, Home, Mail, User, Settings, Moon, Sun } from "react-feather"
import { css } from "@emotion/react"
import { breakpoints } from "../styles/global"
import { Theme, toggleTheme, useTheme } from "../theme"
import { Route, getRoutePath } from "../path"
import twitter from '../assets/twitter-30.svg'

export const styleSidebar = (theme: Theme) => css`
  &.nav {
    position: sticky;
    top:0;
    display: flex;
    flex-direction: column;
    width: 100%;

    align-items: center;

    p {
      display: none;
    }

    @media (min-width: ${breakpoints.md}) {
      align-items: flex-end;
      p {
        display: inline;
      }
    }



    a :first-of-type {
      @media (min-width: ${breakpoints.md}) {
        margin-right: 1rem;
      }
    }

    > * {
      @media (min-width: ${breakpoints.md}) {
        width: 175px;
      }

      @media (min-width: ${breakpoints.lg}) {
        width: 225px;
      }

      > * {
        display: flex;

        > * {
          display: flex;
          margin: 0.25rem 0;
          padding: 1rem 1rem;
    
          &:hover {
            border-radius: 2rem;
            background-color: ${theme.colors.backgroundSecondary};
          }
        }
      }
    }
  }
`;

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
          <div>
            <img src={twitter} alt="twitter logo" />
          </div>
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
