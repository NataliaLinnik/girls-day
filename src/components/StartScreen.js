import InfoIcon from './InfoIcon';

function StartScreen({ setIsGameRunning, setShowInfoPage }) {
  return (
    <div className="start-screen-container">
      <InfoIcon setShowInfoPage={setShowInfoPage} />
      <StartScreenBackground />
      <div className="start-screen-textbox">
        <h1>
          Mehr Grün für
          <br />
          deine Stadt!
        </h1>
        <p>
          Lasse deine Pflanze wachsen!
          <br />
          Je größer, desto mehr Geld wird später gespendet.
        </p>

        <button className="start-button" onClick={() => setIsGameRunning(true)}>
          Starten
        </button>
      </div>
    </div>
  );
}

function StartScreenBackground() {
  return (
    <div className="start-screen-background">
      <img className="bg-hills" src="/images/bg-hills.svg" alt="Green hills" />
      <img
        className="bg-leaves-1"
        src="/images/bg-leaves.svg"
        alt="Three leaves"
      />
      <img className="bg-tree-big" src="/images/tree-big.svg" alt="Tree big" />
      <img
        className="bg-tree-middle"
        src="/images/tree-middle.svg"
        alt="Tree middle"
      />
      <img
        className="bg-tree-small"
        src="/images/tree-small.svg"
        alt="Tree small"
      />
    </div>
  );
}

export default StartScreen;

