import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: var(--header-height);

  .header-container {
    height: inherit;
    width: 90vw;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  -webkit-box-shadow: 0 4px 6px -3px var(--primary-color);
  -moz-box-shadow: 0 4px 6px -3px var(--primary-color);
  box-shadow: 0 4px 6px -3px var(--primary-color);

  .logo-container img {
    height: 1.25rem;
    vertical-align: middle;
  }
`;

export { HeaderWrapper };
