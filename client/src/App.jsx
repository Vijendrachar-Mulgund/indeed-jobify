import React, { useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userAutoAuth, userAuth } from "./redux/slices/userSlice";
import { Toast } from "./components/atoms";
import { unprotectedRoutes, protectedRoutes } from "./router/config";

import AuthGuard from "./router/guard";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

// Main App component
const App = () => {
  /**
   * Declarations
   */
  const dispatch = useDispatch();

  /**
   * Router methods
   */
  const [params] = useSearchParams();

  /**
   * UseEffects
   */

  // Mounted
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
        {/* The router Config */}
        <div>
          <Routes>
            {/* Unprotected routes */}
            {unprotectedRoutes?.length &&
              unprotectedRoutes?.map((route, index) => (
                <Route key={index} path={route?.path} element={route?.element} />
              ))}

            {/* Protected routes */}
            <Route element={<AuthGuard />}>
              {protectedRoutes?.length &&
                protectedRoutes?.map((route, index) => (
                  <Route key={index} path={route?.path} element={route?.element} />
                ))}
            </Route>

            {/* Wildcard routes */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>

          {/* Toast message */}
          <Toast />
        </div>
      </div>
    </div>
  );
};

export default App;
