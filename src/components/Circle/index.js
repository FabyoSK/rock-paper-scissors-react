import React from 'react';

import { Container, Icon, IconContainer } from './styles';

import rockIcon from '../../assets/icon-rock.svg'
import paperIcon from '../../assets/icon-paper.svg'
import scissorIcon from '../../assets/icon-scissors.svg'

const circles = {
  rock: {
    icon: rockIcon,
    gradient: 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))'
  },
  
  paper: {
    icon: paperIcon,
    gradient: 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))'
  },
  
  scissor: {
    icon: scissorIcon,
    gradient: 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))'
  }
}

function Circle({ type, onCircleClick }) {
  return (
  <Container 
    gradient={circles[type]?.gradient}
    onClick={() => onCircleClick(type)}>
      <IconContainer>

    <Icon src={circles[type]?.icon} alt="" />
      </IconContainer>
  </Container>
  );
}

export default Circle;