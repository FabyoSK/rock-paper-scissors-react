import React, { useState } from 'react';
import Circle from '../../components/Circle';

// import { Container } from './styles';

function Game() {
  return (
    <>
      <Circle type="paper"/>
      <Circle type="scissor"/>
      <Circle type="rock"/>
    </>
  );
}

export default Game;