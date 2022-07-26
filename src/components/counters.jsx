import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onDelete, onDisable, onChange, onChangeAction } =
      this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onDisable={onDisable}
            onChange={onChange}
            onChangeAction={onChangeAction}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
