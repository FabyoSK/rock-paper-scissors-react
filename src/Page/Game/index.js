import React, { useState } from 'react';
import Circle from '../../components/Circle';

const possibleChoices = ["rock", "paper", "scissor"];

function Game() {
  const [userChoice, setUserChoice] = useState(null);
  const [gameChoice, setGameChoice] = useState(null);

  const handleSetUserChoice = (choice) => {
    setUserChoice(choice);
  };
  
  const handleSetGameChoice = () => {
    setGameChoice(possibleChoices[Math.floor(Math.random() * possibleChoices.length)]);
  };

  return (
    <>
      <Circle type="rock" onCircleClick={handleSetUserChoice}/>
      <Circle type="paper" onCircleClick={handleSetUserChoice} />
      <Circle type="scissor"onCircleClick={handleSetUserChoice}/>
      <h1>{userChoice}</h1>
      <h1>{gameChoice}</h1>
    </>
  );
}

export default Game;