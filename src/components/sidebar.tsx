import { NavLink } from "react-router-dom"
import { Route, getRoutePath } from "../path"
import { Theme, toggleTheme, useTheme } from "../theme"
import { css } from "@emotion/react"

export const style = (theme: Theme) => css`
  .side-left {
    border-right: 1px solid ${theme.colors.primary};
    position: fixed;
    height: 100%;
    width: 20%;
    text-align: right;
    z-index: 1;
  }
`;

const ThemeToggle = () => {
  const theme = useTheme();
  return (
    <button onClick={() => toggleTheme()}>
      {theme.colorScheme === "light" ? <div>moon</div> : <div>sun</div>}
    </button>
  );
};

export default function Sidebar() {
  const theme = useTheme();

  return (
    <div css={style(theme)}>
      <div className="side-left">
        <nav>
          <NavLink to={getRoutePath(Route.DASHBOARD)}>Home</NavLink>
          <NavLink to={getRoutePath(Route.NOTIFICATIONS)}>
            Notifications
          </NavLink>
          <NavLink to={getRoutePath(Route.MESSAGES)}>Message</NavLink>
          <NavLink to={getRoutePath(Route.BOOKMARKS)}>Bookmarks</NavLink>
          <NavLink to={getRoutePath(Route.PROFILE, { profileName: "Shokker" })}>
            Profile
          </NavLink>
          <NavLink to={getRoutePath(Route.SETTINGS)}>Settings</NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </div>
  )
}
