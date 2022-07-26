import React, { Component } from "react";
import { nanoid } from "nanoid";
import Counters from "./components/counters";
import parseElement from "./utils/parseElement.js";
import sumBy from "./utils/sumBy.js";
var _ = require("lodash");

class App extends Component {
  state = {
    result: 0,
    counters: [
      { id: nanoid(), value: 0, disabled: false, action: "+" },
      { id: nanoid(), value: 0, disabled: false, action: "-" },
      { id: nanoid(), value: 0, disabled: false, action: "+" },
    ],
  };

  changeActionHandler = (id, action) => {
    var updatedCounters = this.state.counters.map((counter) => {
      if (counter.id === id) {
        let copyCounter = { ...counter };
        copyCounter.action = action;
        return copyCounter;
      } else {
        return counter;
      }
    });
    const result = sumBy(updatedCounters);
    this.setState({
      result: result,
      counters: updatedCounters,
    });
  };

  handleChange = (newValue, id) => {
    var updatedCounters = this.state.counters.map((counter) => {
      if (counter.id === id) {
        let copyCounter = { ...counter };
        copyCounter.value = parseElement(newValue);
        return copyCounter;
      } else {
        return counter;
      }
    });
    const result = sumBy(updatedCounters);
    this.setState({
      result: result,
      counters: updatedCounters,
    });
  };
  handleAddRow = () => {
    const newCounter = {
      id: nanoid(),
      value: 0,
      disabled: false,
      action: "+",
    };
    const counters = [...this.state.counters, newCounter];
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const filteredCounters = this.state.counters.filter(
      (c) => c.id !== counterId
    );
    const result = sumBy(filteredCounters);
    this.setState({
      result,
      counters: filteredCounters,
    });
  };

  handleDisable = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].disabled = !counters[index].disabled;
    this.setState({ counters });
  };

  render() {
    return (
      <div className="container">
        <button
          onClick={this.handleAddRow}
          className="btn btn-primary btn-sm m-2"
        >
          Add Row
        </button>
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onDisable={this.handleDisable}
          onChange={this.handleChange}
          onChangeAction={this.changeActionHandler}
        />

        <div className="result">
          <span> Result = </span>
          <span>{this.state.result}</span>
        </div>
      </div>
    );
  }
}

export default App;
