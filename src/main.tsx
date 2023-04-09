import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./pages/home";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { client } from "./apollo/client";
import Sidebar from "./components/sidebar";

const wrapElement = (child: React.ReactNode) =>
  <>
    {/* <NotificationRoot> */}
      <Sidebar />
      {child}
    {/* </NotificationRoot> */}
  </>

const router = createBrowserRouter([
  {
    path: "/",
    element: wrapElement(<Home />),
    errorElement: wrapElement(<ErrorPage />),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
