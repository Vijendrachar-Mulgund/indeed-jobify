import { useEffect, useState } from "react";
import { getConfigValue } from "./../../firebase/remoteConfig";

import Button from "./../../components/modules/Button/Button";
import LandingPageCover from "./../../assets/Images/LandingPage_cover.svg";

import { LandingPageContainer } from "./../../styles/LandingPage/LandingPageContainer";

import { AiOutlineLogin } from "react-icons/ai";

const LandingPage = () => {
  const [welcomeMessage, setWelcomeMessage] = useState({});

  useEffect(() => {
    const messageFromConfig = JSON.parse(getConfigValue("landingPage")?.asString());

    setWelcomeMessage(messageFromConfig);
  }, []);

  useEffect(() => {
    console.log("This is a welcome message - ", welcomeMessage);
  }, [welcomeMessage]);

  return (
    <LandingPageContainer>
      <div className="left-side">
        <h3>{welcomeMessage?.title}</h3>
        <p>{welcomeMessage?.message}</p>
        <Button type="button" label="Login / Signup" icon={<AiOutlineLogin />} />
      </div>
      <div className="right-side">
        <img className="landingpage-cover" src={LandingPageCover} alt="Landing-Page-cover" />
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;
