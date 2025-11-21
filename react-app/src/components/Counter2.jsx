import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter2 = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <h1>Counter 2</h1>
      <p>Count: {state.count}</p>

       <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </div>
  );
};

export default Counter2;
