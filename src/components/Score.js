import React from 'react';

const Score = (props) => {
  return (
      <div className = {props.score >= 80 ? "high" : props.score < 50 ? "low" : "mid"}>
        {props.score}
      </div>
  )
}

export default Score
