import FlowerMeadow from './FlowerMeadow';
import InfoIcon from './InfoIcon';

function EndScreen({ counter, setShowInfoPage, flowers }) {

  return (
    <div className="end-screen-container">
      <InfoIcon setShowInfoPage={setShowInfoPage} />
      <div className="game-end-screen-background">
        <img className="bg-hills" src="/images/bg-hills-game.svg" alt="Green hills" />
        <img className="bg-hill-counter-2" src="/images/bg-hill-counter.svg" alt="A small hill" />
        <div className="square" />
      </div>

      <FlowerMeadow flowers={flowers} />
      <div className="success">Gut gemacht!</div>
      <div className="evaluation">
        <div className="success-description">
          Dein Baum ist um {counter} cm gewachsen. Das entspricht einer Spende von
        </div>
        <div className="success-price"> {counter / 10} EUR</div>
        <button
          className="play-again-button"
          onClick={() => {
            window.location.reload();
          }}
        >
          Nochmal spielen
        </button>
        <button className="share-button">Ergebnis teilen</button>
      </div>
    </div>
  );
}

export default EndScreen;

