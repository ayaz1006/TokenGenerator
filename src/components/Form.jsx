import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function FormPropsTextFields() {
  // State object for form fields
  const [formValues, setFormValues] = useState({
    blueTokensNumber: "",
    blueTokenPrefix: "",
    blueTokensPerRow: "",
    redTokensNumber: "",
    redTokenPrefix: "",
    redTokensPerRow: "",
  });

  // State object for validation errors
  const [errors, setErrors] = useState({
    blueTokensNumber: "",
    blueTokenPrefix: "",
    blueTokensPerRow: "",
    redTokensNumber: "",
    redTokenPrefix: "",
    redTokensPerRow: "",
  });

  // Handle input changes for all fields
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Check each form field for validity
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key]) {
        newErrors[key] = "This field is required.";
        isValid = false;
      } else {
        newErrors[key] = "";
      }
    });

    // Update errors state
    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleGenerate = () => {
    if (validateForm()) {
      // Form is valid, perform the generate logic here
      console.log("Form submitted with values:", formValues);
    }
  };

  // Clear all form fields and validation errors
  const handleClear = () => {
    setFormValues({
      blueTokensNumber: "",
      blueTokenPrefix: "",
      blueTokensPerRow: "",
      redTokensNumber: "",
      redTokenPrefix: "",
      redTokensPerRow: "",
    });
    setErrors({
      blueTokensNumber: "",
      blueTokenPrefix: "",
      blueTokensPerRow: "",
      redTokensNumber: "",
      redTokenPrefix: "",
      redTokensPerRow: "",
    });
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: { xs: "90%", sm: "80%", md: "50%", lg: "50%" },
        width: "100%",
        margin: "auto",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "background.paper",
      }}
      noValidate
      autoComplete="off"
    >
      {/* Blue Tokens Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          mb: 3,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Blue Tokens
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          <TextField
            required
            id="blueTokensNumber"
            label="Number of Blue Tokens"
            type="number"
            variant="outlined"
            value={formValues.blueTokensNumber}
            onChange={handleChange}
            error={!!errors.blueTokensNumber} // Display error state
            helperText={errors.blueTokensNumber}
          />
          <TextField
            required
            id="blueTokenPrefix"
            label="Blue Token Prefix"
            type="text"
            variant="outlined"
            value={formValues.blueTokenPrefix}
            onChange={handleChange}
            error={!!errors.blueTokenPrefix}
            helperText={errors.blueTokenPrefix}
          />
          <TextField
            required
            id="blueTokensPerRow"
            label="Blue Tokens Per Row"
            type="number"
            variant="outlined"
            value={formValues.blueTokensPerRow}
            onChange={handleChange}
            error={!!errors.blueTokensPerRow}
            helperText={errors.blueTokensPerRow}
          />
        </Box>
      </Box>

      {/* Red Tokens Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          mb: 3,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Red Tokens
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          <TextField
            required
            id="redTokensNumber"
            label="Number of Red Tokens"
            type="number"
            variant="outlined"
            value={formValues.redTokensNumber}
            onChange={handleChange}
            error={!!errors.redTokensNumber}
            helperText={errors.redTokensNumber}
          />
          <TextField
            required
            id="redTokenPrefix"
            label="Red Token Prefix"
            type="text"
            variant="outlined"
            value={formValues.redTokenPrefix}
            onChange={handleChange}
            error={!!errors.redTokenPrefix}
            helperText={errors.redTokenPrefix}
          />
          <TextField
            required
            id="redTokensPerRow"
            label="Red Tokens Per Row"
            type="number"
            variant="outlined"
            value={formValues.redTokensPerRow}
            onChange={handleChange}
            error={!!errors.redTokensPerRow}
            helperText={errors.redTokensPerRow}
          />
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          width: "100%",
        }}
      >
        <Button color="primary" variant="contained" onClick={handleGenerate}>
          Generate
        </Button>
        <Button color="error" variant="contained" onClick={handleClear}>
          Clear
        </Button>
      </Box>
    </Box>
  );
}
