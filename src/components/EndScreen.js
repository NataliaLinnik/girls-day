function EndScreen({ counter }) {
    return (
        <div className="end-screen-container">
            <img
                src="/images/bg-game.svg"
                alt="Green field"
            />
            <div>{counter}</div>
            <div className='success'>Gut gemacht!</div>
            <button className='play-again-button'>Nochmal spielen</button>
            <button className='share-button'>Ergebnis teilen</button>
        </div>
    )
}

export default EndScreen;