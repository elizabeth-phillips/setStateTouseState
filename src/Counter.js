import React, { useState } from 'react';
//Could also be written: const Counter = (props) => {
const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: props.initialCount
  //   };
  // }
  const increment = () => setCount(count + 1);
  // this.setState({
  //   count: this.state.count + 1
  // });
  const decrement = () => setCount(count > 1 ? count - 1 : 0);
  const reset = () => setCount(0);

  return (
    <article>
      <h2>Counter with setState</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>0</button>
      <p>The count is {count}</p>
    </article>
  );
};

export default Counter;
