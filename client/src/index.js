import React from "react";
import ReactDOM from "react-dom/client";
import { initBrowserFingerprint } from "./fingerprintjs";
import { fetchAndActivateRemoteConfig } from "./firebase/config";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "normalize.css";
import "./index.scss";
import App from "./App";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Mount the React application
const init = async () => {
  try {
    // Wait for remote config
    await fetchAndActivateRemoteConfig();

    // Get the browser Info and store
    await initBrowserFingerprint();

    // Mount the App
    bootstrap();
  } catch (error) {
    // Try to mount the App anyway
    bootstrap();

    console.error("Something went wrong ", error);
  }
};

const bootstrap = () => {
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </Provider>,
  );
};

// Initialize the App
init();
