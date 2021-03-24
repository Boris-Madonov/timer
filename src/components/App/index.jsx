import React, { useState, useRef } from 'react';
import './index.css';

export default function App() {
  const [title, setTitle] = useState('Начните отсчет!');
  const [count, setCount] = useState(25 * 60);
  const [buttonStartDisabled, setButtonStartDisabled] = useState(false);
  const [buttonStopDisabled, setButtonStopDisabled] = useState(true);

  const minutes = Math.floor(count / 60).toString().padStart(2, 0);
  const seconds = (count - minutes * 60).toString().padStart(2, 0);
  const interval = useRef(null);

  const handlerButtonReset = () => {
    clearInterval(interval.current);
    setCount(25 * 60);
    setTitle('Начните отсчет!');
  };

  const handlerButtonStart = () => {
    setButtonStartDisabled(true);
    setButtonStopDisabled(false);
    interval.current = setInterval(() => {
      setCount((c = count) => {
        if (c >= 1) return c - 1;
        return handlerButtonReset();
      });
    }, 1000);
    setTitle('Поехали!');
  };

  const handlerButtonStop = () => {
    setButtonStartDisabled(false);
    setButtonStopDisabled(true);
    clearInterval(interval.current);
    setTitle('Не останавливайтесь!');
  };

  return (
    <div className="timer__page">
      <h1 className="timer__title">
        {title}
      </h1>
      <div className="timer__numbers">
        <span className="timer__number">
          {minutes}
        </span>
        <span className="timer__colon">
          :
        </span>
        <span className="timer__number">
          {seconds}
        </span>
      </div>
      <div className="timer__buttons">
        <button
          className="timer__button"
          type="button"
          onClick={handlerButtonStart}
          disabled={buttonStartDisabled}
        >
          Start
        </button>
        <button
          className="timer__button"
          type="button"
          onClick={handlerButtonStop}
          disabled={buttonStopDisabled}
        >
          Stop
        </button>
        <button
          className="timer__button"
          type="button"
          onClick={handlerButtonReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
