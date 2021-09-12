import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --dark-text: hsl(229, 25%, 31%);
    --score-text: hsl(229, 64%, 46%);
    --header-outline: hsl(217, 16%, 45%);
    --white: hsl(0, 0%, 100%);
  }

  body {
    background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    background: hsl(214, 47%, 23%);
  }

`;
