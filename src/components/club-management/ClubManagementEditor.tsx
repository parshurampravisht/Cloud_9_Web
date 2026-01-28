import { useState } from "react";
import {
    Box,
    Button,
    Grid,
    Stack,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Typography,
    TextField,
    MenuItem,
    Select,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import BreadCrumb from "../../base/breadCrumb";
// import { Images } from "../../assets/images";
import type { BreadcrumbItem } from "../../constant/typeSchema";
import { NewClubContainer } from "./style";
import { step1ClubValidationSchema } from "../../utils/CreateClubFormSchema";
import { clubBasicInformationfields } from "../../constant/clubBasicInformationField";

const step1InitialValues = {
    clubName: "",
    clubCategory: "",
    clubStatus: "",
    postCode: "",
    clubAddress: "",
    streetName: "",
    postTown: "",
    country: "",
    latitude: "",
    longitude: "",
    radius: "",
    mobileNumber: "",
    email: "",
};

function ClubManagementEditor() {
    const [activeStep, setActiveStep] = useState(0);

    // const { search_icon, club_view, location, arrow_down } = Images;

    const breadcrumbs: BreadcrumbItem[] = [
        { label: "Overview" },
        { label: "Club Management", path: "/club-management" },
        { label: "Create New Club" }, // current page (no path)
    ];

    const steps = [
        {
            label: "Club Basic Information",
            stepLabel: "Complete",
            component: ClubBasicInformation,
            config: clubBasicInformationfields,
            initialValues: step1InitialValues,
            validationSchema: step1ClubValidationSchema,
        },
        {
            label: "Media Upload",
            stepLabel: "Complete",
            description:
                "An ad group contains one or more ads which target a shared set of keywords.",
        },
        {
            label: "Description & Amenities",
            description: ``,
        },
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <NewClubContainer className="flex-col row-gap-20">
            <BreadCrumb
                breadcrumbs={breadcrumbs}
                title={"Create New Club"}
                description={""}
            />
            <Stack
                direction={"row"}
                className="width-100 column-gap-10 secondary-db-text-color"
            >
                <Stepper
                    activeStep={activeStep}
                    orientation="vertical"
                    className="stepper-wrapper width-100"
                >
                    {steps.map((step, index) => {
                        const StepComponent = step.component;

                        return (
                            <Step key={step.label} className="secondary-db-text-color">
                                <StepLabel
                                    className="secondary-db-text-color font-medium--16 font-weight-600 font-family-raleway"
                                    optional={
                                        step.stepLabel && (
                                            <Typography
                                                variant="caption"
                                                className="secondary-db-text-color font-small-12 font-weight-400"
                                            >
                                                {step.stepLabel}
                                            </Typography>
                                        )
                                    }
                                >
                                    {step.label}
                                </StepLabel>

                                <StepContent>
                                    {StepComponent ? (
                                        <StepComponent onNext={handleNext} />
                                    ) : (
                                        <Typography>{step.description}</Typography>
                                    )}

                                    {/* Back button stays in Stepper */}
                                    <Box sx={{ mb: 2 }}>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </Box>
                                </StepContent>
                            </Step>
                        );
                    })}
                </Stepper>
            </Stack>
        </NewClubContainer>
    );
}

const ClubBasicInformation = ({ onNext }: { onNext: () => void }) => {
    return (
        <div style={{ padding: "20px", border: `0.5px solid #99999942` }} className="club-form-container layout-bg-color border-radius-12 layout-backdrop-filter-20 width-100">
            <Formik
                initialValues={step1InitialValues}
                validationSchema={step1ClubValidationSchema}
                className="width-100"
                onSubmit={(values) => {
                    console.log("Step 1 Data:", values);
                    onNext();
                }}
            >
                {({ values, errors, touched, setFieldValue }) => (
                    <Form className="width-100">
                        <Grid container spacing={2} style={{ gridTemplateColumns: `repeat(3, 1fr)`, columnGap: "40px", rowGap: "40px" }} className="width-100 grid-row">
                            {clubBasicInformationfields.slice(0, 3).map((field) => (
                                <Grid direction={"column"} item key={field.name} className="width-100 flex-col align-start justify-center row-gap-15">
                                    <Typography className="padding-buttom font-medium-14 font-weight-500">
                                        {field.label}
                                    </Typography>
                                    <Stack style={{ height: "40px" }} className="width-100">
                                        {
                                            field.type === "select" ? (
                                                <Select
                                                    sx={{ maxHeight: "100%", height: "100%" }}
                                                    name={field.name}
                                                    value={values[field.name] ?? ''}
                                                    required={field.required}
                                                    onChange={(e) =>
                                                        setFieldValue(field.name, e.target.value)
                                                    }
                                                >
                                                    {field.options?.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            ) : (
                                                <Field
                                                    className=""
                                                    as={TextField}
                                                    name={field.name}
                                                    placeholder={field.placeholder}
                                                    value={values[field.name] ?? ""}
                                                    fullWidth
                                                    sx={{
                                                        height: "100%",
                                                        "& input::placeholder": {
                                                            color: "#FFFFFF4A",
                                                            opacity: 1,
                                                        },
                                                    }}
                                                    select={field.type === "select"}
                                                    error={touched[field.name] && !!errors[field.name]}
                                                    helperText={touched[field.name] && errors[field.name]}
                                                >
                                                    {field.type === "select" &&
                                                        field.options?.map((opt: any) => (
                                                            <MenuItem key={opt.value} value={opt.value}>
                                                                {opt.label}
                                                            </MenuItem>
                                                        ))}
                                                </Field>)
                                        }
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>

                        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                            Continue
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ClubManagementEditor;
