import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import DrawerComponent from "./DrawerComponent";
import endpoints from "../routes/endpoints";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const theme = useTheme();
  let navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" sx={{ bgcolor: "#dc4b44" }}>
      <Toolbar>
        <Typography
          onClick={() => navigate("/")}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
          Martin Flynn Driver Training
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <>
            {endpoints
              .filter((endpoint) => endpoint.navbar)
              .map(({ name, path }) => (
                <Button
                  key={name}
                  color="inherit"
                  onClick={() => navigate(path)}
                >
                  {name}
                </Button>
              ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
