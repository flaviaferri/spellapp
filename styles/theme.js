const breakpoints = [576, 768, 992, 1200];

export const theme = {
  colors: {
    darkBlue: "#134071",
    lightPink: "#f2b9891",
    veryLightGrey: "e3e2cb",
    white: "#fff",
  },

  breakpoints: breakpoints.map((bp) => `@media (max-width: ${bp}px)`),
};
