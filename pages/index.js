import { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Head from "next/head";

import Input from "../components/Input";
import Output from "../components/Output";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

const Page = styled.main(
  () => css`
    display: flex;
    min-height: 100vh;
    height: 100%;
    flex-direction: column;
  `
);

const Wrapper = styled.section(
  ({ theme }) => css`
    padding: 3rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    flex: 1;

    ${theme.breakpoints[1]} {
      flex-direction: row;
      justify-content: space-evenly;
      max-width: 980px;
      margin: 7.5rem auto;
    }
  `
);

export default function Home() {
  const [wordToSpell, setWordToSpell] = useState("");

  return (
    <Page>
      <Head>
        <title>NATO phonetic alphabet online translator</title>
        <meta
          name="description"
          content="NATO phonetic alphabet online translator made by Flavia Ferri"
        />
        <link rel="shortcut icon" href="/fav.ico" />
      </Head>

      <Logo />

      <Wrapper>
        <Input handleChange={setWordToSpell} wordToSpell={wordToSpell} />

        <Output wordToSpell={wordToSpell} />
      </Wrapper>
      <Footer />
    </Page>
  );
}
