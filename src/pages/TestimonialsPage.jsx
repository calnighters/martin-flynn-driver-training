import { Button, Paper, Rating, Stack } from "@mui/material";
import VeritcalAllignedBox from "../components/VerticalAllignedBox";
import DefaultLayout from "../containers/DefaultLayout";
import BlockTypography from "../components/BlockTypography";
import CenterBox from "../components/CenterBox";
import { useEffect, useState } from "react";
import get from "../api/get";

const TestimonialsPage = () => {
  const [recordCount, setRecordCount] = useState(3);
  const [records, setRecords] = useState([]);

  const handleOnClick = (e) => {
    setRecordCount(recordCount + 3);
  };

  useEffect(() => {
    get(
      (result) => {
        setRecords(result.testimonials);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

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
