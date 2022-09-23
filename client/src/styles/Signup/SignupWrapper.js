import styled from "styled-components";

const SignupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - var(--header-height));

  .login {
    &-logo {
      height: 2rem;
      margin: 1rem 0;
    }

    &-text {
      margin: 1.5rem 0;
      text-align: center;
    }

    &-logo-container {
      display: flex;
      justify-content: center;
    }

    &-box-container {
      min-width: 25vw;
      border-radius: 10px;
      padding: 2rem;

      box-shadow: var(--box-shadow);
    }

    &-social {
      margin: 1rem 0;
    }
  }

  .signup-message {
    text-align: center;
    margin: 1rem 0 0 0;
  }
`;

export { SignupWrapper };
