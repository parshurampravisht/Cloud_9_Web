import { useState } from "react";
import {
  CssBaseline,
  Avatar,
  useTheme,
  Typography,
  Grid,
  Stack,
  // Select,
  // Box,
} from "@mui/material";
import SideBar from "../../base/SideBar";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { menuSidebarIcon, sidebarMenu } from "../../assets/images";

const userProfileDataSet = {
  profileImage: "https://mui.com/static/images/avatar/2.jpg",
  firstName: "Olivia",
  lastName: "Smith",
};

const Layout = ({ children }) => {
  const theme = useTheme();
  const [userProfile, setUserProfile] = useState({ ...userProfileDataSet });

  const { ProfileLogo } = menuSidebarIcon;

  const { notification } = sidebarMenu;

  // const dispatch = useAppDispatch()

  // const { role = "", authId } = useAppSelector(
  //   (state) => state.globalAuthData.authDetails
  // );

  // const userProfileData = useAppSelector(
  //   (state) => state.globalAuthData.profileData
  // );

  const navigate = useNavigate();

  const handleCloseUserMenu = (item: any) => {
    if (item === "Logout") {
      const email = localStorage.getItem("loginEmail");
      const password = localStorage.getItem("loginPassword");

      // Clear everything
      localStorage.clear();

      // Restore email and password if they exist
      if (email) localStorage.setItem("loginEmail", email);
      if (password) localStorage.setItem("loginPassword", password);
      navigate("/login");
    }
  };

  const sideNavWidth = `16rem`;
  const rightSideNavWidth = `18rem`;

  return (
    <Wrapper theme={theme}>
      <CssBaseline />
      <Grid className="navbar-container flex-row row-gap-12" container spacing={1}>
        <Grid item xs={12} className="header" style={{ height: "57px" }}>
          <Grid
            container
            style={{ background: "#000000", margin: "0px" }}
            className="flex-row align-center justify-between width-100 margin-0px height-100"
          >
            <Stack
              style={{ width: sideNavWidth, padding: "15px" }}
              className="layout-bg-color border-radius-12 layout-backdrop-filter-20 height-100"
            >
              <Typography
                variant="caption"
                className="font-large-20 text-align-left font-weight-700 font-family-raleway text-white-color width-100 height-100 flex-row align-center justify-start"
              >
                Cloud 9
              </Typography>
            </Stack>

            <Stack
              direction={"row"}
              style={{
                width: `calc(100% - ${rightSideNavWidth})`,
                padding: "7px 15px",
              }}
              className="layout-bg-color flex-row align-center column-gap-20 justify-end height-100 border-radius-12 layout-backdrop-filter-20"
            >
              <Stack className="flex-row align-center justify-center layout-backdrop-filter-20 border-radius-10" style={{ width: "33px", height: "33px", border: ` 0.47px solid #99999942` }}>
                <img src={notification} width={17} height={17} alt={"notification"} />
              </Stack>
              <Stack className="flex-row align-start">
                <Typography
                  variant="caption"
                  className="font-medium-14 font-weight-600 font-family-raleway text-white-color"
                >
                  {userProfile.firstName + " " + userProfile.lastName}
                </Typography>
                <Typography
                  variant="caption"
                  style={{ color: "#62748E" }}
                  className="font-small-12 font-weight-400"
                >
                  {"Super Admin"}
                </Typography>
              </Stack>
              <div className="avatar-wrapper height-100">
                <Avatar
                  style={{ width: "100%", height: "100%" }}
                  className="height-100"
                  alt="profile avatar"
                  src={ProfileLogo}
                />
              </div>
            </Stack>
          </Grid>
        </Grid>
        <Stack
          direction={"row"}
          className="width-100 align-start justify-between"
        >
          <Stack
            style={{ paddingTop: "0px", width: sideNavWidth, height: "86vh" }}
            className="layout-bg-color border-radius-12 layout-backdrop-filter-20"
          >
            <SideBar />
          </Stack>
          <Stack
            style={{ width: `calc(100% - ${rightSideNavWidth})` }}
            className="flex-row column-gap-10"
          >
            <div className="content" style={{ margin: "0px" }}>{children}</div>
          </Stack>
        </Stack>
      </Grid>
    </Wrapper>
  );
};

export default Layout;
