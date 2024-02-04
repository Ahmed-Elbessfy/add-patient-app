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

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledNestedForm = styled.div`
  background: rgba(0, 99, 193, 0.03);
  box-shadow: rgba(0, 99, 193, 0.4) 0px 0px 6px;
  border-radius: 8px;

  // Center form Content
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0.5rem 0;
  margin-bottom: 2rem;
`;
