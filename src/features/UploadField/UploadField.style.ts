import { Button } from "antd";
import styled from "styled-components";

export const StyledImageContainer = styled.div`
  position: relative;
  margin-top: 10px;
  width: 150px;
  height: 150px;
  border-radius: 100%;

  .ant-image-mask {
    border-radius: 50%;
  }
`;

export const StyledDeleteFileBtn = styled(Button)`
  position: absolute;
  right: 15px;
  top: 0px;
`;
