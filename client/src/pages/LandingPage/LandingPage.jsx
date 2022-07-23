import { useEffect, useState } from "react";
import { getConfigValue } from "./../../firebase/remoteConfig";
import { LandingPageContainer } from "./../../styles/LandingPage/LandingPageContainer";
import { LoginOutlined } from "@ant-design/icons";
import { Button } from "antd";
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
        <Button onClick={handleLoginRegisterClick} type="primary" size="large" icon={<LoginOutlined />}>
          Login / Register
        </Button>
      </div>
      <div className="right-side">
        <img className="landingpage-cover" src={LandingPageCover} alt="Landing-Page-cover" />
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;
