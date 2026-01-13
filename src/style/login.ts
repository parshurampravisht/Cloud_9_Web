import styled from "styled-components";

export const StyledLoginWrapper = styled.div<{
  linearGradientImagePath: string;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #121212;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80%;

    background-image: url(${({ linearGradientImagePath }) =>
      linearGradientImagePath});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;

    pointer-events: none;
    z-index: 0;
  }
  .login-form {
    row-gap: 25px;
  }
  .login-form .MuiGrid-container {
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  .remember-me-wrapper .MuiFormControlLabel-label {
    font-size: 12px;
    font-weight: 600;
  }
  .submit-button {
    border: 0;
    outline: none;
  }
`;

// background: linear-gradient(209.72deg, rgba(18, 18, 18, 0) 38.97%, #162D2E 52.32%, #1A4D50 67.77%, #00FF7D 84.49%),
// linear-gradient(150.49deg, rgba(0, 0, 0, 0) 17.59%, #0066FF 101.95%);
