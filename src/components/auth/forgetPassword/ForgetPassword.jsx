import React, { useState } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import InputField from "../../layouts/inputField/InputField";

const ForgetPassword = () => {
  const [step, setStep] = useState(1); 

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      code: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),

      code: step === 2
        ? Yup.string().required("Verification code is required")
        : Yup.string(),
    }),

    onSubmit: (values) => {
      if (step === 1) {
        console.log("Sending code to:", values.email);
        setStep(2); 
      } else {
        console.log("Verifying code:", values.code);
      }
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
          mb={1}
          fontWeight={700}
        >
          Forgot Password
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          mb={3}
          sx={{ opacity: 0.9 }}
        >
          {step === 1
            ? "Enter your email and password to receive a verification code."
            : "Enter the verification code sent to your email."}
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <InputField
            label="Email Address"
            name="email"
            type="email"
            formik={formik}
            startIcon={<EmailIcon sx={{ color: "#fff" }} />}
            disabled={step === 2} 
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            formik={formik}
            startIcon={<LockIcon sx={{ color: "#fff" }} />}
            disabled={step === 2}
          />

          {step === 2 && (
            <InputField
              label="Verification Code"
              name="code"
              formik={formik}
            />
          )}

          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{
              mt: 1,
              py: 1.2,
              fontWeight: 600,
              letterSpacing: 1,
              borderRadius: 3,
              backgroundColor: "#0046d5",
              "&:hover": { backgroundColor: "#003bb5" },
            }}
          >
            {step === 1 ? "Send Code" : "Verify Code"}
          </Button>
        </form>

        <Typography
          component="p"
          onClick={() => window.history.back()}
          sx={{
            mt: 3,
            textAlign: "center",
            cursor: "pointer",
            textDecoration: "underline",
            color: "#fff",
            "&:hover": { opacity: 0.8 },
          }}
        >
          Back to Login
        </Typography>
      </Paper>
    </Box>
  );
};

export default ForgetPassword;
