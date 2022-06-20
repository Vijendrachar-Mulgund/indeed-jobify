import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
