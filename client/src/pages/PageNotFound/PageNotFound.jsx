import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { PageNotFoundWrapper } from "../../styles/PageNotFound/PageNotFoundWrapper";

import PageNotFoundImage from "./../../assets/Images/page-not-found.svg";

const PageNotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <PageNotFoundWrapper>
      <div>
        <img src={PageNotFoundImage} alt="page-not-found" />
        <p>This page is not availble.</p>
        <Button onClick={goHome} icon={<HomeOutlined />}>
          Go home
        </Button>
      </div>
    </PageNotFoundWrapper>
  );
};

export default PageNotFound;
