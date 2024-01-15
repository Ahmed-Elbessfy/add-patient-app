import { FC } from "react";
import { StyledError } from "./ErrorMsg.styled";
import { FieldError } from "react-hook-form";
import { useTranslation } from "react-i18next";

type ErrorMsg = {
  error: FieldError | undefined;
};
const ErrorMsg: FC<ErrorMsg> = ({ error }) => {
  const { t } = useTranslation("translation");

  return (
    <StyledError>{error && error.message && t(error.message)}</StyledError>
  );
};

export default ErrorMsg;
