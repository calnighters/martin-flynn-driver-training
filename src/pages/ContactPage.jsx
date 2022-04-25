import { Stack } from "@mui/material";
import BlockTypography from "../components/BlockTypography";
import CenterBox from "../components/CenterBox";
import VeritcalAllignedBox from "../components/VerticalAllignedBox";
import DefaultLayout from "../containers/DefaultLayout";
import { phoneNumber, email } from "../constants";

const ContactPage = () => {
  return (
    <DefaultLayout>
      <VeritcalAllignedBox marginTop={2}>
        <BlockTypography variant="h4">Contact Me</BlockTypography>
        <CenterBox width={{ xs: "100%", sm: "50%" }}>
          <Stack spacing={2}>
            <BlockTypography>
              Call or email me for further information about what I can offer
              you.
            </BlockTypography>
            <BlockTypography>
              If I'm unable to answer your call please leave a message and I
              will get straight back to you.
            </BlockTypography>
            <BlockTypography>Martin Flynn Driver Training</BlockTypography>
            <BlockTypography>Telephone: {phoneNumber}</BlockTypography>
            <BlockTypography>Email: {email}</BlockTypography>
          </Stack>
        </CenterBox>
      </VeritcalAllignedBox>
    </DefaultLayout>
  );
};

export default ContactPage;
