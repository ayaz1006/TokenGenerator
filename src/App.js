import React, { useState } from "react";
import Container from "@mui/material/Container";
import Form from "./components/Form";
import Tokens from "./components/Tokens";
import { CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";

function App() {
  // State to store tokens data for blue and red tokens
  const [tokens, setTokens] = useState({
    blueTokens: {
      number: 0,
      prefix: "",
      tokensPerRow: 0,
    },
    redTokens: {
      number: 0,
      prefix: "",
      tokensPerRow: 0,
    },
  });

  // Handler to update tokens state when new tokens are generated
  const handleGenerateTokens = (generatedTokens) => {
    setTokens(generatedTokens);
  };

  // Handler to reset tokens state to initial values
  const handleClearTokens = () => {
    setTokens({
      blueTokens: {
        number: 0,
        prefix: "",
        tokensPerRow: 0,
      },
      redTokens: {
        number: 0,
        prefix: "",
        tokensPerRow: 0,
      },
    });
  };

  return (
    <>
      <CssBaseline />
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "primary.main",
          marginBottom: 2,
          fontWeight: "bold",
          paddingTop: 4,
        }}
      >
        Token Generator
      </Typography>
      {/* Container to center content and apply padding */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Form onGenerate={handleGenerateTokens} onClear={handleClearTokens} />
        <Tokens blueTokens={tokens.blueTokens} redTokens={tokens.redTokens} />
      </Container>
    </>
  );
}

export default App;
