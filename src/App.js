import * as React from "react";
import Container from "@mui/material/Container";
import Form from "./components/Form";
import { CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";

function App() {
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
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Form />
      </Container>
    </>
  );
}

export default App;
