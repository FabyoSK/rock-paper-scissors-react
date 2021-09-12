import React from 'react';
import { useGame } from '../../hooks/useGame';
import Circle from '../Circle';
import Button from '../Button';

import { Container, GameField, CircleContainer, CircleText, Result, ResultText } from './styles';

function Playground() {
  const {
    isGameStarted,
    startGame,
    userChoice,
    gameChoice,
    restartGame,
    result
  } = useGame();

  if (isGameStarted) {
    return (
      <>
        <GameField>
          <CircleContainer>
          <Circle type={userChoice} onCircleClick={() => {}} />
          <CircleText>
            You picked
          </CircleText>
          </CircleContainer>

          <CircleContainer>
          <Circle type={gameChoice} onCircleClick={() => {}} />
          <CircleText>
            The house picked
          </CircleText>
          </CircleContainer>
        </GameField>
        <Result>
          <ResultText>
            {result}
          </ResultText>
          <Button onClick={restartGame}>
            Play Again
          </Button>
        </Result>
      </>
    );
  }

  return (
  <Container>
    <Circle type="paper" onCircleClick={startGame} />
    <Circle type="scissor"onCircleClick={startGame}/>
    <Circle type="rock" onCircleClick={startGame}/>
  </Container>
  );
}

export default Playground;