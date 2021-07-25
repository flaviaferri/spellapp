import React from "react";
import natoAlphabet from "../../natoAlphabet.json";

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
    <div>
      {letter?.map((el, index) => (
        <div key={index}>{el?.word === " " ? <p>(space)</p> : el.word}</div>
      ))}
    </div>
  );
}
