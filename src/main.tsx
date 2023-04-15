/// <reference types="@emotion/react/types/css-prop" />
import React, { HTMLAttributes } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getRouterRoutePath, Route } from "./path";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";
import { css, Global } from "@emotion/react";
import { Theme, useTheme } from "./theme";
import { breakpoints, globalStyle } from "./styles/global";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Messages from "./pages/messages";
import Bookmarks from "./pages/bookmarks";
import Settings from "./pages/settings";
import Notifications from "./pages/notifications";
import ErrorPage from "./error-page";
import Sidebar from "./components/side-bar";
import Rightbar from "./components/right-bar";

export const positionStyle = (theme: Theme) => css`
&.body {
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: auto;
  overflow: hidden;
  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 15% 70% 15%;
  }
}
`;

const WrapElement = ({children}: HTMLAttributes<HTMLDivElement>) => {
  const theme = useTheme()

  return (
  <>
    <Global styles={globalStyle(theme)} />
    <div css={positionStyle(theme)} className="body">
        <Sidebar />
        {children}
        <Rightbar />
    </div>
  </>
  )
}

const router = createBrowserRouter([
  {
    path: getRouterRoutePath(Route.DASHBOARD),
    element: (
      <WrapElement>
        <Dashboard/>
      </WrapElement>
    ),
  },
  {
    path: getRouterRoutePath(Route.PROFILE),
    element: (
      <WrapElement>
        <Profile/>
      </WrapElement>
    ),
  },
  {
    path: getRouterRoutePath(Route.MESSAGES),
    element: (
      <WrapElement>
        <Messages />
      </WrapElement>
    ),
  },
  {
    path: getRouterRoutePath(Route.BOOKMARKS),
    element: (
      <WrapElement>
        <Bookmarks />
      </WrapElement>
    ),
  },
  {
    path: getRouterRoutePath(Route.SETTINGS),
    element: (
      <WrapElement>
        <Settings />
      </WrapElement>
    ),
  },
  {
    path: getRouterRoutePath(Route.NOTIFICATIONS),
    element: (
      <WrapElement>
        <Notifications />
      </WrapElement>
    ),
  },
  {
    path: "/*",
    element: (
      <WrapElement>
        <ErrorPage />
      </WrapElement>
    ),
  },
])

const mount = document.createElement('div')
mount.className = 'mount'

ReactDOM
  .createRoot(document.body.appendChild(mount))
  .render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </React.StrictMode>
  )
