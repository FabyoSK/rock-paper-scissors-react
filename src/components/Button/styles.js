import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  border-radius: 0.5rem;
  transition: 200ms all;

  &:hover {
    filter: brightness(0.9);
  }
`;
