import React, { useEffect } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./assets/Components/Pages/Authentication/Register";
import Login from "./assets/Components/Pages/Authentication/Login";
import { cssStyles } from "./assets/Components/AppMeta/AppStyle/cssStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "./assets/Components/AppMeta/AppStyle/theme";
import PageIndex from "./assets/Components/Pages/page.index";
import HomeIndex from "./assets/Components/Pages/Home/home.index";
import DevicesIndex from "./assets/Components/Pages/Device/Devices.index";
import "./App.css";

function App() {
  //hooks
  const navigate = useNavigate();

  //states
  const user = useSelector((state) => state.userReducer);

  //Useeffect
  useEffect(() => {
    if (user.token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={cssStyles.mainBox}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PageIndex />}>
            <Route path="/home" element={<HomeIndex />}></Route>
            <Route path="/mydevice" element={<DevicesIndex />}></Route>
          </Route>
        </Routes>
        <ToastContainer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
