import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import NavBar from "../layouts/navBar/NavBar";

const HomePage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />

      <Box
        sx={{
          flex: 1,
          background: "linear-gradient(135deg,rgb(2, 26, 62) 0%, #1976d2 50%,rgb(0, 23, 54) 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 60%)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            top: "-120px",
            right: "-100px",
            filter: "blur(40px)",
          }}
        />

        <Container maxWidth="md" sx={{ zIndex: 2 }}>
          <Box sx={{ textAlign: "center", mt: { xs: 4, md: 0 }, color: "#fff" }}>
            
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 2,
                lineHeight: 1.2,
                letterSpacing: "-0.5px",
                textShadow: "0 4px 20px rgba(0,0,0,0.25)",
              }}
            >
              Empower Your Digital Experience
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 300,
                mb: 5,
                lineHeight: 1.7,
                maxWidth: "650px",
                mx: "auto",
                opacity: 0.9,
              }}
            >
              Build fast, modern, and stunning applications with clean,  
              professional UI crafted for the next generation of the web.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#0d47a1",
                  px: 4,
                  py: 1.3,
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "0 4px 15px rgba(255,255,255,0.3)",
                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                  },
                }}
              >
                Get Started
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  px: 4,
                  py: 1.3,
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Learn More
              </Button>
            </Box>

          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
