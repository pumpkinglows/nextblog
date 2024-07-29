import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  margin: "0 auto",
  maxWidth: "64rem",
  width: "100%",

  "@media": {
    "only screen and (max-width: 768px)": {
      padding: "20px",
    },
  },
});

export const innerWrap = style({
  minHeight: "100%",
  paddingBottom: "8rem",
});
