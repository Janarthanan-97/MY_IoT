import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Dashboard/Navbar/navbar.topbar";
import BottomBar from "./Dashboard/Navbar/navbar.bottom";

function PageIndex() {
  return (
    <Box>
      <Topbar />
      <Box>
        <Box>
          <Outlet />
        </Box>
      </Box>
      <Box>
        <BottomBar />
      </Box>
    </Box>
  );
}

export default PageIndex;
