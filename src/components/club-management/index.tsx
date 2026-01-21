import { Button, Stack } from "@mui/material";
import BreadCrumb from "../../base/breadCrumb";
import { Images } from "../../assets/images";

function ClubManagement() {

  const { search_icon } = Images
  return (
    <div className="flex-col row-gap-20">
      <BreadCrumb
        breadcrumb={'Account'}
        activeBreadCrumbTab={'Club Management'}
        title={"Club Management"}
        description={' Manage all pool and billiards tables'}
      />
      <Stack direction={"row"} className="width-100 column-gap-10">
        <Stack direction="row" style={{
          padding: "8px 15px", color: '#FFFFFF4A'
        }} className="flex-row column-gap-10 border-radius-10 layout-bg-color width-100 font-medium-14 font-weight-500 font-family-raleway">
          <img src={search_icon} width={17} height={17} alt="search-icon" />
          Search tables...
        </Stack>
        <Button style={{ padding: "8px 15px", width: "14rem", color: "#ffffff" }} className="primary-bg-color text-white-color text-transform-capitalize border-radius-10"> Create New Club </Button>
      </Stack>
    </div>
  );
};

export default ClubManagement;