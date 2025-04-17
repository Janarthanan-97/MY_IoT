import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#2b2d2f",
    },
    secondary: {
      main: "#2b2d2f",
    },
  },
});

export default theme;
