import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Select } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  AccountBookOutlined,
  ManOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import {
  StyledInput,
  StyledSelect,
  StyledErrorMsg,
} from "./AddPatientForm.Styles";

interface AddPatientFormInterface {
  name: string;
  email: string;
  age: number;
  gender: string;
  phone: string;
  country: string;
}

const AddPatientForm: FC = () => {
  // configure React Hook Form
  // Custom Configuration
  const telRegex: RegExp =
    /^(0111|0114|0112|0155|0101|0109|0106|0100|0120|0128|0127|0122)\d{7}$/;
  const emailRegexp: RegExp =
    /^[A-Za-z0-9]{3,}@[A-Za-z0-9]{3,}\.[A-Za-z0-9]{3,}$/;

  // Yup schema to validate inputs values
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .matches(emailRegexp, "Please add a valid email"),
    age: yup
      .number()
      .positive()
      .integer("Age need to be an Integer")
      .required("Age is required")
      .min(1, "Age need to be more than 1"),
    gender: yup.string().required("Gender is required"),
    country: yup.string().required("Country is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(telRegex, "Please add a valid egyptian number"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AddPatientFormInterface) => {
    console.log(data);
  };
  return (
    <>
      <h1>Add New Patient</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* name input  */}
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <StyledInput
              {...field}
              placeholder="Name"
              prefix={<UserOutlined />}
            />
          )}
        />
        <StyledErrorMsg>{errors?.name && errors.name.message}</StyledErrorMsg>
        {/* email input  */}
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <StyledInput
              {...field}
              placeholder="Email"
              prefix={<MailOutlined />}
            />
          )}
        />
        <StyledErrorMsg>{errors?.email && errors.email.message}</StyledErrorMsg>
        {/* age input  */}
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <StyledInput
              {...field}
              type="number"
              placeholder="Age"
              prefix={<AccountBookOutlined />}
            />
          )}
        />
        <StyledErrorMsg>{errors?.age && errors.age.message}</StyledErrorMsg>
        {/* gender input  */}
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <StyledSelect {...field} placeholder="Gender">
              <Select.Option value="male">
                <ManOutlined /> Male
              </Select.Option>
              <Select.Option value="female">
                <WomanOutlined />
                Female
              </Select.Option>
            </StyledSelect>
          )}
        />
        <StyledErrorMsg>
          {errors?.gender && errors.gender.message}
        </StyledErrorMsg>
        {/* phone input  */}
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <StyledInput
              {...field}
              placeholder="Phone"
              prefix={<PhoneOutlined />}
            />
          )}
        />
        <StyledErrorMsg>{errors?.phone && errors.phone.message}</StyledErrorMsg>
        {/* country input  */}
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <StyledInput
              {...field}
              placeholder="Country"
              prefix={<GlobalOutlined />}
            />
          )}
        />
        <StyledErrorMsg>
          {errors?.country && errors.country.message}
        </StyledErrorMsg>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddPatientForm;
