import styled from "styled-components";

export const StyledLoginWrapper = styled.div<{
  linearGradientImagePath: string;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #121212;
  overflow: hidden;
  border-radius: 10px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70%;

    background: linear-gradient(
        187.72deg,
        rgba(18, 18, 18, 0) 29.97%,
        #162d2e 57.32%,
        #1a4d50 76.77%,
        #00ff7d 109.49%
      ),
      linear-gradient(176.49deg, rgba(0, 0, 0, 0) 16.59%, #0066ff 86.95%);

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

// background-image: url(${({ linearGradientImagePath }) =>
//   linearGradientImagePath});
