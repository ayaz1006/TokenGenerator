import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Tokens = ({ blueTokens, redTokens }) => {
  // Function to render tokens with a specific color and layout
  const renderTokens = (tokens, color) => (
    <Box
      sx={{
        display: "grid",
        gap: 1,
        gridTemplateColumns: `repeat(${tokens.tokensPerRow}, 1fr)`,
        mb: 3,
        width: "100%",
        maxWidth: "100%",
        overflow: "auto",
        "@media (max-width:600px)": {
          gridTemplateColumns: `repeat(${Math.min(
            tokens.tokensPerRow,
            2
          )}, 1fr)`,
        },
      }}
    >
      {Array.from({ length: tokens.number }).map((_, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 80,
            maxWidth: "100%",
            padding: "8px 12px",
            borderRadius: 1,
            backgroundColor: color,
            color: "white",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            boxSizing: "border-box",
            boxShadow: 1,
            border: `1px solid ${color}`,
            "@media (max-width:600px)": {
              fontSize: "0.8rem",
            },
          }}
        >
          {tokens.prefix}
          {index + 1}
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 600,
        marginBottom: "100px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxHeight: "50vh",
          overflow: "auto",
          backgroundColor: "pink",
          padding: 2,
          borderRadius: 2,
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "text.primary",
            textAlign: "center",
          }}
        >
          Blue Tokens
        </Typography>
        {renderTokens(blueTokens, "blue")}
      </Box>

      <Box
        sx={{
          width: "100%",
          maxHeight: "50vh",
          overflow: "auto",
          backgroundColor: "pink",
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "text.primary",
            textAlign: "center",
          }}
        >
          Red Tokens
        </Typography>
        {renderTokens(redTokens, "red")}
      </Box>
    </Box>
  );
};

export default Tokens;
