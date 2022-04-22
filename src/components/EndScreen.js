function EndScreen({ counter }) {
    return (
        <div className="end-screen-container">
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
            <div>{counter}</div>
            <div className='success'>Gut gemacht!</div>
            <button className='play-again-button'>Nochmal spielen</button>
            <button className='share-button'>Ergebnis teilen</button>
        </div>
    )
}

export default EndScreen;