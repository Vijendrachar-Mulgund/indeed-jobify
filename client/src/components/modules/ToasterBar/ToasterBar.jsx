import { Toaster } from "react-hot-toast";

const ToasterBar = () => {
  return (
    <div>
      <Toaster
        position="botton-center"
        toastOptions={{
          duration: 5000,
        }}
      />
    </div>
  );
};

export default ToasterBar;
