import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper
} from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate,Link } from "react-router";


import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import InputField from "../../layouts/inputField/InputField";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      console.log("Submitted:", values);
      navigate('/basic-interface')
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
          maxWidth: 420,
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
          Welcome Back
        </Typography>

        <form onSubmit={formik.handleSubmit}>
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
            type={showPass ? "text" : "password"}
            formik={formik}
            startIcon={<LockIcon sx={{ color: "#fff" }} />}
            endIcon={showPass ? <VisibilityOff /> : <Visibility />}
            onEndIconClick={() => setShowPass(!showPass)}
          />
          <Typography
            component={Link}
            to="/forget-password"
            sx={{
              mt: 1,
              mb: 2,
              cursor: "pointer",
              textAlign: "right",
              color: "#fff",
              textDecoration: "underline",
              fontSize: "14px",
              "&:hover": { opacity: 0.8 }
            }}
          >
            Forgot Password?
          </Typography>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              py: 1.3,
              fontWeight: 600,
              letterSpacing: 1,
              borderRadius: 3,
              backgroundColor: "#0046d5",
              "&:hover": { backgroundColor: "#003bb5" },
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
