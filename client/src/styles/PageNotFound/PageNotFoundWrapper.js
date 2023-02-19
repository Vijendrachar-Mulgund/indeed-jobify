import styled from "styled-components";

export const PageNotFoundWrapper = styled.div`
  height: calc(100vh - var(--header-height));

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  .image-container {
    height: 100px;
    width: auto;
  }

  p {
    margin: 2rem 0;
  }
`;
