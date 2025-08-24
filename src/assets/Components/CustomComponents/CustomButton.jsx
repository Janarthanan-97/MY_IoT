import { Button } from "@mui/material";
import React from "react";
import appMeta from "../AppMeta/AppConstants/appMeta";

function CustomButton({ handleClick, label }) {
  return (
    <Button
      onClick={handleClick}
      sx={{ color: "white", background: appMeta.colorPallet.secondary }}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
