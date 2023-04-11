/// <reference types="@emotion/react/types/css-prop" />
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Dashboard from "./pages/dashboard";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";
import Sidebar from "./components/sidebar";
import { getRouterRoutePath, Route } from "./path";
import Profile from "./pages/profile";
import Messages from "./pages/messages";
import Bookmarks from "./pages/bookmarks";
import Settings from "./pages/settings";
import Notifications from "./pages/notifications";

const wrapElement = (child: React.ReactNode) => (
  <>
    <Sidebar />
    {child}
  </>
)

const router = createBrowserRouter([
  {
    path: getRouterRoutePath(Route.DASHBOARD),
    element: wrapElement(<Dashboard />),
  },
  {
    path: getRouterRoutePath(Route.PROFILE),
    element: wrapElement(<Profile />),
  },
  {
    path: getRouterRoutePath(Route.MESSAGES),
    element: wrapElement(<Messages />),
  },
  {
    path: getRouterRoutePath(Route.BOOKMARKS),
    element: wrapElement(<Bookmarks />),
  },
  {
    path: getRouterRoutePath(Route.SETTINGS),
    element: wrapElement(<Settings />),
  },
  {
    path: getRouterRoutePath(Route.NOTIFICATIONS),
    element: wrapElement(<Notifications />),
  },
  {
    path: "/*",
    element: wrapElement(<ErrorPage />),
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
)
