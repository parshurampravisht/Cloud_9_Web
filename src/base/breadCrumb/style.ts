import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
  .breadcrumb-wrapper {
    background-image: linear-gradient(
        175.72deg,
        rgba(18, 18, 18, 1),
        rgba(22, 45, 46, 1),
        rgba(26, 77, 80, 5),
        rgba(0, 255, 125, 1)
      ),
      linear-gradient(55.49deg, rgba(0, 0, 0, 0), rgba(0, 102, 255, 93));
    min-height: 100px;
    padding: 7px 14px;
    backdrop-filter: blur(16px);
  }
  .breadcrumb-wrapper .MuiStack-root {
    // display: flex;
    // flex-direction: row;
  }
`;
