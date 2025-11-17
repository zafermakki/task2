import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ onToggleSidebar, currentTitle }) => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#1976d2" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onToggleSidebar}
          sx={{ display: { sm: "none" }, mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" fontWeight="bold">
          {currentTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
