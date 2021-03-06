import React, { useState } from 'react';
import CountDownTimer from './CountDownTimer';

function GameScreen({ counter, setCounter, gameTimeOut }) {
  const [startGame, setStartGame] = useState(false);

  const buttonClicked = () => {
    setCounter(counter + 1);
  };

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
            timeout={() => setStartGame(true)}
            counterStyle={'before-game-countdown'}
          />

          <img
            className="finger-icon"
            scr="/images/finger-icon.svg"
            alt="icon with a finger clicking on the screen"
          />
        </div>
      )}

      <div className="game-end-screen-background">
        <img
          className="bg-hills"
          src="/images/bg-hills.svg"
          alt="Green hills"
        />
        <img
          className="bg-hill-counter"
          src="/images/bg-hill-counter.svg"
          alt="A small hill"
        />
      </div>

      {startGame && (
        <>
          <CountDownTimer
            value={15}
            showText
            startTimer={startGame}
            counterStyle={'countdown'}
            timeout={gameTimeOut}
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

