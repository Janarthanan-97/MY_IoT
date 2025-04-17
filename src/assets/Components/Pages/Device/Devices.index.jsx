import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import TableData from "../../CustomComponents/Tables/Tables.tableData";

function DevicesIndex() {
  let deviceList = ["Switch", "Router"];
  return (
    <Box>
      <TableContainer sx={{ marginTop: "1rem", width: "250px" }}>
        <Table>
          <TableHead className="tableHead">
            <TableRow>
              <TableCell sx={{ color: "white" }}>Devices</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deviceList.map((device) => (
              <TableRow>
                <TableCell>
                  <TableData>{device}</TableData>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default DevicesIndex;
