import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { LanguageProvider } from "./contexts/LanguageContext";

const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  MOUNT_NODE
);
