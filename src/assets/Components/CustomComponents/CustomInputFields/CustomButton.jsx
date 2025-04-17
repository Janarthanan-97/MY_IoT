import { Button } from "@mui/material";
import React from "react";

function CustomButton({ label, onClick }) {
  return (
    <>
      <Button onClick={onClick}>{label}</Button>
    </>
  );
}

export default CustomButton;
