import React from "react";

import { useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAutoAuth, userAuth } from "./redux/slices/userSlice";

// Page Imports
import Header from "./components/Header/Header";

import { unprotectedRoutes, protectedRoutes } from "./router/config";
import AuthGuard from "./router/guard";

import PageNotFound from "./pages/PageNotFound/PageNotFound";

// Main App component
const App = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (params.get("login") === "google") {
      const device = localStorage.getItem("deviceInfo");

      if (device) {
        dispatch(userAuth({ device: JSON.parse(device) }));
      }
    }
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("user-id");

    if (userId) {
      dispatch(userAutoAuth());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <div className="App-container">
        {/* Header */}
        <Header />

        {/* The router Config */}
        <div>
          <Routes>
            {/* Unprotected routes */}
            {unprotectedRoutes?.length &&
              unprotectedRoutes?.map((route, index) => (
                <Route key={index} path={route?.path} element={route?.element} />
              ))}

            {/* Protected routes */}
            {protectedRoutes?.length &&
              protectedRoutes?.map((route, index) => (
                <Route element={<AuthGuard />}>
                  <Route key={index} path={route?.path} element={route?.element} />
                </Route>
              ))}

            {/* Wildcard routes */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
