import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Label from "../Label";

const WrapperInput = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
  `
);

const TextArea = styled.textarea(
  ({ theme }) => css`
    border: solid 3px ${theme.colors.purple};
    border-radius: 6px;
    min-height: 19.2rem;
    outline: none;
    padding: 1.2rem;
    font-size: 1.6rem;
    font-weight: 500;
    resize: none;
  `
);

export default function Input({ handleChange, wordToSpell }) {
  return (
    <>
      <WrapperInput>
        <Label>Type what you want to spell</Label>
        <TextArea onChange={(e) => handleChange(e.target.value)}>
          {wordToSpell}
        </TextArea>
      </WrapperInput>
    </>
  );
}
