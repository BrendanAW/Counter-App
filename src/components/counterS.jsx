import React, { Component } from "react";
import Counter from "./counter";

class CounterS extends Component {
  state = {
    counters: [
      { id: 1, value: 55 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    console.log(this.props);
    return (
      <>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Counter # {counter.id}</h4>
          </Counter>
        ))}
      </>
    );
  }
}
export default CounterS;
