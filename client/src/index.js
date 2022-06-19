import React from "react";
import ReactDOM from "react-dom/client";
import { initBrowserFingerprint } from "./fingerprintjs";

import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Get the browser Info and store
initBrowserFingerprint();

// Mount the Reack application
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
