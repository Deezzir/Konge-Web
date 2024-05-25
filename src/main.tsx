import React from "react";
import ReactDOM from "react-dom/client";
import { MyRouter } from "./router";
import "./index.css";
import { Buffer } from "buffer";

window.Buffer = Buffer;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
);
