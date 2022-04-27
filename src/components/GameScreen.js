import React, { useState } from 'react';
import { Flower } from '../models/Flower';
import CountDownTimer from './CountDownTimer';
import FlowerMeadow from './FlowerMeadow';

function GameScreen({ counter, setCounter, flowers, gameTimeOut }) {
  const [startGame, setStartGame] = useState(false);

  const buttonClicked = () => {
    setCounter(counter + 1);
    const xPosition = Math.random() * 100;
    const yPosition = Math.random() * 100;
    const height = (yPosition) => {
      if (yPosition < 30) {
        return 20
      } else if (yPosition >= 30 && yPosition < 60) {
        return 30
      } else {
        return 40
      }
    };
    flowers.push(new Flower(
      (counter),
      "/images/flowers/flower-1.svg",
      xPosition,
      yPosition,
      height(yPosition)
    ));
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
      <div className='game-end-screen-background'>
        <img className="bg-hills" src="/images/bg-hills-game.svg" alt="Green hills" />
        <img className="bg-hill-counter" src="/images/bg-hill-counter.svg" alt="A small hill" />
      </div>

      {startGame && <FlowerMeadow flowers={flowers} />}

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