import "reset-css";
import { Global, css } from "@emotion/react";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@emotion/react";

const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,800;1,400&display=swap");

  html {
    font-family: "Nunito", sans-serif;
    font-size: 10px;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={style} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
