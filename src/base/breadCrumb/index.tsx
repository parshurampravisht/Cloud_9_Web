import { Card, Stack, Typography } from "@mui/material";
import { BreadcrumbContainer } from "./style";
import { useNavigate } from "react-router-dom";
import type { BreadCrumbProps } from "../../constant/typeSchema";

function BreadCrumb({
    breadcrumbs = [],
    title = "",
    description = "",
}: BreadCrumbProps) {

    const navigate = useNavigate();

    return (
        <BreadcrumbContainer>
            <Card className="breadcrumb-wrapper flex-col align-center justify-evenly border-radius-10 height-100 flex-col row-gap-10">
                {/* <Stack
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
                </Stack> */}

                <Stack
                    style={{ color: "rgba(156, 156, 156, 1)" }}
                    direction={"row"}
                    className="flex-row align-center jusitfy-start font-small-12 font-weight-400 font-family-raleway width-100"
                >
                    {breadcrumbs.map((item, index) => {
                        const isLast = index === breadcrumbs.length - 1;

                        return (
                            <Stack key={index} direction="row" className="flex-row column-gap-1" alignItems="center">
                                <Typography
                                    variant="caption"
                                    onClick={() => item.path && navigate(item.path)}
                                    sx={{
                                        cursor: item.path ? "pointer" : "default",
                                        color: isLast ? "rgba(219,219,219,1)" : "rgba(156,156,156,1)",
                                        "&:hover": {
                                            textDecoration: item.path ? "underline" : "none",
                                        },
                                    }}
                                    className="font-small-12 font-family-raleway"
                                >
                                    {item.label}
                                </Typography>

                                {!isLast && (
                                    <Typography
                                        variant="caption"
                                        sx={{ color: "rgba(219,219,219,1)", mx: 0.4 }}
                                    >
                                        /
                                    </Typography>
                                )}
                            </Stack>
                        );
                    })}
                </Stack>
                <Stack
                    direction={"column"}
                    className="flex-col align-start justify-center width-100"
                >
                    {title && (
                        <Typography
                            style={{ color: `rgba(235, 235, 235, 1)` }}
                            variant="caption"
                            className="font-large-20 font-weight-700 font-family-raleway"
                        >
                            {title}
                        </Typography>
                    )}
                    {description && (
                        <Typography
                            style={{ color: `rgba(219, 219, 219, 1)` }}
                            variant="caption"
                            className="font-medium-14 font-weight-400 font-family-raleway"
                        >
                            {description}
                        </Typography>
                    )}
                </Stack>
            </Card>
        </BreadcrumbContainer>
    );
}

export default BreadCrumb;
