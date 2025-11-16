import React from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
} from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";

import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";


import InputField from "../../layouts/inputField/InputField";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .required("Username is required"),

      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm your password"),
    }),

    onSubmit: (values) => {
      console.log("Registration data:", values);
    },
  });

  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(135deg, #0066ff, #33ccff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 450,
          p: 4,
          borderRadius: 4,
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          mb={3}
          fontWeight={700}
        >
          Create Account
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <InputField
            label="Username"
            name="username"
            formik={formik}
            startIcon={<PersonIcon sx={{ color: "#fff" }} />}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            formik={formik}
            startIcon={<EmailIcon sx={{ color: "#fff" }} />}
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            formik={formik}
            startIcon={<LockIcon sx={{ color: "#fff" }} />}
          />

          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            formik={formik}
            startIcon={<LockIcon sx={{ color: "#fff" }} />}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{
              py: 1.3,
              fontWeight: 600,
              letterSpacing: 1,
              borderRadius: 3,
              backgroundColor: "#0046d5",
              mt: 1,
              "&:hover": { backgroundColor: "#003bb5" },
            }}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
