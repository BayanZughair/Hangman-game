import React from 'react';
import Letter from './Letter';

const Solution = ({ lettersStatus, solution, flag, func }) => {
  const setWord = (word) => {

    const wordsLetters = []
    let letterIndex = 0

    for (let char of word) {
      wordsLetters.push( <Letter key = {"ch" + letterIndex} className = "letter" letter = { lettersStatus[char.toUpperCase()] ? char : "_" } /> )
      letterIndex++
    }
    return wordsLetters
  }

  const wordsLetters = setWord(solution.word)

  return (
      <div>{wordsLetters}</div>
  )
}

export default Solution
