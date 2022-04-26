import {
  Rating,
  Stack,
  TextareaAutosize,
  TextField,
  Button,
  Select,
  MenuItem,
  Alert,
  AlertTitle,
} from "@mui/material";
import VeritcalAllignedBox from "../components/VerticalAllignedBox";
import DefaultLayout from "../containers/DefaultLayout";
import BlockTypography from "../components/BlockTypography";
import CenterBox from "../components/CenterBox";
import VerticalPaper from "../components/VerticalPaper";
import { useEffect, useState } from "react";
import create from "../api/create";
import deleteReview from "../api/delete";
import get from "../api/get";

const AdminPage = () => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [deleteId, setDeleteId] = useState();
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [createAlert, setCreateAlert] = useState(false);
  const [records, setRecords] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  const handleDeleteId = (e) => {
    setDeleteId(e.target.value);
  };

  const handleDeleteRequest = (e) => {
    deleteId === undefined
      ? setDeleteAlert(true)
      : deleteReview(
          deleteId,
          () => {
            const dataDelete = [...records];
            const index = records.filter((item) => item.id === deleteId)[0].id;
            dataDelete.splice(index, 1);
            setRecords([...dataDelete]);
            setDeleteId();
          },
          (error) => {
            console.log(error);
          }
        );
  };

  const handleCreateRequest = (e) => {
    name === "" || body === ""
      ? setCreateAlert(true)
      : create(
          {
            name: name,
            rating: rating,
            body: body,
          },
          () => {
            setBody("");
            setName("");
            setRating(0);
          },
          (error) => {
            console.log(error);
          }
        );
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
        <BlockTypography variant="h4">Admin</BlockTypography>
        <CenterBox width={{ xs: "100%", sm: "60%" }}>
          <Stack
            spacing={5}
            alignContent="center"
            alignItems="center"
            width={{ xs: "100%", sm: "60%" }}
          >
            <VerticalPaper
              width={{ xs: "100%", sm: "60%" }}
              sx={{ width: "100%" }}
            >
              <TextField
                label="Name"
                value={name}
                required
                onChange={handleNameChange}
              />
              <Rating
                value={rating}
                onChange={handleRatingChange}
                sx={{ justifyContent: "space-around" }}
              />
              <TextareaAutosize
                label="Body"
                required
                onChange={handleBodyChange}
                minRows={3}
                value={body}
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  resize: "vertical",
                  overflow: "auto",
                }}
              />
              <Button onClick={handleCreateRequest} sx={{ color: "#dc4b44" }}>
                Add Testimonial
              </Button>
              {createAlert && (
                <Alert
                  elevation={6}
                  severity="warning"
                  onClose={() => {
                    setCreateAlert(false);
                  }}
                >
                  <AlertTitle>More info required</AlertTitle>
                  Some fields are missing.
                </Alert>
              )}
            </VerticalPaper>
            <VerticalPaper
              width={{ xs: "100%", sm: "60%" }}
              sx={{ width: "100%" }}
            >
              {records && (
                <Select defaultValue={undefined} onChange={handleDeleteId}>
                  {records.map((item) => {
                    return (
                      <MenuItem key={item.id} value={item.id}>
                        {item.date} - {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              )}
              <Button onClick={handleDeleteRequest} sx={{ color: "#dc4b44" }}>
                Delete Testimonial
              </Button>
              {deleteAlert && (
                <Alert
                  elevation={6}
                  severity="warning"
                  onClose={() => {
                    setDeleteAlert(false);
                  }}
                >
                  <AlertTitle>More info required</AlertTitle>
                  Please select a testimonial to delete.
                </Alert>
              )}
            </VerticalPaper>
          </Stack>
        </CenterBox>
      </VeritcalAllignedBox>
    </DefaultLayout>
  );
};

export default AdminPage;
