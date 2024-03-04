import React, { useState } from "react";
import Counter from "./counter";

const Counters = ({counters, onDelete, onReset, onIncrement, onDecrement}) => {
  

  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;

