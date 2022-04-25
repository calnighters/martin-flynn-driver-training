import { Stack } from "@mui/material";
import BlockTypography from "../components/BlockTypography";
import CenterBox from "../components/CenterBox";
import VeritcalAllignedBox from "../components/VerticalAllignedBox";
import DefaultLayout from "../containers/DefaultLayout";

const TestsPage = () => {
  const theory = 25;
  const practical = 62;
  return (
    <DefaultLayout>
      <VeritcalAllignedBox marginTop={2}>
        <BlockTypography variant="h4">Practical & Theory Tests</BlockTypography>
        <CenterBox width={{ xs: "100%", sm: "50%" }}>
          <Stack spacing={2}>
            <BlockTypography>
              Don't delay taking your theory test, it should be one of the first
              things you consider doing. The theory test is currently valid for
              2 years. You are probably aware that there is a backlog for tests
              and waiting times especially at Telford are very long. However
              there are tests available at other test centres and cancellations
              are frequently available at Telford. I can advise you booking your
              test.
            </BlockTypography>
            <BlockTypography>
              Only book your theory and practical tests on the offical gov.uk
              website. There are plenty of official looking websites that will
              charge a handling fee to book the test on your behalf. You should
              not currently pay anymore than £{theory} for your theory test and
              £{practical} for the practical test.
            </BlockTypography>
          </Stack>
        </CenterBox>
      </VeritcalAllignedBox>
    </DefaultLayout>
  );
};

export default TestsPage;
