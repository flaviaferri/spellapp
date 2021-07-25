import "reset-css";
import { Global, css } from "@emotion/react";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@emotion/react";

const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

  html {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
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
