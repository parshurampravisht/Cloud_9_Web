import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  .header {
    background: #000000;
    padding-top: 0px !important;
    & img {
      margin: 0px;
    }
  }
  .content {
    margin: 15px;
    // margin: 10px;
    overflow-y: auto;
    height: 85vh;
  }
  .navbar-container .MuiGrid-item {
    // background: #131313;
    padding: 0px;
  }
  .avatar-wrapper {
    // background: linear-gradient(180deg, #0064ff 0%, #00ff7d 100%);
    box-shadow: 0px 8.64px 12.95px -2.59px #0000001a;
    border-radius: 50%;
  }
  .avatar-wrapper .MuiAvatar-root {
    height: 100%;
  }
  .avatar-wrapper .MuiAvatar-root img {
    width: 38px;
    height: 38px;
  }
`;
