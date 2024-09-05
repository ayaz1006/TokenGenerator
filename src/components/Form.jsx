import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Form({ onGenerate, onClear }) {
  // State to manage form input values
  const [formValues, setFormValues] = useState({
    blueTokensNumber: "",
    blueTokenPrefix: "",
    blueTokensPerRow: "",
    redTokensNumber: "",
    redTokenPrefix: "",
    redTokensPerRow: "",
  });

  // State to manage validation errors
  const [errors, setErrors] = useState({});

  // Handles input changes and sanitizes input for number fields
  const handleChange = (event) => {
    const { id, value } = event.target;
    // Sanitize input for number fields
    const sanitizedValue =
      id.includes("PerRow") || id.includes("TokensNumber")
        ? value.replace(/[^\d]/g, "")
        : value;

    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: sanitizedValue,
    }));
  };

  // Validates form input values and sets errors
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    Object.keys(formValues).forEach((key) => {
      if (
        (key.includes("Number") || key.includes("PerRow")) &&
        (!/^\d+$/.test(formValues[key]) || formValues[key] === "")
      ) {
        newErrors[key] = "Please enter a positive whole number.";
        isValid = false;
      } else if (key.includes("PerRow") && parseInt(formValues[key], 10) < 1) {
        newErrors[key] = "Tokens per row must be greater than or equal to 1.";
        isValid = false;
      } else {
        newErrors[key] = ""; // Clear error if input is valid
      }
    });

    // Validate token prefix fields
    if (formValues.blueTokenPrefix.trim() === "") {
      newErrors.blueTokenPrefix = "Blue Token Prefix is mandatory.";
      isValid = false;
    }
    if (formValues.redTokenPrefix.trim() === "") {
      newErrors.redTokenPrefix = "Red Token Prefix is mandatory.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handles form submission and generates tokens if form is valid
  const handleGenerate = () => {
    if (validateForm()) {
      onGenerate({
        blueTokens: {
          number: parseInt(formValues.blueTokensNumber, 10),
          prefix: formValues.blueTokenPrefix,
          tokensPerRow: parseInt(formValues.blueTokensPerRow, 10),
        },
        redTokens: {
          number: parseInt(formValues.redTokensNumber, 10),
          prefix: formValues.redTokenPrefix,
          tokensPerRow: parseInt(formValues.redTokensPerRow, 10),
        },
      });
    }
  };

  // Clears form values and notifies parent to clear tokens
  const handleClear = () => {
    setFormValues({
      blueTokensNumber: "",
      blueTokenPrefix: "",
      blueTokensPerRow: "",
      redTokensNumber: "",
      redTokenPrefix: "",
      redTokensPerRow: "",
    });
    setErrors({});
    onClear(); // Notify the parent to clear tokens
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
            type="text"
            variant="outlined"
            value={formValues.blueTokensNumber}
            onChange={handleChange}
            error={!!errors.blueTokensNumber} // Show error if validation fails
            helperText={errors.blueTokensNumber} // Display error message
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
            type="text"
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
            type="text"
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
            type="text"
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
