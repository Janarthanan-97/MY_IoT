import React from "react";
import { motion } from "framer-motion";

function TableData({ children }) {
  let tableCellHoverAnimate = {
    hidden: { width: 0 },
    visible: { width: "10px", transition: { duration: 0.25, type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      whileHover="visible"
      style={{ display: "flex", height: "100%", backgroundColor: "red" }}
    >
      <motion.div
        variants={tableCellHoverAnimate}
        style={{
          backgroundColor: "red",
          height: "2rem",
          border: "1px solid black",
        }}
      ></motion.div>
      {children}
    </motion.div>
  );
}

export default TableData;
