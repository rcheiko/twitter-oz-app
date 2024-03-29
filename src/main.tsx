/// <reference types="@emotion/react/types/css-prop" />
import React, { HTMLAttributes } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom"
import { ApolloProvider } from "@apollo/client"
import { css, Global } from "@emotion/react"

import { getRouterRoutePath, Route } from "./path"
import { Theme, useTheme } from "./theme"
import { globalStyle } from "./styles/global"
import { client } from "./apollo/client"
import Dashboard from "./router/dashboard"
import Profile from "./router/profile"
import Messages from "./router/messages"
import Bookmarks from "./router/bookmarks"
import Settings from "./router/settings"
import Notifications from "./router/notifications"
import ErrorPage from "./error-page"
import Sidebar from "./components/side-bar"
import Rightbar from "./components/right-bar"

const positionStyle = (theme: Theme, path?: string) => css`
display: grid;
grid-template-columns: 15% 70% 15%;
grid-template-rows: auto;

@media (min-width: 768px) {
  grid-template-columns: 30% 55% 15%;
}

@media (min-width: 1024px) {
  grid-template-columns: ${
    path === '/messages'
      ? '30% 55% 15%;'
      : '30% 42.5% 27.5%;'
  }

> * {
  border-right: 1px solid ${theme.colors.borderPrimary};
  min-height: 100vh;
}
`

const WrapElement = ({children}: HTMLAttributes<HTMLDivElement>) => {
  const theme = useTheme()
  const path = useLocation()
  return (
    <>
      <Global styles={globalStyle(theme)} />
      <div css={positionStyle(theme, path.pathname)}>
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

ReactDOM
  .createRoot(document.getElementById("root")!)
  .render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </React.StrictMode>
  )
