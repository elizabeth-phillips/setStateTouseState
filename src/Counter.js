import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
  decrement() {
    this.setState({
      count: this.state.count > 1 ? this.state.count - 1 : 0
    });
  }
  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <article>
        <h2>Counter with setState</h2>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
        <button onClick={this.reset}>0</button>
        <p>The count is {this.state.count}</p>
      </article>
    );
  }
}

export default Counter;
