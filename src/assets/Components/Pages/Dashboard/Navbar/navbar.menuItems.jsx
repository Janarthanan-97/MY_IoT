import React from "react";
import { color, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

function MenuItems({ i, setIsOpen }) {
  let theme = useTheme();
  let isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  //object
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  //hooks
  let navigate = useNavigate();

  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
  const placeholderText = [
    "Home",
    "My device",
    "placeholder",
    "placeholder",
    "placeholder",
  ];
  const icons = [<i class="fa-solid fa-house"></i>, "", "", "", ""];
  const navigateRoute = ["/home", "/mydevice", "/home", "/home", "/home"];
  const iconStyle = {
    border: `2px solid ${colors[i]}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: `${colors[i]}`,
    backgroundColor: `#ffffff98`,
  };
  const placeholderStyle = {
    border: `2px solid ${colors[i]}`,
    backgroundColor: `#ffffff98`,
    color: `$ffffff40`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
  };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        navigate(navigateRoute[i]);
        isMobile ? setIsOpen(false) : setIsOpen(true);
      }}
    >
      <div className="icon-placeholder" style={iconStyle}>
        <i class="fa-solid fa-house"></i>
      </div>
      <div className="text-placeholder" style={placeholderStyle}>
        {placeholderText[i]}
      </div>
    </motion.li>
  );
}

export default MenuItems;
