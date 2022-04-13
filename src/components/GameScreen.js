import React from 'react';

function GameScreen() {
  return (
    <div className="game-screen-container">
      <img
        src="/images/bg-game.svg"
        alt="Green field"
      />
      <ClickCounter/>
    </div>
  );
}

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  
  buttonClicked(event) {
    this.setState({value: this.state.value + 1});
  }
  
  render() {
    return (
    	<div>
        <div className='counter'>{this.state.value}</div>
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

export default GameScreen;

