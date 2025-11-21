// import { useState } from "react";

// const Counter = () => {
//   // Hooks - useState(),useEffect()
//   const [count, setCount] = useState(0);
//   //   const[ currentvalue, updatedvalue]= useState(initialvalue)

//   console.log(count);

//   return (
//     <div>
//       <h3>Count {count}</h3>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;

import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <h1>Counter 1</h1>
      <p>Count: {state.count}</p>

      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      <button onClick={() => dispatch({ type: "RES" })}>Reset</button>
    </div>
  );
};

export default Counter;
