import { Typography } from "@mui/material";

const BlockTypography = ({ padding, variant, children }) => {
  return (
    <Typography
      display="block"
      textAlign="center"
      variant={variant}
      padding={padding}
    >
      {children}
    </Typography>
  );
};
export default BlockTypography;
