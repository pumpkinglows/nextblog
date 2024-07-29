import { vars } from "@/shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
});

export const post = style({
  padding: "2.4rem 0",
});

export const title = style({
  fontWeight: 700,
  fontSize: vars.font.xlarge,
  color: vars.color.gray_700,

  ":hover": {
    color: vars.color.primary,
  },
});

export const date = style({
  fontSize: "1.4rem",
  marginTop: "0.4rem",
  color: vars.color.gray_400,
});

export const description = style({
  marginTop: "1rem",
  color: vars.color.gray_400,
});
