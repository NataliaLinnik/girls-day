function StartScreen({ setIsGameScreen }) {

  return (
    <div className="start-screen-container">
      <StartScreenBackground />
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
      <img
        className="bg-leaves-2"
        src="/images/bg-leaves-2.svg"
        alt="Three leaves"
      />
      <img
        className="flower-group-1"
        src="/images/flowers/flower-group-1.svg"
        alt="A group of beautiful flowers"
      />
      <img
        className="flower-group-2"
        src="/images/flowers/flower-group-2.svg"
        alt="A beautiful flower"
      />
      <img
        className="flower-group-3"
        src="/images/flowers/flower-group-3.svg"
        alt="A group of beautiful flowers"
      />
      <img
        className="flower-group-4"
        src="/images/flowers/flower-group-4.svg"
        alt="A group of beautiful flowers"
      />
      <img
        className="flower-group-5"
        src="/images/flowers/flower-group-5.svg"
        alt="A group of beautiful flowers"
      />
      <img
        className="flower-group-6"
        src="/images/flowers/flower-group-6.svg"
        alt="A group of beautiful flowers"
      />
      <img
        className="flower-group-7"
        src="/images/flowers/flower-group-7.svg"
        alt="A group of beautiful flowers"
      />

      <img
        className="bee-1"
        src="/images/bee.svg"
        alt="a cute bee"
      />
      <img
        className="bee-2"
        src="/images/bee.svg"
        alt="a cute bee"
      />
    </div>);
}



export default StartScreen;

