import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
  transition: 200ms all;

  &:hover {
    filter: brightness(0.9);
  }
`;
