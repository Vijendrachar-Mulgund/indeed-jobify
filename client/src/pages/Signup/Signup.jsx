import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Form, Input, DatePicker } from "antd";
import { SignupWrapper } from "./../../styles/Signup/SignupWrapper";
import { emailValidation } from "./../../utils/validationUtil";

import IndeedLogo from "./../../assets/logo-icons/Indeed_logo_full.svg";
import { userSignUp } from "../../redux/slices/userSlice";

const Login = () => {
  const [signUpData, setSignUpData] = useState({
    device: JSON.parse(localStorage.getItem("deviceInfo")),
  });

  const navigator = useNavigate();

  const dispatch = useDispatch();

  const handleInput = (type, event) => {
    switch (type) {
      case "username":
        setSignUpData((prevState) => {
          return { ...prevState, name: event.target.value };
        });
        break;

      case "email":
        setSignUpData((prevState) => {
          return { ...prevState, email: event.target.value };
        });
        break;

      case "password":
        setSignUpData((prevState) => {
          return { ...prevState, password: event.target.value };
        });
        break;

      case "confirmPassword":
        setSignUpData((prevState) => {
          return { ...prevState, confirmPassword: event.target.value };
        });
        break;

      default:
        setSignUpData((prevState) => {
          return { ...prevState };
        });
        break;
    }
  };

  const handleDateOfBirth = (date, dateString) => {
    setSignUpData((prevData) => {
      return { ...prevData, dateOfBirth: dateString };
    });
  };

  const handleSignUpSubmit = () => {
    console.log("The final Payload -> ", signUpData);
    dispatch(userSignUp(signUpData));
  };

  return (
    <SignupWrapper>
      <div className="login-box-container">
        <div className="login-logo-container">
          <img className="login-logo" src={IndeedLogo} alt="logo" />
        </div>

        <p className="login-text">Create a new account!</p>

        <Form name="basic" layout="vertical" onFinish={handleSignUpSubmit}>
          {/* Username */}
          <Form.Item
            label="Name"
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter your name!",
              },
            ]}
          >
            <Input onChange={(e) => handleInput("username", e)} />
          </Form.Item>

          {/* For Email address */}
          <Form.Item
            label="Email"
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
            <Input onChange={(e) => handleInput("email", e)} />
          </Form.Item>

          {/* For Date of birth */}
          <Form.Item
            label="Date of birth"
            name="dob"
            rules={[
              {
                required: true,
                message: "Please enter your date of birth!",
              },
            ]}
          >
            <DatePicker
              onChange={handleDateOfBirth}
              style={{
                width: "100%",
              }}
            />
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
            <Input.Password onChange={(e) => handleInput("password", e)} />
          </Form.Item>

          {/* For password confirmation */}
          <Form.Item
            label="Password Confirm"
            name="password-confirm"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please re-type your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (value && getFieldValue("password") === value) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject("The passwords do not match");
                  }
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password onChange={(e) => handleInput("confirmPassword", e)} />
          </Form.Item>

          {/* Submit button */}
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <p className="signup-message" onClick={() => navigator("/login")}>
          Already have an account?<Button type="link">Login</Button>
        </p>
      </div>
    </SignupWrapper>
  );
};

export default Login;
