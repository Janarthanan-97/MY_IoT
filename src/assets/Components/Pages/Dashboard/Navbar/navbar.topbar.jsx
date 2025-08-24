import { Box } from "@mui/material";
import Logout from "../../Authentication/Logout";
import appMeta from "../../../AppMeta/AppConstants/appMeta";

function Topbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        background: appMeta.colorPallet.backgroundDM,
      }}
    >
      <Box></Box>
      <Logout />
    </Box>
  );
}

export default Topbar;
