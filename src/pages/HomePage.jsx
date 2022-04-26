import { Stack } from "@mui/material";
import CenterBox from "../components/CenterBox";
import VeritcalAllignedBox from "../components/VerticalAllignedBox";
import DefaultLayout from "../containers/DefaultLayout";
import BlockTypography from "../components/BlockTypography";

const HomePage = () => {
  return (
    <DefaultLayout>
      <VeritcalAllignedBox>
        <CenterBox>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            alignContent="center"
            alignItems="center"
          >
            <BlockTypography variant="h6">
              Covering all Telford areas
            </BlockTypography>
            <BlockTypography variant="h6">
              Reliable, punctual and patient
            </BlockTypography>
            <BlockTypography variant="h6">Excellent pass rates</BlockTypography>
          </Stack>
        </CenterBox>
        <CenterBox width={{ xs: "100%", sm: "50%" }}>
          <Stack spacing={2}>
            <BlockTypography>
              Whether you have just turned 17, or you've been meaning to take
              your driving test for a while, I can provide you with the correct
              tuition to be on your way to passing your driving test and driving
              safely for life.
            </BlockTypography>
            <BlockTypography>
              Choosing the right instructor to guide you is the first step to
              acheiving your goal.
            </BlockTypography>
            <BlockTypography>
              My name is Martin Flynn and I am a fully qualified approved
              driving instructor with over 12 years experience in teaching
              people like you. I am a former police officer with over 26 years
              experience as a police advanced driver, which you can benefit
              from, having worked in police traffic departments in the West
              Midlands and across the Midlands motorway network for over 20
              years.
            </BlockTypography>
            <BlockTypography>
              Learn to drive in a modern Ford Fiesta with reversing camera and
              parking sensors to make those manoeuvres easy.
            </BlockTypography>
            <BlockTypography>
              Competitively priced with an introductory offer for new drivers
              and offering discounts for block purchase of lessons, call me for
              a chat to discuss your requirements.
            </BlockTypography>
          </Stack>
        </CenterBox>
      </VeritcalAllignedBox>
    </DefaultLayout>
  );
};

export default HomePage;
