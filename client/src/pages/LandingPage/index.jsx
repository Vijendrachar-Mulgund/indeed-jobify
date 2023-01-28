import { useEffect, useState } from "react";
import { getConfigValue } from "../../firebase/config";
import { LandingPageContainer } from "../../styles/LandingPage/LandingPageContainer";
import { useNavigate } from "react-router-dom";

import LandingPageCover from "./../../assets/Images/landing-page-cover.svg";

const LandingPage = () => {
  const [welcomeMessage, setWelcomeMessage] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const messageFromConfig = JSON.parse(getConfigValue("landingPage")?.asString());
    setWelcomeMessage(messageFromConfig);
  }, []);

  const handleLoginRegisterClick = () => {
    navigate("/login");
  };

  return (
    <LandingPageContainer>
      <div className="left-side">
        <h3>{welcomeMessage?.title}</h3>
        <p>{welcomeMessage?.message}</p>
      </div>
      <div className="right-side">
        <img src={LandingPageCover} alt="Landing-Page-cover" />
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;
