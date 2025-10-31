import { useState } from "react";

const Counter = () => {
  // Hooks - useState(),useEffect()
  const [count, setCount] = useState(0);
  //   const[ currentvalue, updatedvalue]= useState(initialvalue)

  console.log(count);

  return (
    <div>
      <h3>Count {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
