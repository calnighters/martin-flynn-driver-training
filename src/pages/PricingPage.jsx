import { Stack } from "@mui/material";
import BlockTypography from "../components/BlockTypography";
import CenterBox from "../components/CenterBox";
import PricingTable from "../components/PricingTable";
import VeritcalAllignedBox from "../components/VerticalAllignedBox";
import DefaultLayout from "../containers/DefaultLayout";

const PricingPage = () => {
  return (
    <DefaultLayout>
      <VeritcalAllignedBox marginTop={2}>
        <BlockTypography variant="h4">Prices for 2022</BlockTypography>
        <CenterBox width={{ xs: "100%", sm: "50%" }}>
          <PricingTable />
        </CenterBox>
      </VeritcalAllignedBox>
    </DefaultLayout>
  );
};

export default PricingPage;
