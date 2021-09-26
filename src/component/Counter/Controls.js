import React from 'react';
import p from './Counter.module.css';

const Controls = ({ onIncrement, onDecrement, onInDecrement }) => (
  <div className={p.boxButton}>
    <button type="button" onClick={onIncrement}>
      Good
    </button>
    <button type="button" onClick={onDecrement}>
      Neutral
    </button>
    <button type="button" onClick={onInDecrement}>
      Bad
    </button>
  </div>
);
export default Controls;
