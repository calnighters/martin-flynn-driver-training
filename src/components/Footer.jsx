import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  styled,
} from "@mui/material";
import { externalUrls } from "../constants";

const StyledBottomNavigationAction = styled(BottomNavigationAction)(`
  color: #dc4b44;
  &.Mui-selected {
    color: #dc4b44;
  }
`);

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
              <StyledBottomNavigationAction
                key={name}
                label={name}
                icon={icon}
                sx={{ background: "transparent" }}
              />
            );
          })}
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
