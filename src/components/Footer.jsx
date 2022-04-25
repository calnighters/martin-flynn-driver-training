import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { externalUrls } from "../constants";

const Footer = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{
        bottom: 0,
        background: "transparent",
        marginBottom: "10px",
      }}
      elevation={0}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          window.location.href = externalUrls[newValue].url;
        }}
        sx={{
          background: "transparent",
          boxShadow: "none",
          elevation: 0,
        }}
      >
        <BottomNavigationAction
          label={externalUrls[0].name}
          icon={<FacebookIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
