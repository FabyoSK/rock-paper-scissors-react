import React from 'react';

import { Container, Icon } from './styles';

import rockIcon from '../../assets/icon-rock.svg'
import paperIcon from '../../assets/icon-paper.svg'
import scissorIcon from '../../assets/icon-scissors.svg'

const circles = {
  rock: {
    icon: rockIcon
  },

  paper: {
    icon: paperIcon
  },

  scissor: {
    icon: scissorIcon
  }
}

function Circle({ type, onCircleClick }) {
  return (
  <Container onClick={() => onCircleClick(type)}>
    <Icon src={circles[type].icon} alt="" />
  </Container>
  );
}

export default Circle;