import './App.css';
import { useState } from 'react';
import GameScreen from './components/GameScreen';
import StartScreen from './components/StartScreen';

function App() {
  const [isGameScreen, setIsGameScreen] = useState(false);

  return (
    <div className="App">
      {isGameScreen ? (
        <GameScreen />
      ) : (
        <>
          <StartScreen setIsGameScreen={setIsGameScreen} />
        </>
      )}
    </div>
  );
}

export default App;

