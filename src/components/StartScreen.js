function StartScreen({ setIsGameScreen }) {
  return (
    <div className="start-screen-container">
      <img
        className="bg-hills"
        src="/images/bg-hills.svg"
        alt="Green hills"
      />
      <img
        className="bg-leaves"
        src="/images/bg-leaves.svg"
        alt="Three leaves"
      />
      <img
        className="bg-leaves-2"
        src="/images/bg-leaves-2.svg"
        alt="Three leaves"
      />
      <img
        className="stuttgart-small-tree"
        src="/images/tree-small.svg"
        alt="a small tree"
      />
      <img
        className="bee"
        src="/images/bee.svg"
        alt="a cute bee"
      />
      <div className="start-screen-textbox">
        <h3>Mehr Bienen für<br />deine Stadt!</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        <button className="start-button" onClick={() => setIsGameScreen(true)}>
          Starten
        </button>
      </div>
    </div >
  );
}

export default StartScreen;

