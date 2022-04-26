import { Paper, Stack } from "@mui/material";
import CenterBox from "./CenterBox";
import VeritcalAllignedBox from "./VerticalAllignedBox";

const VerticalPaper = ({ children, width, sx }) => {
  return (
    <Paper sx={sx}>
      <CenterBox width="100%">
        <VeritcalAllignedBox width="100%">
          <Stack spacing={2} width="100%">
            {children}
          </Stack>
        </VeritcalAllignedBox>
      </CenterBox>
    </Paper>
  );
};

export default VerticalPaper;
