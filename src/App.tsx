import { useState } from 'react'
import './App.css'
import "./style/common.css";
import "./style/miui.css";
import LoginPage from './components/login'
import { ThemeProvider } from 'styled-components'
import { Bounce, ToastContainer } from 'react-toastify'
import { createTheme, CssBaseline } from '@mui/material'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { SessionExpired } from './base'
import Dashboard from './components/Dashboard';
import Layout from './components/layout';



type AppRoute = {
  path: string;
  component: () => JSX.Element;
  authType: string;
  isIndex?: boolean;
  navigator?: string;
};


function App() {
  const [sessionExpired, setSessionExpired] = useState(false);

  const handleAction = () => {
    setSessionExpired(false);
    localStorage.clear();
    window.location.href = "/#/login";
  };

  const theme = createTheme({
    typography: {
      fontFamily: `Raleway, sans-serif`,
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
          },
          input: {
            color: "#fff",
          },
          // notchedOutline: {
          //   borderColor: "#00FF7D",
          // },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: "#0065FF !important", // unchecked border color
            "&.Mui-checked": {
              color: "#0065FF !important", // checked color
            },
          },
        },
      },
      //   MuiOutlinedInput: {
      //     styleOverrides: {
      //       root: {
      //         "&:hover .MuiOutlinedInput-notchedOutline": {
      //           borderColor: "#00A79D !important",
      //         },
      //         "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      //           borderColor: "#00A79D !important",
      //         },
      //       },
      //     },
      //   },
      //   MuiSelect: {
      //     styleOverrides: {
      //       outlined: {
      //         "&:hover": {
      //           borderColor: "#00A79D !important",
      //         },
      //         "&.Mui-focused": {
      //           borderColor: "#00A79D !important",
      //         },
      //       },
      //     },
      //   },
      //   MuiInputBase: {
      //     styleOverrides: {
      //       root: {
      //         "&:hover fieldset": {
      //           borderColor: "#00A79D !important",
      //         },
      //         "&.Mui-focused fieldset": {
      //           borderColor: "#00A79D !important",
      //         },
      //         "& textarea::placeholder": {
      //           color: "#5E616A",
      //           opacity: 1,
      //         },
      //       },
      //       input: {
      //         "::placeholder": {
      //           color: "#5E616A",
      //           opacity: 1,
      //         },
      //       },
      //     },
      //   },
    },
  });

  const appRoutes: AppRoute[] = [
    {
      path: "/dashboard",
      component: Dashboard,
      authType: "POST",
    },
    // { path: "/service-user", component: ServiceUsers, authType: "POST" },
    // {
    //   path: "/service-user/individual-user-details/:authId",
    //   component: IndividualUserDetails,
    //   authType: "POST",
    // },
    // {
    //   path: "/service-user/corporate-user-details/:authId",
    //   component: CorporateUserDetails,
    //   authType: "POST",
    // },
    // {
    //   path: "/service-user/wema-service-user-details/:authId",
    //   component: WemaServiceUsersDashboard,
    //   authType: "POST",
    // },
    // {
    //   path: "/wema-agents",
    //   component: wemaAgents,
    //   authType: "POST",
    // },
    // {
    //   path: "/wema-agents/active-wema-agents-details/:authId",
    //   component: ActiveWemaAgentsDetails,
    //   authType: "POST",
    // },
    // {
    //   path: "/corporate-management",
    //   component: CorporateDashboardList,
    //   authType: "POST",
    // },
    // {
    //   path: "/corporate-management/corporate-dashboard/:corpId",
    //   component: CorporateDashboard,
    //   authType: "POST",
    // },
    // {
    //   path: "/appointments",
    //   component: Appointments,
    //   authType: "POST",
    // },
    // {
    //   path: "/appointments/service-user-details/:authId",
    //   component: WemaServiceUsersDashboard,
    //   authType: "POST",
    // },
    // { path: "/user-management", component: UserManagement, authType: "POST" },
    // {
    //   path: "/tickets",
    //   component: Tickets,
    //   authType: "POST",
    //   navigator: "/tickets",
    // },
    // {
    //   path: "/settings",
    //   component: Settings,
    //   authType: "POST",
    //   navigator: "/settings",
    // },
    // {
    //   path: "/notifications",
    //   component: Notifications,
    //   authType: "POST",
    //   navigator: "/notifications",
    // },
    // {
    //   path: "/tasks",
    //   component: Tasks,
    //   authType: "POST",
    // },
    // {
    //   path: "/complaints",
    //   component: Complaints,
    //   authType: "POST",
    // },
    // {
    //   path: "/manage-card",
    //   component: ManageCard,
    //   authType: "POST",
    // },
    // {
    //   path: "/service-providers",
    //   component: ServiceProviders,
    //   authType: "POST",
    // },
    // {
    //   path: "/reports",
    //   component: Reports,
    //   authType: "POST",
    // },
    // {
    //   path: "/service-management",
    //   component: ServiceManagement,
    //   authType: "POST",
    // },
    // {
    //   path: "/resources",
    //   component: Resources,
    //   authType: "POST",
    // },
    // {
    //   path: "/chats",
    //   component: Chats,
    //   authType: "POST",
    // },
    { path: "/", component: LoginPage, authType: "PRE", isIndex: true },
  ];

  const ProtectedRoute = (props) => {
    const token = localStorage.getItem("jwt");
    if (props) {
      const { authType, component: Component } = props;
      if (authType === "PRE") {
        return <Component />;
      } else {
        if (!token) {
          setSessionExpired(true);
        }
        return (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        );
      }
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        <CssBaseline enableColorScheme />
        <HashRouter>
          <Routes>
            {appRoutes.map(
              (
                { path, component, authType, navigator = "", isIndex = false },
                index
              ) => (
                <Route
                  key={index}
                  path={path}
                  index={isIndex}
                  element={
                    <ProtectedRoute
                      authType={authType}
                      component={component}
                      navigator={navigator}
                    />
                  }
                />
              )
            )}
          </Routes>
        </HashRouter>
        {/* <SwitchModeButton /> */}
        {/* <Alerts {...alertVal} /> */}
        {/* <Loader showHide={loader} /> */}
        <SessionExpired open={sessionExpired} handleAction={handleAction} />
      </ThemeProvider>
    </>
  )
}

export default App
