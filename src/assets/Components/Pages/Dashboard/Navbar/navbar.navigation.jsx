import React from "react";
import { motion } from "framer-motion";
import MenuItems from "./navbar.menuItems";

function Navigation({ setIsOpen }) {
  const itemIds = [0, 1, 2, 3, 4];
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  return (
    <motion.ul variants={variants}>
      {itemIds.map((i) => {
        return <MenuItems i={i} key={i} setIsOpen={setIsOpen} />;
      })}
    </motion.ul>
  );
}

export default Navigation;
