function EndScreen({ counter }) {
    return (
      <div>
        <div>{counter}</div>
        <div className='success'>Gut gemacht!</div>
        <button className='whatsapp-button'>Nochmal spielen</button>
        <button className='share-button'>Ergebnis teilen</button>
      </div>
    )
  }

export default EndScreen;