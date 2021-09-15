import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 2rem;
  border: 4px solid hsl(217, 16%, 45%);
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
`;

export const Logo = styled.img`
  width: 7rem;
  margin-left: 2rem;
`;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--white);

  margin: 1rem;
  width: 6rem;
  height: 6rem;
  border-radius: 0.5rem;
`;

export const ScoreText = styled.p`
  color: var(--score-text);
  
`;
export const Score = styled.p`
  font-size: 3rem;
`;
