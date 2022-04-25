import React from "react";
import { Box } from "@mui/system";

const CenterBox = ({
  children,
  height,
  width,
  padding,
  disableVerticalCenter,
  disableCenter,
}) => (
  <Box
    display="flex"
    width={width || "100%"}
    justifyContent={disableCenter ? "left" : "center"}
    alignItems={disableVerticalCenter ? "left" : "center"}
    height={height}
    style={{ padding: padding || "25px" }}
    boxShadow="none"
  >
    {children}
  </Box>
);

export default CenterBox;
