import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [title, setTitle] = useState('Начните отсчет!');
  const [count, setCount] = useState(25 * 60);

  const minutes = Math.floor(count / 60).toString().padStart(2, 0);
  const seconds = (count - minutes * 60).toString().padStart(2, 0);

  const handlerButtonStart = () => {
    setTitle('Поехали!');
    setInterval(() => {
      setCount((c = count) => c - 1);
    }, 1000);
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
