import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import {
  TreeItem,
  type TreeItemProps,
  treeItemClasses,
} from "@mui/x-tree-view/TreeItem";
import { useNavigate, useLocation } from "react-router-dom";
import { SideBarContainer } from "./style";
import { activeMenu, sidebarMenu } from "../../assets/images";

declare module "react" {
  interface CSSProperties {
    "--tree-view-color"?: string;
    "--tree-view-bg-color"?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  bgColorForDarkMode?: string;
  color?: string;
  colorForDarkMode?: string;
  labelIcon?: string | React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
  isActiveNav?: boolean;
};

type RouteCategory = {
  id: string;
  path: string;
  icon: string | React.ElementType<SvgIconProps>;
  roles: string[];
  children?: RouteChild[];
};

type RouteChild = {
  id: string;
  path: string;
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    flexDirection: "row-reverse",
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
})) as unknown as typeof TreeItem;

// const StyledTreeItem = React.forwardRef(function StyledTreeItem(
//   props: StyledTreeItemProps,
//   ref: React.Ref<HTMLLIElement>
// ) {
//   const theme = useTheme();
//   const {
//     bgColor,
//     color,
//     labelIcon: LabelIcon,
//     labelInfo,
//     labelText,
//     colorForDarkMode,
//     bgColorForDarkMode,
//     isActiveNav,
//     ...other
//   } = props;

//   const styleProps = {
//     "--tree-view-color":
//       theme.palette.mode !== "dark" ? color : colorForDarkMode,
//     "--tree-view-bg-color":
//       theme.palette.mode !== "dark" ? bgColor : bgColorForDarkMode,
//   };

//   return (
//     <StyledTreeItemRoot
//       label={
//         <Stack direction={"row"} className="flex-row align-center">
//           <span
//             className={isActiveNav ? "active-icon" : ""}
//             style={{ background: "#fff" }}
//           ></span>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               p: 0.75,
//               pr: 0,
//             }}
//             style={{ paddingLeft: isActiveNav ? "6px" : 0.75 }}
//           >
//             {LabelIcon && typeof LabelIcon === "string" && (
//               <img
//                 src={LabelIcon}
//                 alt="labelText"
//                 style={{ marginRight: "10px" }}
//               />
//             )}
//             <Typography
//               variant="body2"
//               sx={{ fontWeight: "inherit", flexGrow: 1 }}
//               title={labelText}
//             >
//               {labelText}
//             </Typography>
//             <Typography variant="caption" color="inherit">
//               {labelInfo}
//             </Typography>
//           </Box>
//         </Stack>
//       }
//       style={styleProps}
//       {...other}
//       ref={ref}
//     />
//   );
// });

const StyledTreeItem = React.forwardRef(function StyledTreeItem(
  props: StyledTreeItemProps,
  ref: React.Ref<HTMLLIElement>
) {
  const theme = useTheme();
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    colorForDarkMode,
    bgColorForDarkMode,
    isActiveNav,
    children, // 🔥 ADD THIS
    ...other
  } = props;

  const styleProps = {
    "--tree-view-color":
      theme.palette.mode !== "dark" ? color : colorForDarkMode,
    "--tree-view-bg-color":
      theme.palette.mode !== "dark" ? bgColor : bgColorForDarkMode,
  };

  return (
    <StyledTreeItemRoot
      ref={ref}
      style={styleProps}
      {...other}
      label={
        <Stack direction="row" className="flex-row align-center">
          <span
            className={isActiveNav ? "active-icon" : ""}
            style={{ background: "#fff" }}
          />
          <Box
            sx={{ display: "flex", alignItems: "center", p: 0.75, pr: 0 }}
            style={{ paddingLeft: isActiveNav ? "6px" : 0.75 }}
          >
            {LabelIcon && typeof LabelIcon === "string" && (
              <img
                src={LabelIcon}
                alt={labelText}
                style={{ marginRight: "10px" }}
              />
            )}
            <Typography
              variant="body2"
              sx={{ fontWeight: "inherit", flexGrow: 1 }}
              title={labelText}
            >
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </Box>
        </Stack>
      }
    >
      {children} {/* ✅ THIS FIXES EVERYTHING */}
    </StyledTreeItemRoot>
  );
});

export default function SideBar() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // const { role } = useAppSelector((state) => state.globalAuthData.authDetails)
  const role = "SUPER ADMIN";

  const navigateHandler = (category: RouteCategory) => {
    setActiveNav(category?.id?.toLowerCase());
    navigate(category.path);
  };

  useEffect(() => {
    if (pathnames.length) {
      setActiveNav(pathnames[0]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathnames]);

  const {
    dashboard,
    booking,
    club_management,
    membership,
    payment,
    notification,
    report,
    setting,
    user,
  } = sidebarMenu;

  const {
    DashboardIcon_active_icon,
    booking_active_icon,
    club_management_active_icon,
    membership_active_icon,
    notification_active_icon,
    payment_active_icon,
    report_active_icon,
    setting_active_icon,
    user_active_icon
  } = activeMenu

  const sidebarMenuItems = [
    {
      section: "Overview",
      items: [
        {
          label: "Dashboard",
          icon: dashboard,
          activeIcon: DashboardIcon_active_icon,
          path: "/dashboard",
          id: "dashboard",
          roles: ["SUPER ADMIN"],
        },
      ],
    },
    {
      section: "Account",
      items: [
        {
          label: "Club Management",
          icon: club_management,
          activeIcon: club_management_active_icon,
          path: "/club-management",
          id: "club management",
          roles: ["SUPER ADMIN"],
        },
        {
          label: "Bookings",
          icon: booking,
          activeIcon: booking_active_icon,
          path: "/bookings",
          id: "bookings",
          roles: ["SUPER ADMIN"],
        },
        {
          label: "Users",
          icon: user,
          activeIcon: user_active_icon,
          path: "/users",
          id: "users",
          roles: ["SUPER ADMIN"],
        },
      ],
    },
    {
      section: "Activity",
      items: [
        {
          label: "Memberships",
          icon: membership,
          activeIcon: membership_active_icon,
          path: "/memberships",
          id: "memberships",
          roles: ["SUPER ADMIN"],
        },
        {
          label: "Payments",
          icon: payment,
          activeIcon: payment_active_icon,
          path: "/payments",
          id: "payments",
          roles: ["SUPER ADMIN"],
        },
      ],
    },
    {
      section: "Management",
      items: [
        {
          label: "Reports",
          icon: report,
          activeIcon: report_active_icon,
          path: "/reports",
          id: "reports",
          roles: ["SUPER ADMIN"],
        },
        {
          label: "Notifications",
          icon: notification,
          activeIcon: notification_active_icon,
          path: "/notifications",
          id: "notifications",
          roles: ["SUPER ADMIN"],
        },
      ],
    },
    {
      section: "Others",
      items: [
        {
          label: "Settings",
          icon: setting,
          activeIcon: setting_active_icon,
          path: "/settings",
          id: "settings",
          roles: ["SUPER ADMIN"],
        },
      ],
    },
  ];

  return (
    <SideBarContainer className="flex-col align-start justify-start row-gap-15">
      <Typography
        variant="caption"
        className="font-large-20 text-align-left font-weight-700 font-family-raleway text-white-color width-100"
      >
        Welcome to <br /> Cloud 9.
      </Typography>
      <div style={{ border: "1px solid #272727" }} className="width-100"></div>
      <div className="width-100 flex-col align-start justify-start row-gap-17">
        {sidebarMenuItems.map((section) => (
          <div
            key={section.section}
            className="flex-col align-start justify-center row-gap-10 width-100"
          >
            <Typography
              style={{ color: "#9C9C9C" }}
              // variant="caption"
              className="font-small-12 text-align-left font-weight-500 font-family-raleway flex-row align-center justify-start row-gap-20"
            >
              {section.section}
            </Typography>
            <div
              className="flex-col align-start justify-center row-gap-12 width-100"
              style={{ paddingLeft: "0px" }}
            >
              {section.items
                .filter((item) => item.roles.includes(role))
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(item.path)}
                    className={`cursor-pointer flex-row align-center justify-start font-medium-14 font-weight-500 font-family-raleway column-gap-10 ${activeNav === item.id || activeNav === item.path?.slice(1)
                      ? "active-nav"
                      : "inactive-nav"
                      }`}
                  >
                    <img
                      src={activeNav === item.id || activeNav === item.path?.slice(1) ? item.activeIcon : item.icon}
                      width={17}
                      height={17}
                      alt={item.icon}
                    />
                    <Typography
                      variant="caption"
                      className="font-medium-14 text-align-left font-weight-500 font-family-raleway"
                      style={{ color: activeNav === item.id || activeNav === item.path?.slice(1) ? "#ffffff" : "#9C9C9C" }}
                    >
                      {item.label}
                    </Typography>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </SideBarContainer>
  );
}
