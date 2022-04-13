function GameScreen() {
  return (
    <div className="game-screen-container">
      <img
        src="/images/bg-game.svg"
        alt="Green field"
      />

      <button className="plus-button">
        <img
          src="/images/plus-icon.svg"
          alt="Plus Icon"
        />
      </button>
      <div>GAME SCREEN</div>
    </div>
  );
}

export default GameScreen;

