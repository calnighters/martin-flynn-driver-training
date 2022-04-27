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
import deleteItem from "../api/delete";
import get from "../api/get";
import update from "../api/update";
import { TYPE } from "../constants";
import MaterialTable from "@material-table/core";

const columns = [
  { title: "ID", field: "id", hidden: true },
  { title: "Type", field: "type" },
  { title: "Price", field: "price" },
];

const AdminPage = () => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [deleteId, setDeleteId] = useState();
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [createAlert, setCreateAlert] = useState(false);
  const [records, setRecords] = useState([]);
  const [prices, setPrices] = useState([]);

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
      : deleteItem(
          TYPE.TESTIMONIAL,
          deleteId,
          () => {
            const dataDelete = [...records];
            const index = records.filter((item) => item.id === deleteId)[0]
              .index;
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
          TYPE.TESTIMONIAL,
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
      TYPE.TESTIMONIAL,
      (result) => {
        setRecords(result.testimonials);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    get(
      TYPE.PRICE,
      (result) => {
        setPrices(result.prices);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const editable = {
    onRowAdd: (newData) =>
      new Promise((resolve, reject) =>
        setTimeout(() =>
          create(
            TYPE.PRICE,
            newData,
            () => {
              setPrices([...prices, newData]);
              resolve();
            },
            () => {
              reject();
            }
          )
        )
      ),
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          return update(
            TYPE.PRICE,
            {
              id: oldData.id,
              type: newData.type,
              price: newData.price,
            },
            () => {
              const dataUpdate = [...prices];
              const index = oldData.tableData.index;
              dataUpdate[index] = {
                id: oldData.id,
                type: newData.type,
                price: newData.price,
              };
              setPrices([...dataUpdate]);
              resolve();
            },
            () => {
              reject();
            }
          );
        }, 1000);
      }),
    onRowDelete: (oldData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          return deleteItem(
            TYPE.PRICE,
            oldData.id,
            () => {
              const dataDelete = [...prices];
              const index = oldData.tableData.index;
              dataDelete.splice(index, 1);
              setPrices([...dataDelete]);
              resolve();
            },
            () => {
              reject();
            }
          );
        }, 1000);
      }),
  };

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
            <MaterialTable
              style={{ width: "100%" }}
              title="Prices"
              columns={columns}
              data={prices.sort((a, b) => a.id - b.id)}
              options={{
                actionsColumnIndex: -1,
                paging: false,
                search: false,
                sorting: false,
              }}
              editable={editable}
            />
          </Stack>
        </CenterBox>
      </VeritcalAllignedBox>
    </DefaultLayout>
  );
};

export default AdminPage;
