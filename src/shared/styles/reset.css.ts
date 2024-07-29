import { globalStyle } from "@vanilla-extract/css";
import { font } from "./theme.css";

// 각 브라우저별 css reset
globalStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontWeight: 400,
});
globalStyle("html, *", {
  fontSize: "10px",
});
globalStyle("body, *", {
  fontSize: "1.6rem",
  fontFamily: font,
});
globalStyle("body", {
  overflowY: "scroll",
});
globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
