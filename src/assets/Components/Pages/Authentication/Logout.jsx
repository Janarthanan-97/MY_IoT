import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import appMeta from "../../AppMeta/AppConstants/appMeta";
import CustomButton from "../../CustomComponents/CustomButton";

function Logout() {
  // hooks
  let navigate = useNavigate();
  // function
  let handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return <CustomButton handleClick={handleLogout} lable="Logout" />;
}

export default Logout;
