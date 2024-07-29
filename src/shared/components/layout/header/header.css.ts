import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  alignItems: "center",
  height: "8rem",
  justifyContent: "space-between",
  cursor: "pointer",

  "@media": {
    "only screen and (max-width: 768px)": {
      height: "2rem",
    },
  },
});

export const link = style({
  textDecoration: "none",
  color: "inherit",
});
