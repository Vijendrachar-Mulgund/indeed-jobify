import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LandingPageContainer } from "./styles";
import { Button } from "../../components/atoms";

import { getConfigValue } from "../../firebase/config";

import { LandingPageCover } from "../../assets";

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
      {/* Left side */}
      <div className="left-side">
        <h3>{welcomeMessage?.title}</h3>
        <p>{welcomeMessage?.message}</p>

        <Button onClick={handleLoginRegisterClick} label="Go to Login Page" />
      </div>

      {/* Right side */}
      <div className="right-side">
        <LandingPageCover className="cover" />
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;
