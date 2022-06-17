import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
