import { useEffect, useState } from 'react';
import './App.css';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import StartScreen from './components/StartScreen';

function App() {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const [counter, setCounter] = useState(0);

  // Hides GameScreen after 15sec
  useEffect(() => {
    if (isGameRunning) {
      setInterval(() => {
        setIsGameRunning(false);
        setShowEndScreen(true);
      }, 20000);
    }
  }, [isGameRunning]);

  const showPage = () => {
    if (isGameRunning) {
      return <GameScreen counter={counter} setCounter={setCounter} />;
    } else if (showEndScreen) {
      // TODO: Counter to be moved from Gamescreen (Minh)
      return <EndScreen counter={counter} />;
    } else {
      return <StartScreen setIsGameRunning={setIsGameRunning} />;
    }
  };

  return <div className="App">{showPage()}</div>;
}

export default App;

