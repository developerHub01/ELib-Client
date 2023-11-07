import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AllRoutes from "./routers/allRoutes.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import LoaderProvider from "./Context/LoaderProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoaderProvider>
      <AuthProvider>
        <AllRoutes />
      </AuthProvider>
    </LoaderProvider>
  </React.StrictMode>
);
