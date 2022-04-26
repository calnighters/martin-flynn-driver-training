import React from "react";
import { Box } from "@mui/system";

const VeritcalAllignedBox = ({
  children,
  height,
  width,
  marginTop,
  marginBottom,
}) => {
  return (
    <Box
      marginTop={marginTop || 2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={width || "100%"}
      height={height || "100%"}
      marginBottom={marginBottom || 1}
      boxShadow="none"
    >
      {children}
    </Box>
  );
};

export default VeritcalAllignedBox;
