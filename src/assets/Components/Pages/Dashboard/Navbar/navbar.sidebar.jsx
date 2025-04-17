import React, { useEffect, useState } from "react";
import MenuToggle from "./navbar.menuToggle";
import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "./navbar.useDimensions";
import Navigation from "./navbar.navigation";
import "./navbar.navIndex.css";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 1px 1px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(isMobile ? false : true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(true);
    }
  }, [isMobile]);

  return (
    <Box>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        style={{ position: isMobile ? "absolute" : "relative" }}
      >
        <motion.div
          className="background"
          variants={sidebar}
          style={{ backgroundColor: isOpen ? "#2b2d2f" : "transparent" }}
        />

        <Box>
          {isMobile && <MenuToggle toggle={() => setIsOpen(!isOpen)} />}
          {isMobile && isOpen && <Navigation setIsOpen={setIsOpen} />}
          {!isMobile && <Navigation setIsOpen={setIsOpen} />}
        </Box>
      </motion.nav>
    </Box>
  );
}

export default Sidebar;
