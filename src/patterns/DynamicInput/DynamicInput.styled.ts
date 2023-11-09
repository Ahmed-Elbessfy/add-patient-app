import styled from "styled-components";
import { Input, Select, Radio, Checkbox, Switch, Slider, Rate } from "antd";
const { TextArea } = Input;

export const StyledLabel = styled.label`
  font-size: 1.4rem;
  margin-right: 0.5rem;
  display: block;
`;

export const StyledDynamicTextInput = styled(Input)`
  font-size: 1.1rem;
  padding: 0.3rem 0.7rem;
  max-width: 30rem;
  margin: auto;
`;

export const StyledDynamicNumberInput = styled(Input)`
  font-size: 1.1rem;
  padding: 0.3rem 0.7rem;
  width: 100%;
  max-width: 30rem;
  margin: auto;
`;

export const StyledDynamicTextArea = styled(TextArea)`
  font-size: 1.1rem;
  padding: 0.3rem 0.7rem;
  max-width: 30rem;
  margin: auto;
`;

export const StyledDynamicSelectInput = styled(Select)`
  font-size: 1.1rem;
  width: 100%;
  max-width: 30rem;
  margin: auto;
`;

export const StyledDynamicCheckboxInput = styled(Checkbox.Group)`
  & label {
    color: white;
  }
`;

export const StyledDynamicRadioInput = styled(Radio.Group)`
  & label {
    color: white;
  }
`;

export const StyledDynamicSwitchInput = styled(Switch)`
  background-color: rgba(255, 255, 255, 0.5);
`;

export const StyledDynamicSliderInput = styled(Slider)`
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
`;

export const StyledDynamicRateInput = styled(Rate)`
  .ant-rate-star.ant-rate-star-zero .ant-rate-star-first,
  .ant-rate-star.ant-rate-star-zero .ant-rate-star-second {
    color: white;
  }
`;

export const StyledErrorMsg = styled.p`
  height: 1.2rem;
  color: red;
  font-size: 0.9rem;
  margin: 0.5rem;
`;
