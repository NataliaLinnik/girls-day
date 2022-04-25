import InfoIcon from './InfoIcon';

function EndScreen({ counter, setShowInfoPage, width, height }) {
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
      <div>{counter}</div>
      <div className="success">Gut gemacht!</div>
      <button className="play-again-button">Nochmal spielen</button>
      <button className="share-button">Ergebnis teilen</button>
    </div>
  );
}

export default EndScreen;

