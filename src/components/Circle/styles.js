import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ gradient }) => gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
`;

export const IconContainer = styled.div`
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`;

export const Icon = styled.img`
  width: 3rem;
`;