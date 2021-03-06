import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Label from "../Label";

const WrapperInput = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.8rem;

    ${theme.breakpoints[1]} {
      width: 50%;
      margin-right: 7.7rem;
    }
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

    ${theme.breakpoints[1]} {
      min-height: 30vh;
    }
  `
);

export default function Input({ handleChange, wordToSpell }) {
  const handleEnter = (e) => {
    if (event.key === "Enter") {
      return handleChange(`${e.target.defaultValue} `);
    }
  };

  return (
    <>
      <WrapperInput>
        <Label>Type what you want to spell</Label>
        <TextArea
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleEnter}
          value={wordToSpell}
        />
      </WrapperInput>
    </>
  );
}
