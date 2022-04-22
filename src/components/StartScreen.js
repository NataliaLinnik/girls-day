function StartScreen({ setIsGameRunning }) {
  return (
    <div className="start-screen-container">
      <img
        src="/images/bg-start-screen.svg"
        alt="Green fields with some leafs"
      />

      <button className="start-button" onClick={() => setIsGameRunning(true)}>
        Starten
      </button>
    </div>
  );
}

export default StartScreen;

