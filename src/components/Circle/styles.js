import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ gradient }) => gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (min-width: 1024px) {
    padding: 1.5rem;
  }
`;

export const IconContainer = styled.div`
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 50%;

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;

  @media (min-width: 1024px) {
    width: 4rem;
    height: 4rem;
  }
`;