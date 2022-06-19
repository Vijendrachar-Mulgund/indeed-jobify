import { Routes, Route } from "react-router-dom";

import { initBrowserFingerprint } from "./fingerprintjs/fpjsInit";

import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  initBrowserFingerprint();
  return (
    <div className="App">
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
