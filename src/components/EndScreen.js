import InfoIcon from './InfoIcon';

function EndScreen({ counter, setShowInfoPage, width, height }) {
  const donation = ((height - 150) / 10).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
  const heightDifference = (height - 150).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]

  return (
    <div className="end-screen-container">
      <InfoIcon setShowInfoPage={setShowInfoPage} />
      <div className="end-screen-container">
        <img className="bg-hill-light-green" src="/images/bg-hill-light-green.svg" alt="Light green hill" />
        <img className="bg-hill-counter-2" src="/images/bg-hill-counter.svg" alt="A small hill" />
        <div className="square" />
        <div className="image-container">
          <img
            className="asset-tree-2"
            src="/images/assets/tree.svg"
            alt="asset"
            style={{ width, height }}
          />
        </div>
      </div>

      <div className="success">Gut gemacht!</div>
      <div className="evaluation">
        <div className="success-description">Klasse! Du hast {counter} Klicks geschafft. Dein Baum ist um {heightDifference} cm gewachsen. Das entspricht einer Spende von</div>
        <div className="success-price"> {donation} EUR</div>
        <button
          className="play-again-button"
          onClick={() => {
            window.location.reload();
          }}
        >
          Nochmal spielen
        </button>
        {/*<button className="share-button">Ergebnis teilen</button>*/}
      </div>
    </div>
  );
}

export default EndScreen;

