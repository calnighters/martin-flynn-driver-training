import { Stack } from "@mui/material";
import CenterBox from "../components/CenterBox";
import VeritcalAllignedBox from "../components/VerticalAllignedBox";
import DefaultLayout from "../containers/DefaultLayout";
import BlockTypography from "../components/BlockTypography";
import { externalUrls } from "../constants";
import UsefulLink from "../components/UsefulLink";
import React from "react";

const UsefulLinksPage = () => {
  return (
    <DefaultLayout>
      <VeritcalAllignedBox marginTop={2}>
        <BlockTypography variant="h4">Useful Links</BlockTypography>
        <CenterBox width={{ xs: "100%", sm: "50%" }}>
          <Stack spacing={0} alignContent="center" alignItems="center">
            {externalUrls
              .filter((url) => url.type === "info")
              .map(({ name, url, icon, description }) => {
                return (
                  <React.Fragment key={name}>
                    <UsefulLink
                      url={url}
                      src={icon}
                      description={description}
                    />
                  </React.Fragment>
                );
              })}
          </Stack>
        </CenterBox>
      </VeritcalAllignedBox>
    </DefaultLayout>
  );
};

export default UsefulLinksPage;
