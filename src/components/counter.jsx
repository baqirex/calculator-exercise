import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onChange, onDelete, onDisable, onChangeAction } =
      this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <select
              onChange={(e) => onChangeAction(counter.id, e.target.value)}
              className="m-2"
              disabled={counter.disabled}
              value={counter.action}
            >
              <option value={"+"}>+</option>
              <option value={"-"}>-</option>
            </select>
            <input
              type="number"
              onChange={(e) => onChange(parseInt(e.target.value), counter.id)}
              disabled={counter.disabled}
            />
            <button
              className={this.getButtonClass("danger")}
              onClick={() => onDelete(this.props.counter.id)}
            >
              Delete
            </button>
            <button
              onClick={() => onDisable(this.props.counter)}
              className={this.getButtonClass("secondary")}
            >
              {counter.disabled ? "Enable" : "Disable"}
            </button>
          </div>
        </div>
      </div>
    );
  }
  getButtonClass(text) {
    let btnclass = "btn btn-sm m-2 btn-";
    btnclass += text;
    return btnclass;
  }
}

export default Counter;
