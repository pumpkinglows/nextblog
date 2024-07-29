import { createGlobalTheme, globalFontFace, style } from "@vanilla-extract/css";

// 전역 변수

export const vars = createGlobalTheme(":root", {
  font: {
    small: "1.4rem",
    normal: "1.6rem",
    slarge: "1.8rem",
    large: "2.1rem",
    xlarge: "2.4rem",
    xxlarge: "3.6rem",
    xxxlarge: "4.8rem",
    icon: "3rem",
  },
  color: {
    primary: "#008cf6",
    //
    border: "#c2c2c2", // border
    disabled: "#F5F5F5", // bg-disabled
    //
    gray_300: "#c9c9c9", //
    gray_400: "#707070", //
    gray_500: "#555555", // text-body
    gray_600: "#444444",
    gray_700: "#1d1d1d", // text-title
    // sysmtem Colors
    danger: "#EB003B",
    warning: "#FFB724",
    success: "#008A1E",
    info: "#2768FF",
  },
  weight: {
    regular: "400",
    medium: "500",
    bold: "600",
  },
  lineheight: {
    normal_140: "1.4",
    normal_150: "1.5",
    normal_160: "1.6",
  },
  border: {
    normal: "1rem",
    medium: "1.8rem",
    large: "2.6rem",
  },
});

const wantedSans = "wantedSans";

globalFontFace(wantedSans, {
  src: 'local("WantedSansVariable.woff2")',
});

export const font = style({
  fontFamily: wantedSans,
});
