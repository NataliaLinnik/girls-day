import { useEffect, useRef, useState } from 'react';

function CountDownTimer({
  value,
  showText = false,
  counterStyle,
  startTimer = false,
  timeout,
}) {
  const id = useRef(null);

  const [timer, setTimer] = useState(value);

  const clear = () => {
    window.clearInterval(id.current);
  };

  useEffect(() => {
    if (startTimer) {
      id.current = window.setInterval(() => {
        setTimer(time => time - 1);
      }, 1000);
    }
    return () => clear();
  }, [startTimer]);

  useEffect(() => {
    if (timer <= 0) {
      clear();
      timeout();
    }
  }, [timer, timeout]);

  return (
    <div className={counterStyle}>
      <div>{timer}</div>
      {showText && <div className="countdown-text">SEKUNDEN</div>}
    </div>
  );
}

export default CountDownTimer;
