import React from "react";
import { AppBar, Toolbar, Button, Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, Link } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <AppBar position="static" color="primary" elevation={4}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="inherit" onClick={handleBack}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton color="inherit" component={Link} to="/">
            <HomeIcon />
          </IconButton>

          <Typography variant="h6" sx={{ ml: 1 }}>
            SY 
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} to="/login" variant="outlined" color="inherit">
            Login
          </Button>

          <Button
            component={Link}
            to="/register"
            variant="contained"
            color="secondary"
            sx={{ color: "#fff" }}
          >
            Register
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
