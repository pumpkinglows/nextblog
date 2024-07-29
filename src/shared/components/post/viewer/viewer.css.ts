import { vars } from "@/shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
});

export const header = style({
  textAlign: "center",
  marginBottom: "6rem",
});
export const title = style({
  fontWeight: vars.weight.bold,
  fontSize: vars.font.xlarge,
  marginBottom: "12px",
});
export const categories = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "12px",
});
export const date = style({
  marginTop: "12px",
  color: vars.color.gray_400,
  fontSize: vars.font.small,
});
export const h2 = style({
  fontWeight: vars.weight.bold,
  fontSize: vars.font.xlarge,
  marginBottom: "1.4rem",
});
export const h3 = style({
  fontWeight: vars.weight.bold,
  fontSize: vars.font.slarge,
  marginBottom: "0.6rem",
});
export const p = style({
  marginBottom: "4rem",
  lineHeight: "1.8",
  color: vars.color.gray_500,
});
