// EditUserForm.jsx or .tsx

import { emailRegex } from '../constant';
import * as Yup from 'yup';
// import { differenceInYears } from 'date-fns';

// ✅ 1. Define validation schema at the top
export const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required')
        .matches(/^[A-Za-z ]+$/, 'Only alphabets are allowed'),

    lastName: Yup.string()
        .matches(/^[A-Za-z\s]*$/, "Last name should contain only letters")
        .nullable(),

    dob: Yup.date()
        .required('Date of Birth is required'),
    // .test('age', 'You must be at least 18 years old', (value) =>
    //     differenceInYears(new Date(), new Date(value)) >= 18
    // ),

    gender: Yup.string().required('Gender is required'),

    email: Yup.string()
        .matches(emailRegex, 'Invalid email')
        // .email('Invalid email')
        .required('Email is required'),

    address: Yup.string()
        .required('Address is required')
        .min(10, 'Address is too short'),
});
