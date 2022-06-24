import styled from "styled-components";

const PageNotFoundWrapper = styled.div`
  height: calc(100vh - var(--header-height));

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  img {
    height: 25vh;
    width: auto;
  }

  p {
    margin: 2rem 0;
  }
`;

export { PageNotFoundWrapper };
