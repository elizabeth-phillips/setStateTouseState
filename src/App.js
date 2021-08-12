import './style.css';
import React from 'react';
import Counter from './Counter';

export default function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
    </div>
  );
}
