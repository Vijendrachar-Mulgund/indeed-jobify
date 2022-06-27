import { HeaderWrapper } from "../../styles/modules/HeaderWrapper/HeaderWrapper";

import IndeedLogo from "./../../assets/logo-icons/Indeed_logo_full.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-container">
        <div className="logo-container">
          <img src={IndeedLogo} alt="indeed-logo" />
        </div>
        <div className="cta-container"></div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
