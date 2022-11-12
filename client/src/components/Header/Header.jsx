import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { HeaderWrapper, UserPopover } from "../../styles/modules/HeaderWrapper/HeaderWrapper";
import { logout } from "./../../utils/logout";
import IndeedLogo from "./../../assets/Logo-icons/Indeed_logo_full.svg";

import { Button, Popover, Divider } from "antd";
import { LoginOutlined, SmileOutlined } from "@ant-design/icons";

const Header = ({ user }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isUserPopoverVisible, setIsUserPopoverVisible] = useState(false);

  const navigator = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user?._id) {
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

  const userPopoverContent = () => {
    return (
      <UserPopover>
        <h3>{user?.name}</h3>
        <p>{user?.email}</p>
        <Divider style={{ margin: "10px" }} />
        <Button type="link" block>
          Account
        </Button>
        <Button onClick={logout} type="link" block>
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
          {!isUserLoggedIn && location.pathname !== "/login" && location.pathname !== "/signup" && (
            <Button onClick={handleLoginSignUpClick} type="primary" icon={<LoginOutlined />}>
              Login / Sign up
            </Button>
          )}

          {/* If the user is logged in */}
          {isUserLoggedIn && (
            <Popover
              content={userPopoverContent}
              trigger="click"
              visible={isUserPopoverVisible}
              onVisibleChange={handleUserPopoverVisibleChange}
            >
              <Button type="primary" icon={<SmileOutlined />}>
                {user?.name}
              </Button>
            </Popover>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
