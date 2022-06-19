import styled from "styled-components";

const LandingPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: calc(100vh - var(--header-height));
  width: 80vw;

  margin: 0 auto;

  .left-side {
    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.25rem;
      width: 75%;
      font-weight: 300;
      margin: 2rem 0;
    }
  }

  .right-side {
    img {
      width: 100%;
    }
  }
`;

export { LandingPageContainer };
