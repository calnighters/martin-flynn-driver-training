import { Stack } from "@mui/material";
import CenterBox from "./CenterBox";
import VeritcalAllignedBox from "./VerticalAllignedBox";

const UsefulLink = ({ url, src, description }) => {
  return (
    <CenterBox>
      <Stack>
        <VeritcalAllignedBox>
          <a href={url}>
            <img src={src} alt={description} />
          </a>
          <div style={{ textAlign: "center" }}>{description}</div>
        </VeritcalAllignedBox>
      </Stack>
    </CenterBox>
  );
};
export default UsefulLink;
