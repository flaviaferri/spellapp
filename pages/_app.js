import "reset-css";
import { Global, css } from "@emotion/react";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@emotion/react";

const style = css`
  /*   @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,800;1,400&display=swap");
 */
  body {
    min-height: 100vh;
    /*  min-height: -webkit-fill-available; */
  }

  html {
    font-family: "Nunito", sans-serif;
    font-size: 10px;
    box-sizing: border-box;
    background-color: #f9f9f9;
    min-height: 100vh;
    /* height: -webkit-fill-available; */
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
