import React, { useState, useEffect } from 'react';
import './style.css'

function Relogio() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="relogio">
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Relogio;