import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import CategoryPage from "../pages/CategoryPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import AddBookPage from "../pages/AddBookPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/addbook",
        element: <AddBookPage />,
      },
      {
        path: "/category/:id",
        element: <CategoryPage />,
      },
      {
        path: "/details",
        element: <BookDetails />,
      },
    ],
  },
]);

const AllRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AllRoutes;
