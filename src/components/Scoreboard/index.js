import React from 'react';
import { useGame } from '../../hooks/useGame';

import logo from '../../assets/logo.svg'

import { Container, Logo, ScoreContainer, ScoreText, Score } from './styles.js';

function Scoreboard() {
  const { score } = useGame();
  return (
    <Container>
      <Logo src={logo}/>
      <ScoreContainer>
        <ScoreText>
          Score
        </ScoreText>
        <Score>
          {score}
        </Score>
      </ScoreContainer>
    </Container>
  )
}

export default Scoreboard;