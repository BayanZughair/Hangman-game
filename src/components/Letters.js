import React from 'react';
import Letter from './Letter';

const Letters = (props) => {
  const setLetters = (lettersStatus) => {
    const lettersArray = []
    let letterIndex = 0
    
    for (let char of Object.keys(lettersStatus)) {
      lettersArray.push(
        <Letter   key = {"char" + letterIndex}  func = {props.func} className = {props.lettersStatus[char] ? "crossed" : "letter"}  letter={char} />
      )
      letterIndex++
    }
    return lettersArray
  }

  const lettersArr = setLetters(props.lettersStatus)

  return (
    <div>
      <div className = "available-letter"> Available Letters </div>
      <div> {lettersArr} </div>
    </div>
  )
}

export default Letters
