import React, { useEffect, useRef, useState } from 'react';

function GameScreen({ counter, setCounter }) {
  const buttonClicked = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="game-screen-container" onClick={buttonClicked}>
      <img className="bg-hills" src="/images/bg-hills.svg" alt="Green hills" />
      <img
        className="bg-leaves"
        src="/images/bg-leaves.svg"
        alt="Three leaves"
      />
      <CountDownTimer />
      <div>
        <div className="counter-container">
          <div className="counter">{counter}</div>
          <div className="clicks-text">CLICKS</div>
        </div>
      </div>
    </div>
  );
}

function CountDownTimer() {
  const [timer, setTimer] = useState(15);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(time => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <div className="countdown">
      <div className="countdown-timer">{timer}</div>
      <div className="countdown-text">SEKUNDEN</div>
    </div>
  );
}

export default GameScreen;

