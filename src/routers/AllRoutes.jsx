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
import ReadBook from "../pages/ReadBook";
import UpdateBook from "../pages/UpdateBook";

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
        element: (
          <PrivateRoute>
            <AllBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:id",
        element: <CategoryPage />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/read/:id",
        element: (
          <PrivateRoute>
            <ReadBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowed",
        element: (
          <PrivateRoute>
            <BorrowedBooks />,
          </PrivateRoute>
        ),
      },
      {
        path: "/update/book/:id",
        element: (
          <PrivateRoute>
            <UpdateBook />,
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
