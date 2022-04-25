import { Typography } from "@mui/material";

const BlockTypography = ({ variant, children }) => {
  return (
    <Typography display="block" textAlign="center" variant={variant}>
      {children}
    </Typography>
  );
};
export default BlockTypography;
