import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAutoAuth } from "./redux/slices/userSlice";

import AuthGaurd from "./routerConfig/authGaurd";

import Header from "./components/Header/Header";
import PageLoader from "./components/PageLoader/PageLoader";
import Home from "./pages/JobSeekers/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");

    if (token) {
      dispatch(userAutoAuth());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <div className="App-container">
        {/* Header */}
        <Header user={user} />

        {/* The router Config */}
        <div>
          <Routes>
            <Route path="/landing" element={<LandingPage />} />
            {/* The Auth routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* The Job seekers routes */}
            <Route
              path="/"
              element={
                <AuthGaurd user={user}>
                  <Home />
                </AuthGaurd>
              }
            />

            {/* Dashboard Routes */}

            {/* Wildcard routes */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>

      {isLoading && (
        <div className="App-loader">
          <PageLoader />
        </div>
      )}
    </div>
  );
};

export default App;
