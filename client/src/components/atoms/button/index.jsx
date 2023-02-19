import React from "react";
import BootstrapButton from "react-bootstrap/Button";

const Button = ({ label, ...props }) => {
  return <BootstrapButton {...props}>{label}</BootstrapButton>;
};

export default Button;
