import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: transparent;

  border-radius: 0.3rem;
  border: 2px solid var(--primary-color);
  cursor: pointer;

  transition: all 0.25s ease-out;
  color: var(--primary-color);

  .icon-container {
    display: flex;
    align-items: center;
    margin: 0 0.5rem 0 0;
  }

  &:hover {
    background: var(--primary-color);
    color: var(--white-color);
  }
`;

export { ButtonWrapper };
