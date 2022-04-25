import InfoIcon from './InfoIcon';

function EndScreen({ counter, setShowInfoPage, width, height }) {
  const donation = ((height - 150) / 10).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]

  return (
    <div className="end-screen-container">
      <InfoIcon setShowInfoPage={setShowInfoPage} />
      <img className="bg-hills" src="/images/bg-hills.svg" alt="Green hills" />
      <div className='image-container'>
        <img
          className="asset-tree"
          src="/images/assets/tree.svg"
          alt="asset"
          style={{ width, height }}
        />
      </div>
      <div className="success">Gut gemacht!</div>
      <div className="success-description">Klasse! Du hast {counter} Klicks geschafft. Dein Baum ist um {height - 150} cm gewachsen. Das entspricht einer Spende von</div>
      <div className="success-price"> {donation} EUR</div>
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
  );
}

export default EndScreen;

