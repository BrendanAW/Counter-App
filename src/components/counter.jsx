import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: [],
  };

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  handleIncrement = (x) => {
    console.log(x);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <>
        {this.props.children}
        <span className={this.getClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(3)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </>
    );
  }

  renderTags() {
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
