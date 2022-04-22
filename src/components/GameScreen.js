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
      <HideIn15Seconds counter={counter} setCounter={setCounter} />
      <RenderIn15Seconds counter={counter} />
    </div>
  );
}

function CountDownTimer() {
  const [timer, setTimer] = useState(15);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current)
  }
  const [showComponent, setShowComponent] = useState(true);

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

  useEffect(() => {
    setInterval(() => {
      setShowComponent(false);
    }, 15000);
  }, []);

  return <>
    {showComponent && <div>
      <div className="countdown">{timer}
        <br /> SEKUNDEN
      </div></div>}
  </>
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

function EndScreen({ counter }) {
  return (
    <div>
      <div>{counter}</div>
      <div className='success'>Gut gemacht!</div>
      <button className='whatsapp-button'>Nochmal spielen</button>
      <button className='share-button'>Ergebnis teilen</button>
    </div>
  )
}

const HideIn15Seconds = ({ counter, setCounter }) => {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowComponent(false);
    }, 15000);
  }, []);

  return <> {
    showComponent &&
    <ClickCounter counter={counter} setCounter={setCounter} />
  }
  </>
}

const RenderIn15Seconds = ({ counter }) => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowComponent(true);
    }, 15000);
  }, []);

  return <> {
    showComponent && <EndScreen counter={counter} />
  }
  </>
}

export default GameScreen;

