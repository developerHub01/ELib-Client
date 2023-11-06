import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AllRoutes from "./routers/allRoutes.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AllRoutes />
    </AuthProvider>
  </React.StrictMode>
);
