import './App.css';
import { useState } from 'react';
import GameScreen from './components/GameScreen';
import StartScreen from './components/StartScreen';
import GameScreenWrapper from './components/GameScreenWrapper';

function App() {
  const [isGameScreen, setIsGameScreen] = useState(false);

  return (
    <div className="App">
      {isGameScreen ? (
        <GameScreenWrapper><GameScreen /></GameScreenWrapper>

      ) : (
        <>
          <StartScreen setIsGameScreen={setIsGameScreen} />
        </>
      )}
    </div>
  );
}

export default App;

