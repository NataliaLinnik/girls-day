import InfoIcon from './InfoIcon';

function EndScreen({ counter, setShowInfoPage}) {
  return (
    <div className="end-screen-container">
      <InfoIcon setShowInfoPage={setShowInfoPage} />
      <img className="bg-hills" src="/images/bg-hills.svg" alt="Green hills" />
      <img
        className="bg-leaves"
        src="/images/bg-leaves.svg"
        alt="Three leaves"
      />
      <div>{counter}</div>
      <div className="success">Gut gemacht!</div>
      <div className="successDescription">Dein Baum ist um {counter} cm gewachsen. Das entspricht einer Spende von</div>
      <div className="successPrice"> {counter / 10} EUR</div>
      <button className="play-again-button" onClick={ () => {window.location.reload()}}>Nochmal spielen</button>
      <button className="share-button">Ergebnis teilen</button>
    </div>
  );
}

export default EndScreen;

