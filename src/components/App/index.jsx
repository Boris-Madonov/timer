import React, { useState, useRef } from 'react';
import './index.css';

export default function App() {
  const [title, setTitle] = useState('Начните отсчет!');
  const [count, setCount] = useState(10);

  const minutes = Math.floor(count / 60).toString().padStart(2, 0);
  const seconds = (count - minutes * 60).toString().padStart(2, 0);
  const interval = useRef(null);

  const handlerButtonStart = () => {
    setTitle('Поехали!');
    interval.current = setInterval(() => {
      setCount((c = count) => {
        if (c >= 1) return c - 1;
        setTitle('Отсчет закончен!');
        return 0;
      });
    }, 1000);
  };

  const handlerButtonStop = () => {
    setTitle('Начните отсчет!');
    clearInterval(interval.current);
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
        >
          Start
        </button>
        <button
          className="timer__button"
          type="button"
          onClick={handlerButtonStop}
        >
          Stop
        </button>
        <button
          className="timer__button"
          type="button"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
