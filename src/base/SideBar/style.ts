import styled from "styled-components";

export const SideBarContainer = styled.div`
  height: 100%;
  flex-grow: 1;
  overflow-y: auto;
  padding: 8px 20px;
  background: transparent;
  .MuiTreeItem-label {
    color: #ffffff !important;
    cursor: pointer;
  }
  .active-nav {
    background-color: #0064ff !important;
    padding: 8px 15px;
    border: 0;
    width: 100%;
    border-radius: 10px !important;
    color: #fff !important;
  }
  .inactive-nav {
    color: #9C9C9C;
    padding-left: 15px;
    background-color: transparent !important;
  }
  .active-icon {
    width: 6px;
    height: 26px;
    top: 6px;
    border-radius: 4px;
    margin-left: -12px;
  }
`;
