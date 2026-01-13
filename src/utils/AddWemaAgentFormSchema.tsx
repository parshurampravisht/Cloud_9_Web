// EditUserForm.jsx or .tsx

import { emailRegex } from '../constant';
import * as Yup from 'yup';
// import { differenceInYears } from 'date-fns';

//  1. Define validation schema at the top
export const AddwemaAgentFormSchema = Yup.object().shape({
    // user details schema
    firstName: Yup.string()
        .required('First Name is required')
        .min(3, 'First Name Must be 3 digits')
        .matches(/^[A-Za-z ]+$/, 'Only alphabets are allowed'),

    lastName: Yup.string()
        .required('Last Name is required')
        .matches(/^[A-Za-z ]+$/, 'Only alphabets are allowed'),

    profileLogo: Yup.mixed()
        .required('Profile logo is required'),

    dob: Yup.date()
        .required('Date of Birth is required'),

    // Employee information schema
    // address: Yup.string()
    //     .required('Address is required')
    //     .min(10, 'Address is too short'),

    city: Yup.string()
        .required('City is required')
        .notOneOf(['Select'], 'City must be selected'),

    postcode: Yup.string()
        .required('Postcode is required')
        .matches(/^[0-9]{4,8}$/, 'Must be 4–8 digits'),

    employmentDate: Yup.date()
        .required('Employment date is required'),

    EmployeeId: Yup.string()
        .required('Employee ID is required'),

    // Department: Yup.string()
    //     .required('Department is required'),

    // Contact information schema
    phoneNumberPrefix: Yup.string()
        .required('Phone number prefix is required'),

    emergencyNumberPrefix: Yup.string()
        .required('Emergency number prefix is required'),

    phoneNumber: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{7,15}$/, 'Must be 7–15 digits'),

    emergencyNumber: Yup.string()
        .required('Emergency number is required')
        .matches(/^[0-9]{7,15}$/, 'Must be 7–15 digits'),

    gender: Yup.string()
        .required('Gender is required'),

    emailId: Yup.string()
        .matches(emailRegex, 'Invalid email')
        .required('Email id is required'),

    loginName: Yup.string()
        .required("Login name is required"),

    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),

    confirmPassword: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match'),

    role: Yup.string()
        .required('Role is required'),
});
