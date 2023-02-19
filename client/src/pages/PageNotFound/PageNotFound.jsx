import { useNavigate } from "react-router-dom";
// import { Button } from "antd";
// import { HomeOutlined } from "@ant-design/icons";
import { PageNotFoundWrapper } from "../../styles/PageNotFound/PageNotFoundWrapper";

import { PageNotFoundImage } from "./../../assets";

const PageNotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <PageNotFoundWrapper>
      <div>
        <PageNotFoundImage height="420" />
        <p>This page is not available.</p>
      </div>
    </PageNotFoundWrapper>
  );
};

export default PageNotFound;
