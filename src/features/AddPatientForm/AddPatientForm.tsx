import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
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
import { schema, AddPatientFormInterface } from "./AddPatientForm.constants";
import { ADD_PATIENT } from "./AddPatientForm.gql";
import {
  StyledInput,
  StyledSelect,
  StyledErrorMsg,
} from "./AddPatientForm.styled";

const AddPatientForm: FC = () => {
  // configure React Hook Form
  // Custom Configuration

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { t } = useTranslation("translation");
  // submitting data to server
  const [createPatient] = useMutation(ADD_PATIENT, { variables: { data: {} } });
  const onSubmit = (data: AddPatientFormInterface) => {
    createPatient({
      variables: { key: Math.floor(Math.random() * 10000), ...data },
    });

    // reset form fieAddPatientFormlds
    reset();
  };
  return (
    <>
      <h1>{t("formHeader")}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* name input  */}
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <StyledInput
              {...field}
              title="name"
              placeholder={t("formInputs.nameInput.text")}
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
              title="email"
              {...field}
              placeholder={t("formInputs.emailInput.text")}
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
              title="age"
              type="number"
              placeholder={t("formInputs.ageInput.text")}
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
            <StyledSelect
              title="gender"
              {...field}
              placeholder={t("formInputs.genderInput.text")}
            >
              <Select.Option value="male">
                <ManOutlined /> {t("formInputs.genderInput.options.male")}
              </Select.Option>
              <Select.Option value="female">
                <WomanOutlined />
                {t("formInputs.genderInput.options.female")}
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
              title="phone"
              {...field}
              placeholder={t("formInputs.phoneInput.text")}
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
              title="country"
              placeholder={t("formInputs.countryInput.text")}
              prefix={<GlobalOutlined />}
            />
          )}
        />
        <StyledErrorMsg>
          {errors?.country && errors.country.message}
        </StyledErrorMsg>

        <Button type="primary" htmlType="submit" data-testid="submitBtn">
          {t("formSubmitBtn")}
        </Button>
      </form>
    </>
  );
};

export default AddPatientForm;
