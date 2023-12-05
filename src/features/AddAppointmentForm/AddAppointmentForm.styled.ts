import styled from "styled-components";
import { Typography } from "antd";
const { Title } = Typography;

export const StyledError = styled.p`
  height: 1.2rem;
  color: red;
  font-size: 0.9rem;
  margin: 0.5rem;
`;

export const StyledTitle = styled(Title)`
  color: rgb(0, 119, 185) !important;
  position: relative;

  & strong {
    position: relative;
    z-index: 2;
    padding: 1rem;
    background: #f0f4f9;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 50%;
    height: 2px;
    background: rgba(0, 0, 0, 0.05);
  }
  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 50%;
    height: 1px;
    background: rgba(0, 0, 0, 0.09);
  }
`;
