import { useEffect, useRef, useState } from 'react';

function CountDownTimer({
  value,
  showText = false,
  style = '',
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
    if (timer === 0) {
      clear();
      timeout(true);
    }
  }, [timer, timeout]);

  return (
    <div className={style}>
      <div>{timer}</div>
      {showText && <div className="countdown-text">SEKUNDEN</div>}
    </div>
  );
}

export default CountDownTimer;
