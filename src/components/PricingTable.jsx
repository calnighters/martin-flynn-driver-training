import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import prices from "../prices";

const columns = [{ name: "Type" }, { name: "Price" }];
const PricingTable = () => {
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
          {prices.map(({ name, price }) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{name}</TableCell>
              <TableCell>£{price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PricingTable;
