import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginWrapper } from "./../../styles/Login/LoginWrapper";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Divider } from "antd";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import { emailValidation, validatePassword } from "./../../utils/validationUtil";

import IndeedLogo from "./../../assets/logo-icons/Indeed_logo_full.svg";
import { userLogin } from "../../redux/slices/userSlice";

const Login = () => {
  const navigator = useNavigate();

  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({ device: JSON.parse(localStorage.getItem("deviceInfo")) });

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

  return (
    <LoginWrapper>
      <div className="login-box-container">
        <div className="login-logo-container">
          <img className="login-logo" src={IndeedLogo} alt="logo" />
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
              {
                validator: emailValidation,
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
              {
                validator: validatePassword,
              },
            ]}
            hasFeedback
          >
            <Input.Password onChange={(e) => handleUserInput("password", e)} />
          </Form.Item>

          {/* Submit button */}
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <p className="signup-message" onClick={() => navigator("/signup")}>
          Don't have an account?<Button type="link">Sign up</Button>
        </p>

        <Divider>Or</Divider>

        <div className="login-social">
          <Button icon={<GoogleOutlined />} block>
            Google
          </Button>
        </div>

        <div className="login-social">
          <Button icon={<FacebookFilled />} block>
            Facebook
          </Button>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
