import { Card, Stack, Typography } from "@mui/material";
import { BreadcrumbContainer } from "./style";

function BreadCrumb({
    breadcrumb = "",
    activeBreadCrumbTab = "",
    title = "",
    description = "",
}) {
    return (
        <BreadcrumbContainer>
            <Card className="breadcrumb-wrapper border-radius-10 height-100 flex-col row-gap-10">
                <Stack
                    style={{ color: "rgba(156, 156, 156, 1)" }}
                    direction={"row"}
                    className="flex-row align-center jusitfy-start font-small-12 font-weight-400 font-family-raleway width-100 column-gap-5"
                >
                    {breadcrumb}
                    <Typography
                        style={{ color: "rgba(219, 219, 219, 1)" }}
                        variant="caption"
                        className="font-small-12 font-weight-400 font-family-raleway text-white-color"
                    >
                        {" "}
                        / {activeBreadCrumbTab}
                    </Typography>
                </Stack>
                <Stack
                    direction={"column"}
                    className="flex-col align-start justify-center width-100"
                >
                    <Typography
                        style={{ color: `rgba(235, 235, 235, 1)` }}
                        variant="caption"
                        className="font-large-20 font-weight-700 font-family-raleway"
                    >
                        {title}
                    </Typography>
                    <Typography
                        style={{ color: `rgba(219, 219, 219, 1)` }}
                        variant="caption"
                        className="font-medium-14 font-weight-400 font-family-raleway"
                    >
                        {description}
                    </Typography>
                </Stack>
            </Card>
        </BreadcrumbContainer>
    );
}

export default BreadCrumb;
