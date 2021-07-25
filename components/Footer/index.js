import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Label from "../Label";

const FooterElement = styled.footer(
  ({ theme }) => css`
    background-image: url("/backgroundFooter.svg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 48rem;
    background-position: center;
    display: flex;
    align-items: flex-end;

    ${theme.breakpoints[1]} {
      height: 41rem;
    }
  `
);

const Wrapper = styled.div(
  ({ theme }) => css`
    max-width: 1280px;
    padding: 2rem;
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
          spell my Dutch address, name, and personal through the phone making
          the person on the other side of the line suffer. I discovered NATO
          phonetic alphabet is a awesome way to spell things and decided to
          automate the process to transform what I want to spell to the NATO
          format.
        </Text>
      </Wrapper>
    </FooterElement>
  );
}
