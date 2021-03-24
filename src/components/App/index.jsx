import React, { useState, useRef } from 'react';
import './index.css';

export default function App() {
  const [title, setTitle] = useState('Начните отсчет!');
  const [count, setCount] = useState(25 * 60);
  const [countdownOn, isCountDownOn] = useState(false);

  const minutes = Math.floor(count / 60).toString().padStart(2, 0);
  const seconds = (count - minutes * 60).toString().padStart(2, 0);
  const interval = useRef(null);

  const handlerButtonReset = () => {
    clearInterval(interval.current);
    setCount(25 * 60);
    isCountDownOn(false);
    setTitle('Начните отсчет!');
  };

  const handlerButtonStart = () => {
    isCountDownOn(true);
    interval.current = setInterval(() => {
      setCount((c = count) => {
        if (c >= 1) return c - 1;
        return handlerButtonReset();
      });
    }, 1000);
    setTitle('Поехали!');
  };

  const handlerButtonStop = () => {
    isCountDownOn(false);
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
        {!countdownOn && (
          <button
            className="timer__button"
            type="button"
            onClick={handlerButtonStart}
          >
            Start
          </button>
        )}
        {countdownOn && (
          <button
            className="timer__button"
            type="button"
            onClick={handlerButtonStop}
          >
            Stop
          </button>
        )}
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
