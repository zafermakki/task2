import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import Navbar from "./navBar/NavBar";
import Sidebar from "./sideBar/SideBar";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";

const drawerWidth = 240;
const NAVBAR_HEIGHT = 64;

const menuItems = [
  { key: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { key: "users", title: "Users", icon: <PeopleIcon /> },
  { key: "analytics", title: "Analytics", icon: <BarChartIcon /> },
  { key: "settings", title: "Settings", icon: <SettingsIcon /> },
];

const PageContent = ({ page }) => {
  switch (page) {
    case "dashboard":
      return <Typography variant="h5">Dashboard Overview</Typography>;
    case "users":
      return <Typography variant="h5">Users</Typography>;
    case "analytics":
      return <Typography variant="h5">Analytics</Typography>;
    case "settings":
      return <Typography variant="h5">Settings</Typography>;
    default:
      return <Typography variant="h5">Welcome Admin</Typography>;
  }
};

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("dashboard");

  return (
    <Box sx={{ display: "flex" }}>
      {/* NAVBAR */}
      <Navbar
        onToggleSidebar={() => setMobileOpen(!mobileOpen)}
        currentTitle={menuItems.find((m) => m.key === selectedPage)?.title}
      />

      {/* SIDEBAR */}
      <Sidebar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        drawerWidth={drawerWidth}
        navbarHeight={NAVBAR_HEIGHT}
        menuItems={menuItems}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          mt: `${NAVBAR_HEIGHT}px`,
          ml: { xs: 0, sm: `${drawerWidth}px` },
        }}
      >
        <PageContent page={selectedPage} />
      </Box>
    </Box>
  );
};

export default Dashboard;
