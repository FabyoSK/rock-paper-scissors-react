import { createContext, useContext, useEffect, useState } from 'react';

export const GameContext = createContext();

const choiceEnum = {
  rock: "rock",
  paper: "paper",
  scissor: "scissor"
};

const choices = [
  choiceEnum.rock,
  choiceEnum.paper,
  choiceEnum.scissor
];

export const GameProvider = ({ children }) => {
  const [userChoice, setUserChoice] = useState(null);
  const [gameChoice, setGameChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleSetUserChoice = (choice) => {
    setUserChoice(choice);
  };
  
  const setRandomGameChoice = () => {
    setGameChoice(choices[Math.floor(Math.random() * choices.length)]);
  };


  const checkPlayerWin = () => {
    if (
      (userChoice === choiceEnum.rock && gameChoice === choiceEnum.scissor) ||
      (userChoice === choiceEnum.paper && gameChoice === choiceEnum.rock) ||
      (userChoice === choiceEnum.scissor && gameChoice === choiceEnum.paper)
      ) {
      setResult("You Win");
      setScore((prev) => prev + 1)
    } else if (userChoice === gameChoice) {
      setResult("it's a Draw");
    }
     else {
      setResult("You Lose");
      setScore((prev) => prev - 1)
    }
  };

  const startGame = (userChoice) => {
    setIsGameStarted(true);
    handleSetUserChoice(userChoice);
    setRandomGameChoice();
  };

  const restartGame = () => {
    setUserChoice(null);
    setGameChoice(null);
    setIsGameStarted(false);
  };

  useEffect(() => {
    checkPlayerWin()
  }, [userChoice, gameChoice])

  return (
    <GameContext.Provider
      value={{
        handleSetUserChoice,
        startGame,
        restartGame,
        userChoice,
        gameChoice,
        isGameStarted,
        result,
        score,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);

  return context;
}
