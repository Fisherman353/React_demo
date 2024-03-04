import React, { useState } from "react";

const Counter = ({ counter, onIncrement, onDelete, onDecrement }) => {
  const formatCount = () => {
    return counter.value === 0 ? "Zero" : counter.value;
  };

  let classes = getBadgeClasses();

  return (
    <>
      <div className="row ">
        <div className="col-1">
          <span className={classes}>{formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm ml-1"
          >
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value === 0 ? 'disabled' : ""}
          >
            -
          </button>
          <button
            onClick={() => {
              onDelete(counter.id);
            }}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
      </div>
    </>
  );

  function getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes = classes + (counter.value === 0 ? "warning" : "primary");
    return classes;
  }
};

export default Counter;
