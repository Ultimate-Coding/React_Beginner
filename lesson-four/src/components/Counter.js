import React from "react";

let count = 0;

function Counter() {
  count = count + 1;
  return <div>{count}</div>;
}

export default Counter;
