import * as yup from "yup";

const telRegex: RegExp =
  /^(0111|0114|0112|0155|0101|0109|0106|0100|0120|0128|0127|0122)\d{7}$/;
const emailRegexp: RegExp =
  /^[A-Za-z0-9,-_.]{3,}@[A-Za-z0-9]{3,}\.[A-Za-z0-9]{3,}$/;

// Yup schema to validate inputs values
export const schema = yup.object().shape({
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
