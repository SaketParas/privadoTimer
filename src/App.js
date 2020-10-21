import React, { useState } from 'react';
import './App.css';
import TimerDisplay from './Components/TimerDisplay';
import Button from './Components/Button';

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    setStatus(1)
    run();
    setInterv(setInterval(run, 10));
  }


  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(2)
  }
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  }
  const resume = () => start();


  return (
    <div className="main-section">
      <h2 className="font-weight-bolder mt-5">Privado Timer</h2>
      <TimerDisplay time={time} />
      <Button status={status} stop={stop} start={start} reset={reset} resume={resume} />
    </div>
  );
}

export default App;
