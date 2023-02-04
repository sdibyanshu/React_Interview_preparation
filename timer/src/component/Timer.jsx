import React, { useState, useEffect } from 'react';

const  Timer = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => {
          let { hours, minutes, seconds } = prevTime;
          if (seconds === 59) {
            if (minutes === 59) {
              hours = (hours + 1) % 24;
              minutes = 0;
            } else {
              minutes = (minutes + 1) % 60;
            }
            seconds = 0;
          } else {
            seconds = (seconds + 1) % 60;
          }
          return { hours, minutes, seconds };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
                    
              
  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  const { hours, minutes, seconds } = time;

  return (
    <div>
      <div>
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>

      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;