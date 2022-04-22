import React, { useEffect, useRef, useState } from 'react';

function GameScreen() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="game-screen-container">
      <img
        src="/images/bg-game.svg"
        alt="Green field"
      />
      <CountDownTimer />
      <ClickCounter counter={counter} setCounter={setCounter} />
    </div>
  );
}

function CountDownTimer() {
  const [timer, setTimer] = useState(15);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current)
  }

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1)
    }, 1000)
    return () => clear();
  }, [])

  useEffect(() => {
    if (timer === 0) {
      clear()
    }
  }, [timer])

  return (
    <div className="countdown">{timer}
      <br /> SEKUNDEN</div>
  )
}

function ClickCounter({ counter, setCounter }) {
  const buttonClicked = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <div className='counter'>{counter}
        <br /> CLICKS
      </div>
      <button className="plus-button" onClick={buttonClicked}>
        <img
          src="/images/plus-icon.svg"
          alt="Plus Icon"
        />
      </button>
    </div>
  );
}

export default GameScreen;

