import slides from "../slides/GirlsDay_Slides.pdf";
import ux from "../slides/GirlsDay_UX.pdf";
import informatik from "../slides/Informatik-Workshop.pdf";

function InfoScreen({ setShowInfoPage }) {
  return (
    <div className="info-screen-container">
      <img
        className="close-icon"
        src="/images/close-icon.svg"
        alt="close this page"
        onClick={() => setShowInfoPage(false)}
      />
      <h1>Danke für deine Teilnahme am Girls' Day 2022!</h1>
      <h2>Präsentationen:</h2>
      <div className="list-container">
        <h3 className="headline">Girls' Day bei der Exxeta AG</h3>
        <a className="link" href={slides} target="_blank" rel="noreferrer">
          GirlsDay_Slides.pdf
        </a>
        <h3 className="headline">UX Design Präsentation</h3>
        <p className="link-description">Hier seht ihr nochmal die Inhalte und Gestaltgesetze, die wir euch vor Ort präsentiert hatten.</p>
        <a className="link" href={ux} target="_blank" rel="noreferrer">
          GirlsDay_UX.pdf
        </a>
        <h3 className="headline">Informatik Workshop</h3>
        <a className="link" href={informatik} target="_blank" rel="noreferrer">
          Informatik-Workshop.pdf
        </a>
        <h4 className="headline">Weiterführende Links</h4>
        <ul className="link-list">
          <li><p className="link-description">Erstelle Spiele mit einer visuellen Programmiersprache: <a href="https://scratch.mit.edu">https://scratch.mit.edu</a></p></li>
          <li>
            <p className="link-description">CSS Spiel: <a href="https://flexboxfroggy.com/#de">https://flexboxfroggy.com/#de</a></p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InfoScreen;
