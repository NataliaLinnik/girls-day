import InfoIcon from './InfoIcon';

function EndScreen({ counter, setShowInfoPage }) {
  return (
    <div className="end-screen-container">
      <InfoIcon setShowInfoPage={setShowInfoPage} />
      <div className="game-end-screen-background">
        <img className="bg-hills" src="/images/bg-hills-game.svg" alt="Green hills" />
        <img className="bg-hill-counter-2" src="/images/bg-hill-counter.svg" alt="A small hill" />
        <div className="square" />
      </div>
      {/* <div>{counter}</div> */}
      <div className="success">Gut gemacht!</div>
      <div className="evaluation">
        <button className="play-again-button">Nochmal spielen</button>
        <button className="share-button">Ergebnis teilen</button>
      </div>
    </div>
  );
}

export default EndScreen;

