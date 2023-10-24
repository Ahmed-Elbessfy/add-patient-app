import styled from "styled-components";
import { Input, Select, Checkbox } from "antd";


export const StyledLabel = styled.label`
  font-size: 1.4rem;
  margin-right: .5rem
  `

export const StyledDynamicFormInput = styled(Input)`
font-size: 1.1rem;
padding: .3rem .7rem;
max-width: 30rem;
margin:auto;
`

export const StyledDynamicSelectInput = styled(Select)`
font-size: 1.1rem;
width: 100%;
max-width: 30rem;
margin:auto;
`

export const StyledDynamicCheckboxInput = styled(Checkbox.Group)`
& label{
  color:white;
}
`

export const StyledErrorMsg = styled.p`
height: 1.2rem;
color: red;
font-size: .9rem;
margin: 0.5rem;
`
