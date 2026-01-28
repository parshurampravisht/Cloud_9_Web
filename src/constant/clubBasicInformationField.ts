export const clubBasicInformationfields = [
    {
        name: "clubName",
        label: "Club Name",
        type: "text",
        placeholder: "Enter Name",
        required: true,
    },
    {
        name: "clubCategory",
        label: "Club Category",
        type: "select",
        placeholder: "Select Category",
        required: true,
        options: [
            { label: "Sports", value: "sports" },
            { label: "Cultural", value: "cultural" },
            { label: "Technical", value: "technical" },
        ],
    },
    {
        name: "clubStatus",
        label: "Club Status",
        type: "select",
        placeholder: "Select Status",
        required: true,
        options: [
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
            { label: "Pending Approval", value: "pending" },
        ],
    },

    // Address
    {
        name: "postCode",
        label: "Post Code",
        type: "text",
        placeholder: "Enter Code",
        required: true,
    },
    {
        name: "clubAddress",
        label: "Club Name & Address",
        type: "text",
        placeholder: "Enter Address",
        required: true,
    },
    {
        name: "streetName",
        label: "Street Name",
        type: "text",
        placeholder: "Enter Street",
        required: true,
    },
    {
        name: "postTown",
        label: "Post Town",
        type: "text",
        placeholder: "Enter Post",
        required: true,
    },
    {
        name: "country",
        label: "Country",
        type: "select",
        placeholder: "Select Code",
        required: true,
        options: [],
    },

    // Location
    {
        name: "latitude",
        label: "Latitude",
        type: "number",
        placeholder: "Enter Latitude",
        required: true,
    },
    {
        name: "longitude",
        label: "Longitude",
        type: "number",
        placeholder: "Enter Longitude",
        required: true,
    },
    {
        name: "radius",
        label: "Radius (meter)",
        type: "number",
        placeholder: "Enter Radius",
        required: true,
    },

    // Contact
    {
        name: "mobileNumber",
        label: "Mobile Number",
        type: "phone",
        placeholder: "e.g. 81231 23323",
        required: true,
        countryCode: "+44",
    },
    {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter Mail",
        required: true,
    },
]
