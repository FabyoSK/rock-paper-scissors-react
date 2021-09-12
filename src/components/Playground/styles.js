import styled from 'styled-components';
import bgIcon from '../../assets/bg-triangle.svg'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(${bgIcon}) center no-repeat content-box;
  margin: 2rem;
  height: 100vh;
`;

export const GameField = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
`;

export const CircleContainer = styled.div`
  display: flex; 
  align-items: center;
  flex-direction: column;
`;

export const CircleText = styled.span`
  color: var(--white);
  margin-top: 1rem;
`;

export const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ResultText = styled.h1`
  color: var(--white);
`;
