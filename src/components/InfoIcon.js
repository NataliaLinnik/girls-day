function InfoIcon({ setShowInfoPage }) {
  return (
    <img
      src="/images/info-icon.svg"
      alt="info icon navigiert zur Infoseite mit Infos zum Girls Day"
      onClick={() => setShowInfoPage(prevState => !prevState)}
      className="info-icon"
    />
  );
}

export default InfoIcon;
