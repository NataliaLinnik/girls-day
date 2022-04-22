import { useEffect, useState } from 'react';
import './App.css';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import StartScreen from './components/StartScreen';

function App() {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [showEndScreen, setShowEndScreen] = useState(false)

  // Hides GameScreen after 15sec
  useEffect(() => {
    if (isGameRunning) {
      setInterval(() => {
        setIsGameRunning(false);
        setShowEndScreen(true);
      }, 15000);
    }
  }, [isGameRunning]);

  const showPage = () => {
    if (isGameRunning) {
      return <GameScreen />;
    } else if (showEndScreen) {
      // TODO: Counter to be moved from Gamescreen (Minh)
      return <EndScreen counter={20} />;
    } else {
      return <StartScreen setIsGameRunning={setIsGameRunning} />;
    }
  };

  return (
    <div className="App">
      {showPage()}
    </div>

  )
}

export default App;

