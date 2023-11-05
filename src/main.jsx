import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AllRoutes from "./routers/allRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllRoutes />
  </React.StrictMode>
);
