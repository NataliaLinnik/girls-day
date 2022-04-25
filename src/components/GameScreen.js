import React, { useState } from 'react';
import CountDownTimer from './CountDownTimer';

function GameScreen({ counter, setCounter, height, setHeight, width, setWidth }) {
  const [startGame, setStartGame] = useState(false);

  const buttonClicked = () => {
    setCounter(counter + 1);
    // TODO: Abfrage auf maximale Höhe und Breite
    setHeight(height + (counter * 0.05))
    setWidth(width + (counter * 0.05))
  }

  return (
    <div
      className={'game-screen-container'}
      onClick={startGame && buttonClicked}
    >
      {!startGame && (
        <div className={`${!startGame ? 'overlay' : ''}`}>
          <span className="hint-before-game">
            Tippe so schnell du kannst in
          </span>
          <CountDownTimer
            value={5}
            startTimer
            timeout={setStartGame}
            counterStyle={'before-game-countdown'}
          />

          <img
            className="finger-icon"
            src="/images/finger-icon.svg"
            alt="icon with a finger clicking on the screen"
          />
        </div>
      )}
      <img className="bg-hills" src="/images/bg-hills.svg" alt="Green hills" />

      {startGame && (
        <>
          <div className='image-container'>
            <img
              className="asset-tree"
              src="/images/assets/tree.svg"
              alt="asset"
              style={{ width, height }}
            />
          </div>
          <CountDownTimer
            value={15}
            showText
            startTimer={startGame}
            counterStyle={'countdown'}
          />
          <div>
            <div className="counter-container">
              <div className="counter">{counter}</div>
              <div className="clicks-text">CLICKS</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default GameScreen;

