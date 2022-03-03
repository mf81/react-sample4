import React, { Component } from "react";
import Counter from "./counter";
class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 10 },
      { id: 3, value: 5 },
      { id: 4, value: 0 },
    ],
  };

  clearIdCounter = (counter) => {
    counter = counter.map((counter, index) => {
      counter.id = ++index;
      return counter;
    });
    return counter;
  };

  handleAddCounter = () => {
    let { counters } = this.state;
    counters = [...counters, { id: counters.length++, value: 0 }];
    counters = this.clearIdCounter(counters);
    this.setState({ counters });
  };

  handleDeleteCounter = (id) => {
    let counters = this.state.counters.filter((f) => f.id !== id);
    counters = this.clearIdCounter(counters);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    // const counters = [...this.state.counters];
    // const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    // counters[index].value++;
    // this.setState({ counters });

    const counters = this.state.counters;
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    if (counter.value > 0) {
      const counters = this.state.counters;
      const index = counters.indexOf(counter);
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleResetAll = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <h1>React Sample 4</h1>
        <h2>Counters</h2>
        <div className="container">
          <button
            onClick={() => this.handleAddCounter()}
            className="btn btn-warning btn-sm m-4"
          >
            Add counter
          </button>
          <button
            onClick={() => this.handleResetAll()}
            className="btn btn-danger btn-sm m-4"
          >
            Reset all counters
          </button>
          {this.state.counters.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              onHandleIncrement={this.handleIncrement}
              onHandleDecrement={this.handleDecrement}
              onHandleDeleteCounter={this.handleDeleteCounter}
            >
              <p> Counter number is: {counter.id}</p>
            </Counter>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default counters;
