import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Label from "../Label";

const FooterElement = styled.footer(
  () => css`
    background-image: url("/backgroundFooter.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    display: flex;
    align-items: center;
    justify-content: center;
  `
);

const Wrapper = styled.div(
  () => css`
    max-width: 1280px;
    padding: 9rem 2rem;
    margin-top: 5rem;
  `
);

const Text = styled.p(
  ({ theme }) => css`
    font-size: 1.8rem;
    max-width: 1280px;
    line-height: 3.5rem;
    color: ${theme.colors.white};
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
      </Wrapper>
    </FooterElement>
  );
}
