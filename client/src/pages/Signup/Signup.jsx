import { SignupWrapper } from "./../../styles/Signup/SignupWrapper";
import { Button, Form, Input, DatePicker } from "antd";
import { useState } from "react";
import { validateEmail } from "./../../utils/validationUtil";
import IndeedLogo from "./../../assets/logo-icons/Indeed_logo_full.svg";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleUsernameInput = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailInput = (event) => {
    if (validateEmail(event?.target?.value)) {
      setUserEmail({ email: event?.target?.value, isValid: true, message: "" });
    } else {
      setUserEmail({ email: event?.target?.value, isValid: false, message: "Please enter a valid E-mail address!" });
    }
  };

  const handleDobInput = () => {};

  return (
    <SignupWrapper>
      <div className="login-box-container">
        <div className="login-logo-container">
          <img className="login-logo" src={IndeedLogo} alt="logo" />
        </div>

        <p className="login-text">Create a new account!</p>

        <Form name="basic" layout="vertical">
          {/* Username */}
          <Form.Item
            label="Name"
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter your name!",
              },
              {
                validator: async ({}, name) => {
                  if (name && name?.length < 5) {
                    return Promise.reject("At least 2 passengers");
                  }
                  return Promise.resolve();
                },
                message: "Minimum 10 Didits!",
              },
            ]}
            hasFeedback
          >
            <Input onChange={handleUsernameInput} />
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
            ]}
          >
            <Input onChange={handleEmailInput} />
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
              onChange={handleDobInput}
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
          >
            <Input.Password />
          </Form.Item>

          {/* For password confirmation */}
          <Form.Item
            label="Password Confirm"
            name="password-confirm"
            rules={[
              {
                required: true,
                message: "Please re-type your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* Submit button */}
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <p className="signup-message">
          Already have an account?<Button type="link">Login</Button>
        </p>
      </div>
    </SignupWrapper>
  );
};

export default Login;
