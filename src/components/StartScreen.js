function StartScreen({ setIsGameRunning }) {
  return (
    <div className="start-screen-container">
      <StartScreenBackground />
      <div className="start-screen-textbox">
        <h3>Mehr Grün für<br />deine Stadt!</h3>
        <p>Lasse deine Pflanze wachsen! <br /> Je größer, desto mehr Geld wird später <br /> gespendet.</p>
        <button className="start-button" onClick={() => setIsGameRunning(true)}>
          Starten
        </button>
      </div>
    </div >
  );
}

function StartScreenBackground() {
  return (
    <div className="start-screen-background">
      <img
        className="bg-hills"
        src="/images/bg-hills.svg"
        alt="Green hills"
      />
      <img
        className="bg-leaves-1"
        src="/images/bg-leaves.svg"
        alt="Three leaves"
      />
    </div>
  );
}

export default StartScreen;

