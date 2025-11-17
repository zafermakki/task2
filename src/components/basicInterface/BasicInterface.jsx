import React from "react";
import { Box, Typography, Button, Paper, Grid } from "@mui/material";
import NavBar from "../layouts/navBar/NavBar";

const BasicInterface = () => {

    return(
        <>
            <NavBar/>

            <Box
                sx={{
                minHeight: "100vh",
                background: "linear-gradient(to bottom right, #1e88e5, #42a5f5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 3,
                }}
            >
            <Paper
            elevation={6}
            sx={{
                width: "100%",
                maxWidth: 900,
                p: 4,
                borderRadius: 4,
                textAlign: "center",
                backgroundColor: "white",
            }}
            >
            <Typography variant="h4" fontWeight="bold" color="primary" mb={2}>
                Hello and Welcome again!
            </Typography>

            <Typography variant="body1" color="text.secondary" mb={4}>
                Welcome! Now you can learn from here and gain practical experience in many fields. Let's get started together!
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                <Grid item>
                    <Button variant="contained" color="primary" sx={{ px: 4, py: 1.2 }}>
                        Get Started
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary" sx={{ px: 4, py: 1.2 }}>
                        Learn More
                    </Button>
                </Grid>
          </Grid>
        </Paper>
      </Box>
        </>
    )
}

export default BasicInterface;