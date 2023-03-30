import React, { useState } from 'react';
import './App.css';
import Letters from './components/Letters';
import Solution from './components/Solution';
import Score from './components/Score';
import EndGame from './components/EndGame';

const INCREASE_VALUE = 5
const DECREASE_VALUE = 20
const INIT_POINTS = 100

const gameWords = [ { word: "It" }, { word: "Test" }, { word: "FullStack" }, { word: "React" }, { word: "HangmanGame" } ]

const generateLetterStatuses = () => {
  let letterStatus = {}
  for (let c = 65; c < 91; c++) {
    letterStatus[String.fromCharCode(c)] = false
  }
  return letterStatus
}

const App = () => {
  const [lettersStatus, setLettersStatus] = useState(generateLetterStatuses())
  const [solution, setSolution] = useState( gameWords [Math.floor ( Math.random() * gameWords.length )])
  const [score, setScore] = useState(INIT_POINTS)
  const [message, setMessage] = useState("")

  const isWin = () => {
    for (let char of solution.word) {
      if (!lettersStatus [char.toUpperCase()] ) {
        return
      }
    }
    setMessage(<div><p>Congratulations!</p></div>)
  }

  const gameEndedLose = () => {
    const secretWord = solution.word;
    setMessage(<div><p>Alas, the word was {secretWord}</p></div>)
  };

  const selectLetter = (letter) => {
    if (!lettersStatus[letter] && score > 0) {

      let tempLettersStatus = { ...lettersStatus }
      tempLettersStatus[letter] = true
      setLettersStatus(tempLettersStatus)
      const newScore = (solution.word.includes(letter.toUpperCase()) || solution.word.includes(letter.toLowerCase())) ?
       score + INCREASE_VALUE : score - DECREASE_VALUE
      setScore(newScore)
      isWin()
      if (newScore <= 0) {
        gameEndedLose()
      }

    }
  };

  return (
    <div className="App">
      <h3>Hangman Game</h3>
      <Score score={score} />
      <Solution lettersStatus={lettersStatus} solution={solution} />
      <Letters func={selectLetter} lettersStatus={lettersStatus} />
      <EndGame message={message} />
    </div>
  );
}

export default App;