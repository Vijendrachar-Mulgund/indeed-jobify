import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
