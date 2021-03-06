const breakpoints = [576, 768];

export const theme = {
  colors: {
    purple: "#be4fe4",
    veryLightGrey: "#f9f9f9",
    white: "#fff",
    black: "#000",
  },

  breakpoints: breakpoints.map((bp) => `@media (min-width: ${bp}px)`),
};
