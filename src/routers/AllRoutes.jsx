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
import BorrowedBooks from "../pages/BorrowedBooks";
import AllBooks from "../pages/AllBooks";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddBookPage />,
          </PrivateRoute>
        ),
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
      {
        path: "/category/:id",
        element: <CategoryPage />,
      },
      {
        path: "/details/:id",
        element: <BookDetails />,
      },
      {
        path: "/borrowed",
        element: (
          <PrivateRoute>
            <BorrowedBooks />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const AllRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AllRoutes;
