import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemePrivider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemePrivider>
    <App />
  </ThemePrivider>
);
