import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { useEffect, useState } from "react";
import get from "../api/get";
import { TYPE } from "../constants";

const columns = [{ name: "Type" }, { name: "Price" }];
const PricingTable = () => {
  const [prices, setPrices] = useState([]);

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

  return (
    <TableContainer style={{ padding: "20px" }} component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {columns.map(({ name }) => (
              <TableCell sx={{ fontWeight: "bold" }}>{name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {prices
            .sort((a, b) => a.id - b.id)
            .map(({ id, type, price }) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={id}
              >
                <TableCell>{type}</TableCell>
                <TableCell>£{price}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PricingTable;
