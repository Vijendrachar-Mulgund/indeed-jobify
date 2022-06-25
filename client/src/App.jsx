import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ToasterBar from "./components/modules/ToasterBar/ToasterBar";

const App = () => {
  return (
    <div className="App">
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <ToasterBar />
    </div>
  );
};

export default App;
