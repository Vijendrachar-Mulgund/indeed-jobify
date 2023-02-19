import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Form, Input, Button, Divider } from "antd";

import { LoginWrapper } from "./styles";
import { getGoogleOAuthURI } from "../../../oauth/google/google-oauth";
import { userLogin } from "../../../redux/slices/userSlice";
import { IndeedLogo, GoogleLogo } from "../../../assets";

const Login = () => {
  /**
   * Declarations
   */
  const navigator = useNavigate();
  const dispatch = useDispatch();

  /**
   * Component state
   */
  const [loginData, setLoginData] = useState({});

  /**
   * Redux Selectors
   */
  const user = useSelector((state) => state.user);

  /**
   * UseEffects
   */

  // Mounted
  useEffect(() => {
    const deviceInfo = { device: JSON.parse(localStorage.getItem("deviceInfo")) };
    setLoginData(deviceInfo);
  }, []);

  useEffect(() => {
    if (user?._id) {
      navigator("/");
    }
  }, [user]);

  /**
   * Methods and Handlers
   */
  const handleLoginSubmit = () => {
    dispatch(userLogin(loginData));
  };

  const handleUserInput = (type, event) => {
    switch (type) {
      case "email":
        setLoginData((prevState) => {
          return { ...prevState, email: event.target.value };
        });
        break;

      case "password":
        setLoginData((prevState) => {
          return { ...prevState, password: event.target.value };
        });
        break;

      default:
        setLoginData((prevState) => {
          return { ...prevState };
        });
    }
  };

  const handleGoogleLogin = () => {
    const googleRedirectUrl = getGoogleOAuthURI();
    window.open(googleRedirectUrl, "_self");
  };

  return (
    <LoginWrapper>
      <div className="login-box-container">
        <div className="login-logo-container">
          <IndeedLogo height="36" />
        </div>

        <p className="login-text">Please enter your credentials to login!</p>

        <Form name="basic" layout="vertical" onFinish={handleLoginSubmit}>
          {/* For Email or Username */}
          <Form.Item
            label="Email or Username"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
            hasFeedback
          >
            <Input onChange={(e) => handleUserInput("email", e)} />
          </Form.Item>

          {/* For password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password onChange={(e) => handleUserInput("password", e)} />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        {/* Sign up button */}
        <p className="signup-message" onClick={() => navigator("/signup")}>
          Don't have an account?<Button type="link">Sign up</Button>
        </p>

        <Divider>Or</Divider>

        {/* Social Logins (Google) */}
        <div className="login-social">
          <Button onClick={handleGoogleLogin} icon={<GoogleLogo height="24" width="24" />} block>
            Google
          </Button>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
