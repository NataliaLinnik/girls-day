import React from 'react';

function GameScreen() {
  return (
    <div className="game-screen-container">
      <img
        src="/images/bg-game.svg"
        alt="Green field"
      />
      <ClickCounter/>
      <CountDownTimer/>
    </div>
  );
}

function CountDownTimer() {
  const [timer, setTimer] = React.useState(5);
  const id =React.useRef(null);
  const clear=()=>{
  window.clearInterval(id.current)
}
  React.useEffect(()=>{
     id.current=window.setInterval(()=>{
      setTimer((time)=>time-1)
    },1000)
    return ()=>clear();
  },[])

  React.useEffect(()=>{
    if(timer===0){
      clear()
    }

  },[timer])

  return (
    <div className="countdown">{timer}
      <br/> SEKUNDEN
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
        <div className='counter'>{this.state.value}
          <br/> CLICKS
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

export default GameScreen;

