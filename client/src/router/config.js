import LandingPage from "../pages/LandingPage";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/Signup";

import CreateNewJob from "../pages/Dashboard/CreateNewJob";
import ViewJob from "../pages/Dashboard/ViewJob";

export const unprotectedRoutes = [
  {
    path: "/landing",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];

export const protectedRoutes = [
  {
    path: "/create-job",
    element: <CreateNewJob />,
  },
  {
    path: "/view-job",
    element: <ViewJob />,
  },
];
