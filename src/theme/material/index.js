import { createTheme } from "@mui/material";
import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";
import breakpoints from "./breakpoints";

const theme = createTheme({
  palette,
  typography,
  overrides,
  breakpoints,
});

export default theme;

export { palette, typography, overrides };
