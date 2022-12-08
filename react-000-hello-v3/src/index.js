import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  // 문법을 철저하게 관리하겠다는 의미
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
