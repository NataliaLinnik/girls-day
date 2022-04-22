function StartScreen({ setIsGameRunning }) {
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

      <div className="start-screen-textbox">
        <h3>Lorem Ipsum<br />dolor sit amet</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        <button className="start-button" onClick={() => setIsGameRunning(true)}>
          Starten
        </button>
      </div>
    </div >
  );
}

export default StartScreen;

