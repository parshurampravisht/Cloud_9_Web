// EditUserForm.jsx or .tsx

import { emailRegex } from "../constant";
import * as Yup from "yup";
// import { differenceInYears } from 'date-fns';

//  1. Define validation schema at the top
export const AssessmentFormSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .notOneOf(["Select"], "Title is required"),
  firstName: Yup.string()
    .required("First Name is required")
    .matches(/^[A-Za-z ]+$/, "Only alphabets are allowed"),
  serviceUserName: Yup.string()
    .required("service user is required")
    .matches(/^[A-Za-z ]+$/, "Only alphabets are allowed"),
  whoNeedsSupport: Yup.string()
    .required("Support is required")
    .notOneOf(["Select"], "Support is required"),
  relationshipToServiceUser: Yup.string()
    .required("User relationship is required")
    .notOneOf(["Select"], "User relationship is required"),
  line1: Yup.string().required("Address is required"),
  city: Yup.string().required("city is required"),
  postcode: Yup.string().required("Post code is required"),
  mobileNumber: Yup.string()
    .required("Mobile number is required")
    .matches(/^\+?[0-9]{10,14}$/, "Enter a valid mobile number"),
  email: Yup.string()
    .matches(emailRegex, "Invalid email")
    .required("Email required"),
  consent: Yup.string().required("Consent is required"),
  //   typeOfAttorney:Yup.string().required("Power of Attorney is required"),
  //   PowerOFAttorney:Yup.string().required("Attorney in place is required"),
});

export const PowerOfAttorneySchema = Yup.object().shape({
  typeOfAttorney: Yup.string().required("Power of Attorney is required"),
  PowerOFAttorney: Yup.string().required("Attorney in place is required"),
  attorneyHolder: Yup.string().required(" Attorney holder is required"),
  documents: Yup.string().required(" Document is required"),
});
