import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";

const InputField = ({
  label,
  name,
  type = "text",
  formik,
  startIcon,
  endIcon,
  onEndIconClick,
  ...props
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      type={type}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      sx={{
        mb: 2,
        "& .MuiOutlinedInput-root": { color: "#fff" },
        "& .MuiInputLabel-root": { color: "#e0e0e0" },
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#e0e0e0" },
      }}
      slotProps={{
        input: {
          startAdornment:
            startIcon ? (
              <InputAdornment position="start">{startIcon}</InputAdornment>
            ) : null,
          endAdornment:
            endIcon ? (
              <InputAdornment position="end">
                <IconButton
                  onClick={onEndIconClick}
                  edge="end"
                  sx={{ color: "#fff" }}
                >
                  {endIcon}
                </IconButton>
              </InputAdornment>
            ) : null,
        },
        inputLabel: { sx: { color: "#ffffffcc" } },
      }}
      {...props}
    />
  );
};

export default InputField;
