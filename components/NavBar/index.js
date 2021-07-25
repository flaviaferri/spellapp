import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Wrapper = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.darkBlue};
    height: 10rem;
    display: flex;
    box-shadow: 0px 4px 12px -2px rgba(0, 0, 0, 0.6);
  `
);

const Logotipo = styled.img(
  () => css`
    height: 6rem;
    margin: auto;
  `
);

export default function NavBar() {
  return (
    <>
      <Wrapper>
        <Logotipo src="logo-Spelling.png" />
      </Wrapper>
    </>
  );
}
