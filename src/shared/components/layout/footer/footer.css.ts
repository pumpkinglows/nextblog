import { style } from "@vanilla-extract/css";

export const footer = style({
  display: "flex",
  alignItems: "end",
  justifyContent: "space-between",
  height: "8rem",
  position: "relative",
  transform: "translateY(-100%)",
});

export const p = style({
  fontSize: '1.4rem',
  color: '#9696967d',
});
