import { GameProvider } from './hooks/useGame';
import Game from './Page/Game';
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <GameProvider>
        <Game />
      </GameProvider>
    </>
  );
}

export default App;
