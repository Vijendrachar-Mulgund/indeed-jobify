import toast, { Toaster } from "react-hot-toast";

export const showToastMessage = (message, type, icon = null, duration = 5000, position = "botton-center") => {
  const options = { duration, position };

  if (icon) options.icon = icon;

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    default:
      toast(message, options);
  }
};

const ToasterBar = () => {
  return (
    <div>
      <Toaster />
    </div>
  );
};

export default ToasterBar;
