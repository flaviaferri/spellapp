import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Label from "../Label";
import HeartIcon from "../HeartIcon";

const FooterElement = styled.footer(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("/backgroundFooter.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    padding: 22rem 3rem 0 3rem;
  `
);

const Wrapper = styled.div(
  ({ theme }) => css`
    max-width: 980px;
    z-index: 1;
    background-color: ${theme.colors.purple};
  `
);

const Text = styled.p(
  ({ theme }) => css`
    font-size: 1.8rem;
    max-width: 980px;
    line-height: 3.5rem;
    color: ${theme.colors.white};
    margin-bottom: 3rem;
  `
);

const CopyRight = styled.p(
  ({ theme }) => css`
    font-size: 1.6rem;
    text-align: center;
    font-weight: 600;
    color: ${theme.colors.white};
    margin-bottom: 3rem;

    a {
      color: ${theme.colors.white};
    }
  `
);

export default function Footer() {
  return (
    <FooterElement>
      <Wrapper>
        <Label color="white">Why I built this?</Label>
        <Text>
          I’m a Brazilian living in the Netherlands that always struggles to
          spell my address, name, and personal through the phone making the
          person on the other side of the line suffer. I discovered NATO
          phonetic alphabet is an awesome way to spell things and decided to
          automate the process to transform what I want to spell to the NATO
          format.
        </Text>
        <Label color="white">What‘s NATO?</Label>
        <Text>
          The NATO phonetic alphabet is a Spelling Alphabet, a set of words used
          instead of letters in oral communication (i.e. over the phone or
          military radio). Each word {"code word"} stands for its initial letter
          (alphabetical {"symbol"}).
        </Text>
        <CopyRight>
          Made with <HeartIcon /> by{" "}
          <a href="https://flaviaferri.dev/"> Flavia Ferri </a>
        </CopyRight>
      </Wrapper>
    </FooterElement>
  );
}
