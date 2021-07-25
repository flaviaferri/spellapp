import React from "react";
import natoAlphabet from "../../natoAlphabet.json";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Label from "../Label";

const TextWrapper = styled.div(
  () => css`
    font-size: 1.8rem;
    font-weight: 500;
    margin: 1.8rem 0;
  `
);

const Word = styled.p(
  () => css`
    display: inline-block;
    ::first-letter {
      font-weight: 800;
    }
  `
);

export default function SpellHandler({ wordToSpell }) {
  const arrayWord = wordToSpell.normalize("NFD").toLowerCase().split("");

  // o ponto de interrogracao eh para fazer a verificacao se todos os dados existem. (optional chaining)
  var letter = arrayWord?.map((e) => {
    if (e === " ")
      return {
        word: " ",
      };
    return natoAlphabet.find((element) => element.letter == e);
  });

  return (
    <>
      <Label>Here's how to spell</Label>
      <TextWrapper>
        {letter?.map((el, index) => (
          <span key={index}>
            {el?.word === " " ? (
              <span>
                <br />
                <br />
              </span>
            ) : (
              <Word>{el.word}</Word>
            )}{" "}
          </span>
        ))}
      </TextWrapper>
    </>
  );
}
