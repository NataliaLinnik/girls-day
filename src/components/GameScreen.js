import React, { Component, useEffect, useRef, useState } from 'react';

function GameScreen() {
  return (
    <div className="game-screen-container">
      <img
        src="/images/bg-game.svg"
        alt="Green field"
      />
      <CountDownTimer />
      <HideIn15Seconds />
      <RenderIn15Seconds />
    </div>
  );
}

function CountDownTimer() {
  const [timer, setTimer] = useState(15);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current)
  }
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1)
    }, 1000)
    return () => clear();
  }, [])

  useEffect(() => {
    if (timer === 0) {
      clear()
    }
  }, [timer])

  useEffect(() => {
    setInterval(() => {
      setShowComponent(false);
    }, 5000);
  }, []);

  return <>
    {showComponent && <div>
      <div className="countdown">{timer}
        <br /> SEKUNDEN
      </div></div>}
  </>
}

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(event) {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <div>
        <div className='counter'>{this.state.value}
          <br /> CLICKS
        </div>
        <button className="plus-button" onClick={this.buttonClicked}>
          <img
            src="/images/plus-icon.svg"
            alt="Plus Icon"
          />
        </button>
      </div>
    );
  }
}

class EndScreen extends React.Component {
  render() {
    return (
      <div>
        <div className='success'>Gut gemacht!</div>
        <button className='whatsapp-button'>Zurück zu WhatsApp</button>
        <button className='share-button'>Ergebnis teilen</button>
      </div>
    )
  }
}

const HideIn15Seconds = () => {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowComponent(false);
    }, 5000);
  }, []);

  return <> {
    showComponent &&
    <ClickCounter />
  }
  </>
}

const RenderIn15Seconds = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowComponent(true);
    }, 5000);
  }, []);

  return <> {
    showComponent && <EndScreen />
  }
  </>
}

export default GameScreen;

