import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { HeaderWrapper, UserPopover } from "../../styles/modules/HeaderWrapper/HeaderWrapper";
import { useLogout } from "./../../utils/logout";
import IndeedLogo from "./../../assets/logo-icons/Indeed_logo_full.svg";

import { Button, Popover, Divider } from "antd";
import { LoginOutlined, SmileOutlined } from "@ant-design/icons";

const Header = () => {
  const [isUserLoggedin, setIsUserLoggedIn] = useState(false);
  const [isUserPopoverVisable, setIsUserPopoverVisible] = useState(false);

  const navigator = useNavigate();
  const location = useLocation();
  const logoutCb = useLogout();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user?.user?._id) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [user]);

  const handleLoginSignUpClick = () => {
    navigator("/login");
  };

  const handleUserPopoverVisibleChange = () => {
    setIsUserPopoverVisible((prevState) => {
      return !prevState;
    });
  };

  // const handleUserLogout = () => {
  //   logout();
  // };

  const userPopoverContent = () => {
    return (
      <UserPopover>
        <h3>{user?.user?.name}</h3>
        <p>{user?.user?.email}</p>
        <Divider style={{ margin: "10px" }} />
        <Button type="link" block>
          Account
        </Button>
        <Button onClick={logoutCb} type="link" block>
          Logout
        </Button>
      </UserPopover>
    );
  };

  return (
    <HeaderWrapper>
      <div className="header-container">
        <div className="logo-container">
          <img src={IndeedLogo} alt="indeed-logo" />
        </div>
        <div className="cta-container">
          {/* If the user is NOT logged in and the is not on the login/signup page*/}
          {!isUserLoggedin && location.pathname !== "/login" && location.pathname !== "/signup" && (
            <Button onClick={handleLoginSignUpClick} type="primary" icon={<LoginOutlined />}>
              Login / Signup
            </Button>
          )}

          {/* If the user is logged in */}
          {isUserLoggedin && (
            <Popover
              content={userPopoverContent}
              trigger="click"
              visible={isUserPopoverVisable}
              onVisibleChange={handleUserPopoverVisibleChange}
            >
              <Button type="primary" icon={<SmileOutlined />}>
                {user?.user?.name}
              </Button>
            </Popover>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
