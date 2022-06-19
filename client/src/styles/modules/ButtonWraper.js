import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  padding: 0.5rem 1rem;

  background: transparent;

  border-radius: 0.3rem;
  border: 2px solid var(--primary-color);
  cursor: pointer;

  transition: all 0.25s ease-out;
  color: var(--primary-color);

  &:hover {
    background: var(--primary-color);
    color: var(--white-color);
  }
`;

export { ButtonWrapper };
