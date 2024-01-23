import styled from "styled-components";
import { Typography } from "antd";
const { Title } = Typography;

export const StyledTitle = styled(Title)`
  color: rgb(0, 119, 185) !important;

  & strong {
    position: relative;
    z-index: 2;
    padding: 1rem;
    background: #f0f4f9;
  }
`;

export const StyledDividerText = styled.strong`
  color: rgb(0, 119, 185);
  font-size: 1.2rem;
`;
