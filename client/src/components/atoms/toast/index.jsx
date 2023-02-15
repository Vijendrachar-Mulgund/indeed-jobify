import React from "react";
import { Toaster } from "react-hot-toast";

const toastOptions = {
  duration: 8000,
  style: {
    background: "var(--white-color)",
    boxShadow: "var(--box-shadow)",
    border: "none",
  },
};

const Toast = () => {
  return <Toaster toastOptions={toastOptions} />;
};

export default Toast;
