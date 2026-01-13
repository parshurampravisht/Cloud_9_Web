import * as Yup from "yup";

// export const LogActivitySchema = Yup.object({
//     dateTime: Yup.string().required("Date and time is required"),

//     // reasonForCall: Yup.string().required("Reason for call is required"),
//     // callOutcomes: Yup.string().required("Call Outcome is required").notOneOf(["Select"], "Call Outcome is required"),
//     // followUpActions: Yup.string().required("Follow-Up Action is required").notOneOf(["Select"], "Follow-Up Action is required"),
//     // summaryOfDiscussionCall: Yup.string().required("Summary is required"),

//     // meetingTitle: Yup.string().required("Meeting title is required"),
//     // meetingOutcomes: Yup.string().required("Meeting outcome is required"),
//     // summaryOfDiscussionMeet: Yup.string().required("Summary is required"),

//     // note: Yup.string().required("Note is required"),
// });

export const CallSchema = Yup.object({
    dateTime: Yup.string().required("Date and time is required"),
    reasonForCall: Yup.string().required("Reason for call is required"),
    callOutcomes: Yup.string().notOneOf(["Select"], "Please select a call outcome"),
    followUpActions: Yup.string().notOneOf(["Select"], "Please select a follow-up action"),
    // summaryOfDiscussionCall: Yup.string().max(350).required("Summary is required"),
});

export const MeetingSchema = Yup.object({
    dateTime: Yup.string().required("Date and time is required"),
    meetingTitle: Yup.string().required("Meeting title is required"),
    meetingOutcomes: Yup.string().notOneOf(["Select"], "Please select a meeting outcome"),
    followUpActions: Yup.string().notOneOf(["Select"], "Please select a follow-up action"),
    // summaryOfDiscussionMeet: Yup.string().max(350).required("Summary is required"),
});

export const NoteSchema = Yup.object({
    dateTime: Yup.string().required("Date and time is required"),
    note: Yup.string().max(350).required("Note is required"),
});
