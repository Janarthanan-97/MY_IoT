import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Dashboard/Navbar/navbar.topbar";
import Sidebar from "./Dashboard/Navbar/navbar.sidebar";

function PageIndex() {
  return (
    <Box>
      <Topbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, padding: "1rem" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default PageIndex;
