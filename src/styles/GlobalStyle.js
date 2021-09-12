import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {

  }

  body {
    background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    background: hsl(214, 47%, 23%);
  }

`;
