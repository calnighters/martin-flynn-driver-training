import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { externalUrls } from "../constants";

const Footer = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{
        bottom: 0,
        background: "transparent",
        marginBottom: "10px",
        width: "100%",
      }}
      elevation={0}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          window.location.href = externalUrls.filter(
            (url) => url.type === "contact"
          )[newValue].url;
        }}
        sx={{
          background: "transparent",
          boxShadow: "none",
          elevation: 0,
        }}
      >
        {externalUrls
          .filter((url) => url.type === "contact")
          .map(({ name, icon }) => {
            return (
              <BottomNavigationAction key={name} label={name} icon={icon} />
            );
          })}
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
