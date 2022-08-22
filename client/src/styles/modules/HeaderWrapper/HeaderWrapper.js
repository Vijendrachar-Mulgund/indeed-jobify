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

  box-shadow: var(--box-shadow);

  .logo-container img {
    height: 1.25rem;
    vertical-align: middle;
  }
`;

const UserPopover = styled.div`
  text-align: center;

  h3 {
    margin: 0;
  }

  p {
    color: var(--secondary-color);
  }
`;

const Divider = styled.hr`
  border-top: 1px solid var(--magic-mint);
`;

export { HeaderWrapper, UserPopover, Divider };
