import * as Yup from "yup";
import { emailRegex } from "../constant";

export const step1ClubValidationSchema = Yup.object({
    clubName: Yup.string().required("Club name is required"),
    clubCategory: Yup.string().required("Category is required"),
    clubStatus: Yup.string().required("Status is required"),

    postCode: Yup.string().required("Post code is required"),
    clubAddress: Yup.string().required("Address is required"),
    streetName: Yup.string().required("Street name is required"),
    postTown: Yup.string().required("Post town is required"),
    country: Yup.string().required("Country is required"),

    latitude: Yup.number()
        .typeError("Latitude must be a number")
        .required("Latitude is required"),
    longitude: Yup.number()
        .typeError("Longitude must be a number")
        .required("Longitude is required"),
    radius: Yup.number()
        .typeError("Radius must be a number")
        .positive("Radius must be positive")
        .required("Radius is required"),

    mobileNumber: Yup.string()
        .matches(/^[0-9]{8,15}$/, "Invalid mobile number")
        .required("Mobile number is required"),

    email: Yup.string()
        .matches(emailRegex, "Invalid email")
        .required("Email is required"),
});
