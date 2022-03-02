import React, { Component } from "react";
class Counter extends Component {
  stateCunterColor = () => {
    let colors = "badge m-2 bg-";
    return (colors += this.props.counter.value === 0 ? "danger" : "success");
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.props.children}</div>
        <div className="container">
          <span className={this.stateCunterColor()}>
            {this.props.counter.value}
          </span>
          <button
            onClick={() => this.props.onHandleIncrement(this.props.counter)}
            className={"btn btn-secondary btn-sm m-2"}
          >
            Incrising
          </button>
          <button
            onClick={() => this.props.onHandleDecrement(this.props.counter)}
            className={"btn btn-secondary btn-sm m-2"}
            disabled={this.props.counter.value === 0 ? true : false}
          >
            Decrising
          </button>
          <button
            onClick={() =>
              this.props.onHandleDeleteCounter(this.props.counter.id)
            }
            className="btn btn-secondary btn-sm m-2"
          >
            Detele counter
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
