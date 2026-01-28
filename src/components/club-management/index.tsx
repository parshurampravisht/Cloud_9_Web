import { Button, Stack, Typography } from "@mui/material";
import BreadCrumb from "../../base/breadCrumb";
import { Images } from "../../assets/images";
import { pageNavigatePathRoutes } from "../../constant";
import { useNavigate } from "react-router-dom";
import type { BreadcrumbItem } from "../../constant/typeSchema";

function ClubManagement() {
  const { search_icon, club_view, location, arrow_down } = Images;

  const navigate = useNavigate()

  const clubList = [
    {
      id: 1,
      club_name: "Q Sports Club 135",
      club_image: club_view,
      club_location: "Sport Ciub 135 , Sector 135, Noida Uttar Pradesh",
      total_club_table: 34,
    },
    {
      id: 2,
      club_name: "Q Sports Club 135",
      club_image: club_view,
      club_location: "Sport Ciub 135 , Sector 135, Noida Uttar Pradesh",
      total_club_table: 34,
    },
    {
      id: 3,
      club_name: "Q Sports Club 135",
      club_image: club_view,
      club_location: "Sport Ciub 135 , Sector 135, Noida Uttar Pradesh",
      total_club_table: 34,
    },
    {
      id: 4,
      club_name: "Q Sports Club 135",
      club_image: club_view,
      club_location: "Sport Ciub 135 , Sector 135, Noida Uttar Pradesh",
      total_club_table: 30,
    },
    {
      id: 5,
      club_name: "Q Sports Club 135",
      club_image: club_view,
      club_location: "Sport Ciub 135 , Sector 135, Noida Uttar Pradesh",
      total_club_table: 34,
    },
    {
      id: 6,
      club_name: "Q Sports Club 135",
      club_image: club_view,
      club_location: "Sport Ciub 135 , Sector 135, Noida Uttar Pradesh",
      total_club_table: 12,
    },
    {
      id: 7,
      club_name: "Q Sports Club 135",
      club_image: club_view,
      club_location: "Sport Ciub 135 , Sector 135, Noida Uttar Pradesh",
      total_club_table: 38,
    },
  ];

  const navigatorHanlder = () => {
    navigate(pageNavigatePathRoutes.club_management_new)
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Overview" },
    { label: "Club Management" },
  ];

  return (
    <div className="flex-col row-gap-20">
      <BreadCrumb
        breadcrumbs={breadcrumbs}
        title={"Club Management"}
        description={" Manage all pool and billiards tables"}
      />
      <Stack direction={"row"} className="width-100 column-gap-10">
        <Stack
          direction="row"
          style={{
            padding: "8px 15px",
            color: "#FFFFFF4A",
          }}
          className="flex-row column-gap-10 border-radius-10 layout-bg-color width-100 font-medium-14 font-weight-500 font-family-raleway"
        >
          <img src={search_icon} width={17} height={17} alt="search-icon" />
          Search tables...
        </Stack>
        <Button
          onClick={() => navigatorHanlder()}
          style={{ padding: "8px 15px", width: "14rem", color: "#ffffff" }}
          className="primary-bg-color text-white-color text-transform-capitalize border-radius-10"
        >
          {" "}
          Create New Club{" "}
        </Button>
      </Stack>

      {clubList.map((item) => {
        return (
          <Stack
            key={item.id}
            direction="row"
            style={{
              padding: "8px",
              border: "0.5px solid #99999942",
            }}
            className="flex-row align-center justify-start column-gap-10 border-radius-10 layout-bg-color width-100 font-medium-14 font-weight-500 font-family-raleway"
          >
            <img
              src={item.club_image}
              width={65}
              height={65}
              alt="search-icon"
              className="border-radius-10"
            />

            <Stack
              direction={"column"}
              minWidth={"32rem"}
              className="row-gap-5 align-start secondary-db-text-color"
            >
              <Typography className="font-weight-600 font-large-20">
                {item.club_name}
              </Typography>
              <Typography className="font-weight-400 font-medium-14 flex-row column-gap-5 align-center">
                <img src={location} width={17} height={17} alt="search-icon" />Q
                {item.club_location}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              style={{
                padding: "8px 15px",
                background: "#2C2C2C",
                minWidth: "120px",
              }}
              className="flex-row column-gap-10 align-center secondary-db-text-color border-radius-22 font-family-raleway"
            >
              <Typography
                mt={"-5px"}
                variant="caption"
                className="font-weight-700 font-medium-16"
              >
                {item.total_club_table}
              </Typography>
              <Typography
                variant="caption"
                className="font-weight-400 font-medium-14"
              >
                Total table
              </Typography>
            </Stack>
            <Stack direction={"row"} ml={"25rem"}>
              <img src={arrow_down} width={17} height={17} alt="search-icon" />
            </Stack>
          </Stack>
        );
      })}
    </div>
  );
}

export default ClubManagement;
