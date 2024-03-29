import { useState, useRef } from "react";
import ResultsModal from "./ResultsModal.jsx";

export default function TimerChallenge({ title, targettime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targettime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultsModal ref={dialog} targetTime={targettime} result="Lost" />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targettime} second{targettime > 1 ? "s" : ""}
        </p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running...." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
