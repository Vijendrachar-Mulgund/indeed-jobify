import { async } from "@firebase/util";
import { useEffect } from "react";

import IndeedLogo from "./assets/Logo-icons/Indeed_logo_full.svg";

import { fetchAndActivateRemoteConfig } from "./firebase/remoteConfig";

const App = () => {
  useEffect(() => {
    async function fetchData() {
      const values = await fetchAndActivateRemoteConfig();
      console.log("The final Values -> ", values);
    }

    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">Hello World</header>
      <img src={IndeedLogo} alt="" />
    </div>
  );
};

export default App;
