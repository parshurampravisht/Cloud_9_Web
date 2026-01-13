// EditUserForm.jsx or .tsx

import { emailRegex } from "../constant";
import * as Yup from "yup";
// import { differenceInYears } from 'date-fns';

// ✅ 1. Define validation schema at the top
export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required(" Name is required")
    .matches(/^[A-Za-z ]+$/, "Only alphabets are allowed"),

  // lastName: Yup.string()
  //     .matches(/^[A-Za-z\s]*$/, "Last name should contain only letters")
  //     .nullable(),

  role: Yup.string().required("Role is required"),

  // email: Yup.string()
  //     .matches(emailRegex, 'Invalid email')
  //     // .email('Invalid email')
  //     .required('Email is required'),

  email: Yup.string()
    .matches(emailRegex, "Invalid email")
    .required("Email is required"),
});
