import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="timer__page">
      <h1 className="timer__title">
        text
      </h1>
      <div className="timer__numbers">
        <span className="timer__number">
          00
        </span>
        <span className="timer__number">
          :
        </span>
        <span className="timer__number">
          00
        </span>
      </div>
      <div className="timer__buttons">
        <button
          className="timer__button"
          type="button"
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
