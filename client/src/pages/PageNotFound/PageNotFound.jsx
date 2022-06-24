import { useNavigate } from "react-router-dom";
import Button from "../../components/modules/Button/Button";

import { PageNotFoundWrapper } from "../../styles/PageNotFound/PageNotFoundWrapper";

import PageNotFoundImage from "./../../assets/Images/page_not_found.svg";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <PageNotFoundWrapper>
      <div>
        <img src={PageNotFoundImage} />
        <p>This page is not availble.</p>

        <Button onClickHandler={() => navigate("/")} label="Go Home" />
      </div>
    </PageNotFoundWrapper>
  );
};

export default PageNotFound;
