import { useEffect, useState } from 'react';
import './App.css';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import StartScreen from './components/StartScreen';
import InfoScreen from './components/InfoScreen';

function App() {

  const [isGameRunning, setIsGameRunning] = useState(false);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const [showInfoPage, setShowInfoPage] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {

    setHeight();

    window.addEventListener('resize', () => {
      setHeight();
    });

    return () => {
      window.removeEventListener('resize', window);
    }
  });

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
    if (showInfoPage) {
      return <InfoScreen setShowInfoPage={setShowInfoPage} />;
    } else if (isGameRunning) {
      return <GameScreen counter={counter} setCounter={setCounter} />;
    } else if (showEndScreen) {
      return <EndScreen counter={counter} setShowInfoPage={setShowInfoPage} />;
    } else {
      return (
        <StartScreen
          setIsGameRunning={setIsGameRunning}
          setShowInfoPage={setShowInfoPage}
        />
      );
    }
  };

  return <div className="App">{showPage()}</div>;
}

function setHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export default App;

