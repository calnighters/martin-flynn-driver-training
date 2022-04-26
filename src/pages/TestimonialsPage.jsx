import { Button, Paper, Rating, Stack } from "@mui/material";
import testimonials from "../testimonials";
import VeritcalAllignedBox from "../components/VerticalAllignedBox";
import DefaultLayout from "../containers/DefaultLayout";
import BlockTypography from "../components/BlockTypography";
import CenterBox from "../components/CenterBox";
import { useState } from "react";
import { firstBy } from "thenby";

const TestimonialsPage = () => {
  const [recordCount, setRecordCount] = useState(3);

  const handleOnClick = (e) => {
    setRecordCount(recordCount + 3);
  };

  const records = testimonials
    .sort(
      firstBy(function (a, b) {
        return a.rating - b.rating;
      }).thenBy(function (a, b) {
        return a.id - b.id;
      })
    )
    .reverse();

  return (
    <DefaultLayout>
      <VeritcalAllignedBox>
        <BlockTypography variant="h4">Testimonials</BlockTypography>
        <CenterBox width={{ xs: "100%", sm: "50%" }}>
          <Stack
            spacing={2}
            alignContent="center"
            alignItems="center"
            width={{ xs: "100%", sm: "50%" }}
          >
            {records
              .slice(0, recordCount)
              .reverse()
              .map(({ id, rating, body }) => {
                return (
                  <Paper key={id} sx={{ width: "100%", textAlign: "center" }}>
                    <BlockTypography padding={1}>{body}</BlockTypography>
                    <Rating value={rating} readOnly />
                  </Paper>
                );
              })
              .reverse()}
            {recordCount >= records.length ? (
              <></>
            ) : (
              <Button sx={{ color: "#dc4b44" }} onClick={handleOnClick}>
                Show More
              </Button>
            )}
          </Stack>
        </CenterBox>
      </VeritcalAllignedBox>
    </DefaultLayout>
  );
};

export default TestimonialsPage;
