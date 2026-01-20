import {
    TextField,
    Typography,
    Grid,
    Button,
    useTheme,
    Switch,
    FormControlLabel,
    Stack,
} from "@mui/material";
import { useState, useCallback } from "react";
// import { StyledLoginWrapper } from "./style";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import CustomModel from "../common/CustomModel";
// import { useAppDispatch } from "../../hook/hook";
// import { isValidEmail } from "../../constant";
// import { saveLoginDetails, addUpdate } from "../../redux/slices/global/action";
import { Form, Formik } from "formik";
import { useAppDispatch } from "../../hook/hook";
import { loginFormValidationSchema } from "../../utils/loginFormSchema";
import "./style.ts"
import { StyledLoginWrapper } from "./style.ts";
import { pageNavigatePathRoutes } from "../../constant/index.ts";

function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [password, setPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isActiveModel, setIsActiveModel] = useState(1);
    const [formValues, setFormValues] = useState<Record<string, string>>({});
    // const [errorMsg, setErrorMsg] = useState<string>(``);
    // const [otp, setOtp] = useState(Array(6).fill(""));
    // const [token, setToken] = useState<any>('');

    const handleOpen = useCallback((type: number) => {
        setIsActiveModel(type)
    }, [isActiveModel]);

    const handleChange = useCallback((e: any) => {
        const { name, value } = e.target;

        setFormValues((prev) => ({ ...prev, [name]: value }));
    }, [formValues]);

    const handleSubmit = useCallback(async (num: number) => {
        //     // Step 1: Email validation
        //     if (num === 2) {   // --- num 2 for email
        //         if (!formValues.email) {
        //             setErrorMsg("Please fill in the email.");
        //             return;
        //         }
        //         if (!isValidEmail(formValues.email)) {
        //             setErrorMsg("Please enter a valid email address.");
        //             return;
        //         }
        //         const res: any = await dispatch(addUpdate('forgot_password', { email: formValues.email }, 'add', "notRequired"))
        //         if (res.data) {
        //             // console.log(res);
        //             setErrorMsg("");
        //             setIsActiveModel(3)
        //             setToken(res.data.token);  // Store the token for OTP verification
        //         }
        //     }

        //     if (num === 3) {  //// --- num 3 for otp
        //         // Validate OTP (num === 3 is for OTP step, adjust if needed)
        //         const isOtpValid = Array.isArray(otp) && otp.length === 6 && otp.every((digit) => digit.trim() !== "");

        //         if (!isOtpValid) {
        //             setErrorMsg("Please enter a valid 6-digit OTP.");
        //             return;
        //         }
        //         const finalOtp: any = otp.join()
        //         const res: any = await dispatch(addUpdate('verify_forget_password_otp', { email: formValues.email, otp: finalOtp.replaceAll(',', ''), token }, 'add', "notRequired"))
        //         if (res.data) {
        //             setErrorMsg("");
        //             setIsActiveModel(4)
        //             setToken(res.data.resetToken);  // Store the token for OTP verification
        //         }

        //     }
        //     // Step 3: OTP validation
        //     if (num === 4) {  /// num =4 for password
        //         const { password, confirm } = formValues;
        //         if (!password || !confirm) {
        //             setErrorMsg("Please fill in both password and confirm password.");
        //             return;
        //         }
        //         if (password !== confirm) {
        //             setErrorMsg("Passwords do not match.");
        //             return;
        //         }
        //         if (password.length < 8) {
        //             setErrorMsg("Password must be at least 8 characters long.");
        //             return;
        //         }
        //         const res: any = await dispatch(addUpdate('reset_password', { email: formValues.email, newPassword: password }, 'add', "notRequired", '', {
        //             resetToken: token
        //         }))
        //         if (res.data) {
        //             setErrorMsg("");
        //             setIsActiveModel(5);
        //         }
        //     }
    }, []);


    const navigateHandler = (category: string) => {
        navigate(category)
    }


    const submitHandler = async (values: any) => {

        console.log("values", values)
        navigateHandler(pageNavigatePathRoutes.dashboard);

        //     try {
        //         const res: any =
        //             await dispatch(saveLoginDetails({ source: "web_app", email: values.email, password: values.password }))
        //         if (res?.authId && res?.jwt && res?.role) {
        //             localStorage.setItem('authId', res.authId);
        //             localStorage.setItem('jwt', res.jwt);
        //             localStorage.setItem('role', res.role);
        //             if (rememberMe) {
        //                 localStorage.setItem('loginEmail', values.email);
        //                 localStorage.setItem('loginPassword', values.password);
        //             } else {
        //                 localStorage.removeItem("loginEmail");
        //                 localStorage.removeItem("loginPassword");
        //             }
        //             navigate('/');
        //         } else {
        //             // dispatch(setAlert({
        //             //   open: true,
        //             //   message: `User not found. Please check your email or phone number.`,
        //             // }))
        //         }
        //     } catch (error) {
        //         console.log("error in login", error)
        //         // toast.error('User not found. Please check your email & password.');
        //     }
    }

    // const cacheEmail = localStorage.getItem("loginEmail");
    // const cachePassword = localStorage.getItem("loginPassword");

    // useEffect(() => {
    //     if (cacheEmail && cachePassword) {
    //         setRememberMe(true);
    //         setFormData({ email: cacheEmail, password: cachePassword });
    //     }
    // }, [cacheEmail, cachePassword]);

    const rememberMeHandler = (e: any) => {
        setRememberMe(e.target.checked)
    }

    return (
        <StyledLoginWrapper
            linearGradientImagePath="/images/bg-linear-gradient.png"
            className="flex-row align-center justify-center height-100vh">
            <div className="flex-row align-center justify-center width-100 height-100">
                <div className="flex-row align-center justify-center width-100 height-100 z-index-99">
                    <Formik
                        initialValues={formData}
                        enableReinitialize={true}
                        validationSchema={loginFormValidationSchema}
                        onSubmit={submitHandler}
                    >
                        {({ values, handleChange, handleSubmit, touched, errors }) => {
                            return (
                                <Form className="login-form flex-col" onSubmit={handleSubmit}>
                                    <Stack direction={"column"} className="flex-col align-center justify-center width-100 row-gap-10">
                                        <Typography variant="h4" className="font-medim-14 text-white-color text-align-left">Welcome to Cloud 9</Typography>
                                        <Typography variant="caption" className="font-medium-14 text-white-color text-align-center">Stay Connected by signing in with your email and password to <br /> access your account.</Typography>
                                    </Stack>

                                    <Grid container spacing={1}>
                                        <Typography variant="caption" className="font-medium-14 text-white-color text-align-left">Email address*</Typography>
                                        <Grid item xs={12} style={{ height: "47px", marginBottom: "10px", padding: "8px 0 0 0" }}>
                                            <TextField
                                                className="username"
                                                variant="outlined"
                                                size="small"
                                                value={values.email}
                                                sx={{
                                                    height: "100%",
                                                    "& input::placeholder": {
                                                        color: "#5E616A",
                                                        opacity: 1,
                                                    },
                                                }}
                                                fullWidth
                                                placeholder="Enter your email"
                                                onChange={handleChange}
                                                name="email"
                                                // onChange={(e) =>
                                                //   setFormData({ ...formData, email: e.target.value })
                                                // }
                                                error={touched.email && Boolean(errors.email)}
                                                helperText={touched.email && errors.email}
                                            />
                                        </Grid>
                                        <Grid xs={12} className="flex-row align-left">
                                            <Typography variant="caption" className="font-medium-14 text-white-color text-align-left">Password*</Typography>
                                        </Grid>
                                        <Grid xs={12} style={{ height: "47px", marginBottom: "10px", padding: "8px 0 0 0" }}>
                                            <TextField
                                                className="password"
                                                type={password ? "text" : "password"}
                                                variant="outlined"
                                                size="small"
                                                value={values.password}
                                                onChange={handleChange}
                                                fullWidth
                                                placeholder="Enter your password"
                                                name="password"
                                                sx={{
                                                    height: "100%",
                                                    "& input::placeholder": {
                                                        color: "#5E616A",
                                                        opacity: 1,
                                                    },
                                                }}
                                                // onChange={(e) =>
                                                //   setFormData({ ...formData, password: e.target.value })
                                                // }
                                                error={touched.password && Boolean(errors.password)}
                                                helperText={touched.password && errors.password}
                                                InputProps={{
                                                    endAdornment: (
                                                        <>
                                                            {password ? (
                                                                <RemoveRedEyeIcon
                                                                    className="cursor-pointer"
                                                                    onClick={() => setPassword(false)}
                                                                />
                                                            ) : (
                                                                <VisibilityOffIcon
                                                                    className="cursor-pointer"
                                                                    onClick={() => setPassword(true)}
                                                                />
                                                            )}
                                                        </>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Stack direction={"row"} className="remember-me-wrapper flex-row align-center justify-between width-100 switch-wrapper text-white-color font-weight-600 font-small-12">
                                            <FormControlLabel sx={{
                                                '& .MuiSwitch-switchBase.Mui-checked': {
                                                    color: '#0065FF',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(28, 164, 157, 0.08)',
                                                    },
                                                },
                                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                    backgroundColor: '#0065FF',
                                                },
                                            }}

                                                control={<Switch
                                                    onChange={rememberMeHandler}
                                                    checked={rememberMe}
                                                />} label="Remember Me" />
                                            <p
                                                className="primary-text-color cursor-pointer"
                                                onClick={() => setIsActiveModel(2)}
                                            >
                                                Forgot password?{" "}
                                            </p>
                                        </Stack>
                                        <Button
                                            style={{ height: "47px", marginTop: "20px" }}
                                            className="submit-button btn-border-0 primary-bg-color text-transform-capitalize border-radius-25 font-weight-600"
                                            variant="contained"
                                            type="submit"
                                            fullWidth
                                        >
                                            Sign In
                                        </Button>
                                    </Grid>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
                {/* {isActiveModel === 1 ? (
                <div theme={theme} height={"457px"}>
                    <Formik
                        initialValues={formData}
                        enableReinitialize={true}
                        validationSchema={loginFormValidationSchema}
                        onSubmit={submitHandler}
                    >
                        {({ values, handleChange, handleSubmit, touched, errors }) => {
                            return (
                                <Form onSubmit={handleSubmit}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} textAlign={"center"}>
                                            <img src={Logo} />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Typography variant="caption" className="font-medium-14">Email*</Typography>
                                        </Grid>
                                        <Grid item xs={12} style={{ height: "47px", marginBottom: "10px" }}>
                                            <TextField
                                                className="username"
                                                variant="outlined"
                                                size="small"
                                                value={values.email}
                                                sx={{
                                                    height: "100%",
                                                    "& input::placeholder": {
                                                        color: "#5E616A",
                                                        opacity: 1,
                                                    },
                                                }}
                                                fullWidth
                                                placeholder="Enter your email"
                                                onChange={handleChange}
                                                name="email"
                                                // onChange={(e) =>
                                                //   setFormData({ ...formData, email: e.target.value })
                                                // }
                                                error={touched.email && Boolean(errors.email)}
                                                helperText={touched.email && errors.email}
                                            />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Typography variant="caption" className="font-medium-14">Password*</Typography>
                                        </Grid>
                                        <Grid item xs={12} style={{ height: "47px", marginBottom: "10px" }}>
                                            <TextField
                                                className="password"
                                                type={password ? "text" : "password"}
                                                variant="outlined"
                                                size="small"
                                                value={values.password}
                                                onChange={handleChange}
                                                fullWidth
                                                placeholder="Enter your password"
                                                name="password"
                                                sx={{
                                                    height: "100%",
                                                    "& input::placeholder": {
                                                        color: "#5E616A",
                                                        opacity: 1,
                                                    },
                                                }}
                                                // onChange={(e) =>
                                                //   setFormData({ ...formData, password: e.target.value })
                                                // }
                                                error={touched.password && Boolean(errors.password)}
                                                helperText={touched.password && errors.password}
                                                InputProps={{
                                                    endAdornment: (
                                                        <>
                                                            {password ? (
                                                                <RemoveRedEyeIcon
                                                                    className="cursor-pointer"
                                                                    onClick={() => setPassword(false)}
                                                                />
                                                            ) : (
                                                                <VisibilityOffIcon
                                                                    className="cursor-pointer"
                                                                    onClick={() => setPassword(true)}
                                                                />
                                                            )}
                                                        </>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Stack direction={"row"} className="flex-row align-center justify-between width-100 switch-wrapper">
                                            <FormControlLabel sx={{
                                                '& .MuiSwitch-switchBase.Mui-checked': {
                                                    color: '#1CA49D',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(28, 164, 157, 0.08)',
                                                    },
                                                },
                                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                    backgroundColor: '#1CA49D',
                                                },
                                            }}

                                                control={<Switch
                                                    onChange={rememberMeHandler}
                                                    checked={rememberMe}
                                                />} label="Remember Me" />
                                            <p
                                                className="primary-text-color cursor-pointer"
                                                onClick={() => setIsActiveModel(2)}
                                            >
                                                Forgot password?{" "}
                                            </p>
                                        </Stack>
                                        <Grid item xs={12}>
                                            <Button
                                                className="height-44px btn-border-0"
                                                variant="contained"
                                                type="submit"
                                                fullWidth
                                                style={{ background: "#1CA49D" }}
                                            // onClick={submitHandler}
                                            >
                                                Sign In
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            ) : isActiveModel === 2 ? (
                <CustomModel
                    headerText={`Forgot Password`}
                    subHeaderText={`No worries, we’ll send you reset instruction`}
                    fields={fieldMap['email']}
                    formData={formValues}
                    onChange={handleChange}
                    onSubmit={() => handleSubmit(3)}
                    buttonText={`Reset Password`}
                    redirectionText={`Back to login`}
                    errorMsg={errorMsg}
                    actionRedirection={() => handleOpen(1)}
                />
            ) : isActiveModel === 3 ? (
                <CustomModel
                    headerText={`Password Reset`}
                    subHeaderText={`We sent a code to`}
                    fields={fieldMap['otp']}
                    formData={formValues}
                    onChange={handleChange}
                    onSubmit={() => handleSubmit(4)}
                    buttonText={`Continue`}
                    redirectionText={`Back to login`}
                    errorMsg={errorMsg}
                    actionRedirection={() => handleOpen(1)}
                    otp={otp}
                    setOtp={setOtp}
                />
            ) :
                isActiveModel === 4 ? (
                    <CustomModel
                        headerText={`Set new password`}
                        subHeaderText={`Must be at least 8 character`}
                        fields={fieldMap['password']}
                        formData={formValues}
                        onChange={handleChange}
                        onSubmit={() => handleSubmit(5)}
                        buttonText={`Continue`}
                        redirectionText={`Back to login`}
                        errorMsg={errorMsg}
                        actionRedirection={() => handleOpen(1)}
                    />
                ) :
                    (
                        <CustomModel
                            headerText={`All Done!`}
                            subHeaderText={`Your password has been reset.`}
                            fields={fieldMap['all-done']}
                            formData={formValues}
                            onChange={handleChange}
                            onSubmit={() => handleOpen(1)}
                            buttonText={`Go to login`}
                            // redirectionText={`Back to login`}
                            // errorMsg={errorMsg}
                            actionRedirection={() => handleOpen(1)}
                        />
                    )} */}
            </div>
        </StyledLoginWrapper >
    );
};

export default LoginPage;