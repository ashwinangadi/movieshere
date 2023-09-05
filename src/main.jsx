import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/Context.jsx";
import { Theme } from "@radix-ui/themes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites.jsx";
import ErrorPage from "./components/Error/Error.jsx";
import MoviePage from "./pages/MoviePage/MoviePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MoviePage />,
      },
      {
        path: "/favorite",
        element: <Favorites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </AppProvider>
  </React.StrictMode>
);
