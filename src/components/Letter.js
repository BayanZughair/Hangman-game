import React from 'react';

const Letter = (props) => {
  const letterClicked = () => {
    if (props.func) 
    props.func(props.letter)
  }

  return (<span className = {props.className} onClick = {letterClicked}> {props.letter} </span>)
}

export default Letter;
