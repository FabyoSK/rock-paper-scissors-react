import React from 'react';
import Playground from '../../components/Playground';
import Scoreboard from '../../components/Scoreboard';
import { Container } from './styles';

function Game() {
  return (
    <Container>
      <Scoreboard />
      <Playground />
    </Container>
  );
}

export default Game;