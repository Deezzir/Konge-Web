import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import "./index.css";
import { Buffer } from "buffer";
import { RouterProvider } from "react-router-dom";

window.Buffer = Buffer;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
