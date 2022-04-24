function InfoScreen({ setShowInfoPage }) {
  return (
    <div className="info-screen-container">
      <img
        className="close-icon"
        src="/images/close-icon.svg"
        alt="close this page"
        onClick={() => setShowInfoPage(false)}
      />
      <h1>Danke für deine Teilnahme am Girls Day!</h1>
      <h2>Präsentationen:</h2>
      <div className="list-container">
        <a href="https://www.w3schools.com">
          Platzhalter_für_die_Präsentation_1
        </a>
        <a href="https://www.w3schools.com">
          Platzhalter_für_die_Präsentation_2
        </a>
      </div>

      <h2>Interessante Links:</h2>
      <div className="list-container">
        <div className="website-container">
          <h3>Webseite 1</h3>
          <span className="website-description">Beschreibung Webseite 1</span>
          <a href="https://www.w3schools.com">Platzhalter_für_den_Link_1</a>
        </div>

        <div className="website-container">
          <h3>Webseite 2</h3>
          <span className="website-description">
            Beschreibung Webseite 2 etwas länger Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi. Vivamus suscipit
            tortor eget felis porttitor volutpat.
          </span>
          <a href="https://www.w3schools.com">Platzhalter_für_den_Link_2</a>
        </div>
      </div>
    </div>
  );
}

export default InfoScreen;
