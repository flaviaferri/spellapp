import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const WrapperInput = styled.div(
  () => css`
    display: flex;
    margin-top: 5rem;
    justify-content: space-evenly;
  `
);

export default function Input({ handleChange, wordToSpell }) {
  return (
    <>
      <WrapperInput>
        <textarea onChange={(e) => handleChange(e.target.value)}>
          {wordToSpell}
        </textarea>
      </WrapperInput>
    </>
  );
}
