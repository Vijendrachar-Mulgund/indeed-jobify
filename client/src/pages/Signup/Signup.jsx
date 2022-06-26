import { SignupWrapper } from "./../../styles/Signup/SignupWrapper";

import { Button, Form, Input, DatePicker } from "antd";

import IndeedLogo from "./../../assets/logo-icons/Indeed_logo_full.svg";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState({ name: "", isValid: true, message: "" });
  const [userEmail, setUserEmail] = useState({ email: "", isValid: true, message: "" });

  const onDateChange = () => {};

  const handleUsernameInput = (event) => {
    if (event?.target?.value?.length >= 5) {
      setUserName({ name: event?.target?.value, isValid: true, message: "" });
    } else {
      setUserName({
        name: event?.target?.value,
        isValid: false,
        message: "The user name should be atleast 5 charaters",
      });
    }
  };

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
            validateStatus={!userName?.isValid ? "warning" : "success"}
            help={userName.message}
            rules={[
              {
                required: true,
                message: "Please enter your name!",
              },
            ]}
          >
            <Input onChange={handleUsernameInput} />
          </Form.Item>

          {/* For Email address */}
          <Form.Item
            label="Email"
            name="email"
            validateStatus={!userEmail?.isValid ? "warning" : "success"}
            help={userEmail?.message}
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
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
              onChange={onDateChange}
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
